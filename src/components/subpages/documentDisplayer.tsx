import React, {
  useState, useEffect, Suspense, MouseEvent, 
} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useWindowSize } from "react-use";
import useLocalStorage from "use-local-storage";
import { Adsense } from "@ctrl/react-adsense";

import useMediaQuery from "@mui/material/useMediaQuery";
/* import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind'; */
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DownloadIcon from "@mui/icons-material/Download";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";

import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter, LandingSectionHeader } from "src/styled/subpages/welcome";
import {
  DocumentDisplayerErrorHeader, DocumentDisplayerDataWrapper, DocumentDisplayerWrapper,
  DocumentDataWrapper, SwipperBtn, InfoContainer, DescriptionDataContainer,
  DescriptionDataHeader, DescriptionDataContent, DocumentDisplayerIframe, 
  DocumentDisplayerDownloadBtn,
} from "src/styled/subpages/documentDisplayer";

import { getTheData, loadTheDownloadLink, loadTheFile } from "src/connectionFunctions/documentDisplayer/getTheData";
import addLike from "src/connectionFunctions/documentDisplayer/addLikeFunction";
import checkIfLiked from "src/connectionFunctions/documentDisplayer/checkIfLiked";
import getCommentData from "src/connectionFunctions/documentDisplayer/getCommentsData";
import checkTheOwnership from "src/connectionFunctions/documentDisplayer/checkTheOwnership";
import deleteMaterial from "src/connectionFunctions/userPanel/deleteMaterial";

import { RootState } from "src/redux/mainReducer";
import blobToBase64 from "../auxiliaryFunctions/documentDisplayer/decodingToBase64";
import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";
import HeadTags from "../subcomponents/headTags";
import DeletingMaterialPopup from "../helperComponents/documentDisplayer/deletingMaterialPopup";

const ReportingPanel = React.lazy(() => import("../helperComponents/documentDisplayer/reportingPanel"));

const CommentingForm = React.lazy(() => import("../helperComponents/documentDisplayer/commentingForm"));
const CommentingSectionDisplay = React.lazy(() => import("../helperComponents/documentDisplayer/commentingDisplay"));

const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));

