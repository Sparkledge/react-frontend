import React, {
  useState, useEffect, Suspense, MouseEvent, 
} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useWindowSize } from "react-use";

import useMediaQuery from "@mui/material/useMediaQuery";
/* import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind'; */
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter, LandingSectionHeader } from "../../styled/subpages/welcome";
import {
  DocumentDisplayerErrorHeader, DocumentDisplayerWrapper,
  DocumentDataWrapper, SwipperBtn, InfoContainer, DescriptionDataContainer,
  DescriptionDataHeader, DescriptionDataContent, DocumentDisplayerIframe, 
} from "../../styled/subpages/documentDisplayer";

import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

import base64ArrayBuffer from "../auxiliaryFunctions/documentDisplayer/decodingToBase64";
import getTheData from "../../connectionFunctions/documentDisplayer/getTheData";
import addLike from "../auxiliaryFunctions/documentDisplayer/addLikeFunction";

import { RootState } from "../../redux/mainReducer";

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
  const [fileAuthor, setFileAuthor] = useState<string>("");

  const [isFile, toggleIsFile] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const [fileSrc, setFileSrc] = useState<any>(null);
  const [fileContentRef, setFileContentRef] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagesNumber, setPagesNumber] = useState<number>(1);
  const [currentlyRendered, setCurrentlyRendered] = useState<number>(10);

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

  useEffect(() => {
    toggleIsError(false);
    if (docId === undefined || docId.length === 0) {
      toggleIsError(true);
    } else {
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
        setFile,
      );
    }
  }, [docId, loginUserSelector]);

  const handleScrolling = (e:any) => {
    if ((changeDimensionsOfDocumentChecker && e.currentTarget.scrollTop / e.currentTarget.scrollHeight > 0.9)
        || (!changeDimensionsOfDocumentChecker && e.currentTarget.scrollTop / e.currentTarget.scrollHeight > 0.8)
        || (!phoneWidthChecker && e.currentTarget.scrollTop / e.currentTarget.scrollHeight > 0.6)) {
      setCurrentlyRendered(currentlyRendered + 5 > pagesNumber ? pagesNumber : currentlyRendered + 5);
    }
  };

  /* const insertStylesToPDF = () : void => {
        if(fileContentRef !== undefined && fileContentRef.contentWindow !== undefined
                && fileContentRef.contentWindow.document !== undefined 
                && fileContentRef.contentWindow.document.body !== undefined){
            console.log(fileContentRef.contentWindow.document.body.querySelector("embed").contentDocument);
            fileContentRef.contentWindow.document.body.style.background = "transparent";
        }
    } */

  return (
    <MainContainer className="block-center">
      <LandingSectionWrapper
        className="block-center"
        source={Background}
        backgroundSize="initial"
        bottomPadding={10}
        backgroundRepeat="repeat"
      >
        <LandingSectionFilter>

          <LandingSectionHeader className="block-center">
            {title}
          </LandingSectionHeader>

          {loginUserSelector.length === 0 || isError 
            ? (
              <DocumentDisplayerErrorHeader className="block-center">
                {isError ? "Coś poszło nie tak. Spróbuj ponownie" : "Zaloguj się, aby móc wyświetlić dokument"}
              </DocumentDisplayerErrorHeader>
            ) : isFile ? (
              <>
                
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
                    file={`data:application/pdf;base64,${base64ArrayBuffer(file)}`} 
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
                  <InfoContainer>
                    {`${currentPage}/${pagesNumber}`}
                  </InfoContainer>
                  <InfoContainer className="hoverClass">
                    <ThumbUpIcon
                      style={{ color: "inherit", fontSize: "1.6em", verticalAlign: "middle" }}
                      onClick={() => addLike(docId, loginUserSelector, isLiked, likesNumber, setLikesNumber, toggleIsLiked)}
                    /> 
                    {" "}
                    {likesNumber}
                  </InfoContainer>
                </DocumentDataWrapper>
                <DescriptionDataContainer className="block-center">
                  <DescriptionDataHeader className="block-center">
                    Autor: 
                    {" "}
                    {fileAuthor}
                  </DescriptionDataHeader>
                  <DescriptionDataContent className="block-center">
                    {descriptionOfFile}
                  </DescriptionDataContent>
                </DescriptionDataContainer>
                <Suspense fallback={null}>
                  <CommentingForm />
                  <CommentingSectionDisplay />
                </Suspense>
              </>
            ) : null}

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