const Background = require("../../assets/pattern_background5.webp");

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DocumentDisplayer:React.FC = () => {
  const [isError, toggleIsError] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [likesNumber, setLikesNumber] = useState<number>(0);
  const [isLiked, toggleIsLiked] = useState<boolean>(false);
  const [viewsNumber, setViewsNumber] = useState<number>(0);
  const [descriptionOfFile, setDescriptionOfFile] = useState<string>("");
  const [fileCourse, setFileCourse] = useState<string>("");
  const [fileAuthor, setFileAuthor] = useState<string>("");
  const [fileId, setFileId] = useState<string>("");
  const [commentsList, setCommentsList] = useState<any[]>([]);
  const [isCommentsError, toggleIsCommentsError] = useState<boolean>(false);
  const [isReportingOn, toggleIsReportingOn] = useState<boolean>(false);
  const [isTheOwner, toggleIsTheOwner] = useState<boolean>(false);
  const [isDeleted, toggleIsDeleted] = useState<boolean>(false);
  const [isConsentWindowOpened, toggleIsConsetWindowOpened] = useState<boolean>(false);

  const [isFile, toggleIsFile] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const [fileSrc, setFileSrc] = useState<string>("");
  const [isFileRequested, toggleIsFileRequested] = useState<boolean>(false);
  const [fileContentRef, setFileContentRef] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagesNumber, setPagesNumber] = useState<number>(1);
  const [currentlyRendered, setCurrentlyRendered] = useState<number>(10);
  
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");

  const loginUserSelector = useSelector((state: RootState) => state.generalData.currentToken);

  const tabletWidthChecker = useMediaQuery("(min-width: 768px)");
  const changeDimensionsOfDocumentChecker = useMediaQuery("(min-width: 600px)");
  const phoneWidthChecker = useMediaQuery("(min-width: 460px)");
  const smallDevicesWidthChecker = useMediaQuery("(min-width: 350px)");
  const microDevicesWidthChecker = useMediaQuery("(min-width: 290px)");
  const { width, height } = useWindowSize();
  const documentRef = React.createRef<HTMLDivElement>();
    
  const { docId } = useParams();

  const onDocumentLoad = ({ numPages }:{ numPages: number }) => {
    setPagesNumber(numPages);
    setCurrentPage(1);
  };

  const pushNewComment = (newComment: any) => {
    const operand = [newComment, ...commentsList];
    console.log(operand);
    setCommentsList(operand);
  };

  const deleteAComment = (commentId: number) => {
    const operand = [...commentsList].filter((elem: any) => elem.id !== commentId);
    setCommentsList(operand);
  };

  useEffect(() => {
    if (!isError) {
      toggleIsError(false);
      if (docId === undefined || docId.length === 0) {
        toggleIsError(true);
      } else {
        checkIfLiked(docId, loginUserSelector, toggleIsLiked);
        getTheData(
          loginUserSelector, 
          toggleIsFile, 
          docId, 
          setTitle, 
          setLikesNumber,
          toggleIsLiked, 
          setViewsNumber, 
          setFileAuthor,
          setDescriptionOfFile, 
          toggleIsError, 
          setFileSrc, 
          smallDevicesWidthChecker, 
          setFileId,
          setFileCourse,
        );
        if (memoryUserId.length > 0) {
          checkTheOwnership(memoryUserId, docId, toggleIsError, toggleIsTheOwner);
          getCommentData(docId, memoryUserId, setCommentsList, toggleIsCommentsError);
        }
      }
    }
  }, [docId, loginUserSelector, memoryUserId, isError]);

  const handleScrolling = (e:any) => {
    if ((changeDimensionsOfDocumentChecker && e.currentTarget.scrollTop / e.currentTarget.scrollHeight > 0.9)
        || (!changeDimensionsOfDocumentChecker && e.currentTarget.scrollTop / e.currentTarget.scrollHeight > 0.8)
        || (!phoneWidthChecker && e.currentTarget.scrollTop / e.currentTarget.scrollHeight > 0.6)) {
      setCurrentlyRendered(currentlyRendered + 5 > pagesNumber ? pagesNumber : currentlyRendered + 5);
    }
  };

  /* const insertStylesToPDF = () : void => {
    if (fileContentRef !== undefined && fileContentRef.contentWindow !== undefined
                && fileContentRef.contentWindow.document !== undefined 
                && fileContentRef.contentWindow.document.body !== undefined) {
      console.log(fileContentRef.contentWindow.document.body.querySelector("embed").contentDocument);
      fileContentRef.contentWindow.document.body.style.background = "transparent";
    }
  }; */

  return (
    <MainContainer className="block-center">
      <LandingSectionWrapper
        className="block-center"
        source={Background}
        backgroundSize="initial"
        bottomPadding={10}
        backgroundRepeat="repeat"
      >
        <HeadTags areAdsOn title={`${title !== "" ? title : isError ? "Error" : "Dokument"} - Sparkledge`} description="" />
        <LandingSectionFilter>

          {
            isReportingOn ? (
              <Suspense fallback={null}>
                <ReportingPanel loginUserSelector={loginUserSelector} documentId={docId} closeThePanel={toggleIsReportingOn} />
              </Suspense>
            ) : null
          }

          <LandingSectionHeader className="block-center" isSmaller>
            {isDeleted ? "Dokument został usunięty" : title}
          </LandingSectionHeader>

          {isConsentWindowOpened ? (
            <DeletingMaterialPopup 
              consentCallback={() => {
                deleteMaterial(memoryUserId, docId, undefined, undefined, toggleIsDeleted); 
                toggleIsConsetWindowOpened(false);
              }} 
              denyingCallback={() => toggleIsConsetWindowOpened(false)}
            />
          ) : null}

          {isDeleted ? null : loginUserSelector.length === 0 || isError 
            ? (
              <DocumentDisplayerErrorHeader className="block-center">
                {isError ? "Coś poszło nie tak. Spróbuj ponownie" : (
                  <Link to="/signin">
                    <DocumentDisplayerDownloadBtn className="block-center">
                      Zaloguj się
                    </DocumentDisplayerDownloadBtn>
                  </Link>
                )}
              </DocumentDisplayerErrorHeader>
            ) : !isFileRequested && title.length > 0
              ? (
                <DocumentDisplayerDownloadBtn
                  className="block-center"
                  onClick={() => {
                    loadTheDownloadLink(
                      loginUserSelector, 
                      docId,  
                      toggleIsError,
                      setFileSrc,
                      toggleIsFileRequested,
                    ); loadTheFile(
                      loginUserSelector,
                      docId,
                      toggleIsFile,
                      toggleIsError,
                      setFile,
                    );
                  }}
                >
                  <CloudDownloadIcon style={{ color: "inherit", fontSize: "1.2em" }} />
                </DocumentDisplayerDownloadBtn>
              )
              : isFile ? (
                <DocumentDisplayerWrapper
                  className="block-center"
                  onContextMenu={(e:MouseEvent) => e.preventDefault()} 
                  onScroll={(e: any) => handleScrolling(e)}
                >
                  {/* smallDevicesWidthChecker ? <DocumentDisplayerIframe src={`${fileSrc}#toolbar=1&view=Fit`} 
                        title={title}
                        width={smallDevicesWidthChecker ? 
                            phoneWidthChecker ? tabletWidthChecker ? width*0.6 : width*0.8 : width*0.9 : width*0.95}
                        ref={setFileContentRef}
                        onLoad={() => insertStylesToPDF()}/>: <></> */}
                  <Document
                    file={`data:application/pdf;base64,${file}`} 
                    onLoadSuccess={onDocumentLoad} 
                    loading={<SearchingPreloaderComponent />}
                    onLoadError={() => toggleIsError(true)} 
                    error={<div />}
                    className="inline displayer"
                    inputRef={documentRef}
                  >
                    {Array.from(
                      new Array(pagesNumber),
                      (el, index) => (
                        index < currentlyRendered ? (
                          <Page 
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                          />
                        ) : null
                      ),
                    )}
                        
                  </Document>
                </DocumentDisplayerWrapper>
              ) : null}
          {
              loginUserSelector.length > 0 && !isError && title.length > 0 ? (
                <>
                  <DocumentDisplayerDataWrapper className="block-center">
                  
                    <DocumentDataWrapper className="block-center">
                      {/* <SwipperBtn onClick={() => setCurrentPage(1)}>
                        <FastRewindIcon style={{color: "inherit", fontSize: "inherit"}}/>
                    </SwipperBtn>
                    <SwipperBtn onClick={() => setCurrentPage(currentPage-1 < 1 ? 1 : currentPage-1)}>
                        <SwipeLeftAltIcon style={{color: "inherit", fontSize: "inherit"}}/>
                    </SwipperBtn>
                    <SwipperBtn onClick={() => setCurrentPage(currentPage+1 > pagesNumber ? currentPage : currentPage+1)}>
                        <SwipeRightAltIcon style={{color: "inherit", fontSize: "inherit"}}/>
                    </SwipperBtn>
                    <SwipperBtn onClick={() => setCurrentPage(pagesNumber)}>
                        <FastForwardIcon style={{color: "inherit", fontSize: "inherit"}}/>
            </SwipperBtn> */}
                      <InfoContainer>
                        <RemoveRedEyeIcon style={{ color: "inherit", fontSize: "1.6em", verticalAlign: "middle" }} /> 
                        {" "}
                        {viewsNumber}
                      </InfoContainer>
                      {/* <InfoContainer>
                      {`${currentPage}/${pagesNumber}`}
          </InfoContainer> */}
                      <InfoContainer className="hoverClass">
                        <ThumbUpIcon
                          style={{ color: "inherit", fontSize: "1.6em", verticalAlign: "middle" }}
                          onClick={() => addLike(docId, loginUserSelector, isLiked, likesNumber, setLikesNumber, toggleIsLiked)}
                        /> 
                        {" "}
                        {likesNumber}
                      </InfoContainer>
                      {isFileRequested ? (
                        <InfoContainer>
                          <a href={fileSrc} download={fileSrc.length > 0}>
                            <DocumentDisplayerDownloadBtn
                              className="block-center"
                              isInline
                            >
                              {fileSrc.length === 0 ? <AccessTimeFilledIcon style={{ color: "inherit", fontSize: "1em" }} />
                                : <DownloadIcon style={{ color: "inherit", fontSize: "1em" }} />}
                            </DocumentDisplayerDownloadBtn>
                          </a>
                        
                        </InfoContainer>
                      ) : null}
                      {isTheOwner ? (
                        <InfoContainer className="hoverClass">
                          <DeleteIcon 
                            style={{ color: "inherit", fontSize: "1.6em", verticalAlign: "middle" }}
                            onClick={() => toggleIsConsetWindowOpened(true)}
                          />
                        </InfoContainer>
                      ) : null}
                      <InfoContainer className="hoverClass">
                        <ReportIcon
                          style={{ color: "inherit", fontSize: "1.6em", verticalAlign: "middle" }}
                          onClick={() => toggleIsReportingOn(true)}
                        /> 
                      </InfoContainer>
                    </DocumentDataWrapper>
                    <DescriptionDataContainer className="block-center">
                      <DescriptionDataHeader className="block-center">
                        Autor: 
                        {" "}
                        {fileAuthor}
                      </DescriptionDataHeader>
                      {fileCourse.length > 0 ? (
                        <DescriptionDataHeader className="block-center" isSmaller>
                          {fileCourse}
                        </DescriptionDataHeader>
                      ) : null}
                      <DescriptionDataContent className="block-center">
                        {descriptionOfFile}
                      </DescriptionDataContent>
                    </DescriptionDataContainer>
                  </DocumentDisplayerDataWrapper>
                  <Suspense fallback={null}>
                    <CommentingForm
                      docId={docId}
                      loginUserSelector={loginUserSelector}
                      putCommentToTheList={pushNewComment}
                    />
                  </Suspense>
                  <Adsense 
                    client={process.env.REACT_APP_GOOGLE_ADSENSE}
                    slot={process.env.REACT_APP_GOOGLE_ADSENSE_SLOT}
                    style={{ display: "block" }}
                    layout="in-article"
                    format="fluid"
                  />
                  <Suspense fallback={null}>
                    <CommentingSectionDisplay
                      loginUserSelector={loginUserSelector}
                      commentsList={commentsList}
                      isError={isCommentsError}
                      successCallback={deleteAComment}
                    />
                  </Suspense>
                </>
              ) : null
            }

        </LandingSectionFilter>
                
      </LandingSectionWrapper>
      <Suspense fallback={null}>
        <FooterComponent />
      </Suspense>

    </MainContainer>
  );
};
/* */
export default DocumentDisplayer;
