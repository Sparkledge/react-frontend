import React, {useState, useEffect, Suspense, MouseEvent } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import jwt from 'jwt-decode'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter, LandingSectionHeader } from "../../styled/subpages/welcome";
import { DocumentDisplayerErrorHeader, DocumentDisplayerWrapper,
    DocumentDataWrapper, SwipperBtn, InfoContainer, DescriptionDataContainer,
    DescriptionDataHeader, DescriptionDataContent } from "../../styled/subpages/documentDisplayer";

import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

import base64ArrayBuffer from "../auxiliaryFunctions/documentDisplayer/decodingToBase64";
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
    const [fileSrc, setFileSrc] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pagesNumber, setPagesNumber] = useState<number>(1);

    const loginUserSelector = useSelector((state: RootState) => state.generalData.currentToken);

    const tabletWidthChecker = useMediaQuery('(min-width: 768px)');
    const phoneWidthChecker = useMediaQuery('(min-width: 460px)');
    const smallDevicesWidthChecker = useMediaQuery('(min-width: 350px)');
    const microDevicesWidthChecker = useMediaQuery('(min-width: 290px)');
    
    const {docId} = useParams();

    const getTheData = async() => {
        if(loginUserSelector.length > 0 ){
            toggleIsFile(false);
            await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/getDocument/${docId}`,{
                headers: {
                    "Authorization": `Bearer ${loginUserSelector}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(async(res) => {
                console.log(res.data);
                let id:any = jwt(loginUserSelector);
                setTitle(res.data.title);
                setLikesNumber(res.data.likesNum);
                toggleIsLiked(res.data.likes.find((elem: string) => elem === id.UserInfo.id) === undefined ? false : true);
                setViewsNumber(res.data.viewsNum);
                setFileAuthor(res.data.creatorEmail);
                setDescriptionOfFile(res.data.description);
                id = null;
                await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/${res.data.fileKey}`, {
                    headers: {
                        "Authorization": `Bearer ${loginUserSelector}`,
                        'Accept': 'application/pdf'
                    },
                    responseType: 'arraybuffer',
                }).then((res) => {
                    toggleIsFile(true);
                    setFile(res.data);
                })
                .catch((err) => {
                    toggleIsFile(false);
                    toggleIsError(true);
                });
            })
            .catch((err) => {
                console.log(err);
                toggleIsError(true);
            });
        }
    }

    const onDocumentLoad = ({numPages}:{numPages: number}) => {
        setPagesNumber(numPages);
        setCurrentPage(1);
    }

    useEffect(() => {
        toggleIsError(false);
        if(docId === undefined || docId.length === 0){
            toggleIsError(true);
        }
        else{
            getTheData();
        }
    }, [docId, loginUserSelector])

    return <MainContainer className="block-center">
        <LandingSectionWrapper className="block-center" source={Background} backgroundSize="initial"
            bottomPadding={10} backgroundRepeat="repeat">
            <LandingSectionFilter>

                <LandingSectionHeader className="block-center">
                    {title}
                </LandingSectionHeader>

                {loginUserSelector.length === 0 || isError ? 
                <DocumentDisplayerErrorHeader className="block-center">
                    {isError ? "Coś poszło nie tak. Spróbuj ponownie": "Zaloguj się, aby móc wyświetlić dokument"}
                </DocumentDisplayerErrorHeader>: isFile ? <>
                
                <DocumentDisplayerWrapper className="block-center"  onContextMenu={(e:MouseEvent) => e.preventDefault()}>
                    <Document file = {`data:application/pdf;base64,${base64ArrayBuffer(file)}`} 
                    onLoadSuccess={onDocumentLoad} 
                    loading={<SearchingPreloaderComponent/>} onLoadError = {() => toggleIsError(true)} 
                    error={<div></div>}
                    className="inline displayer">
                        <Page pageNumber={currentPage} scale={tabletWidthChecker ? 1 : phoneWidthChecker ? 0.7 : smallDevicesWidthChecker ? 0.5 : microDevicesWidthChecker? 0.4 : 0.3}/>
                    </Document>
                </DocumentDisplayerWrapper>
                <DocumentDataWrapper className="block-center">
                    <SwipperBtn onClick={() => setCurrentPage(1)}>
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
                    </SwipperBtn>
                    <InfoContainer>
                        <RemoveRedEyeIcon style={{color: "inherit",fontSize: "1.6em", verticalAlign: "middle"}}/> {viewsNumber}
                    </InfoContainer>
                    <InfoContainer>
                        {`${currentPage}/${pagesNumber}`}
                    </InfoContainer>
                    <InfoContainer className="hoverClass">
                        <ThumbUpIcon style={{color: "inherit",fontSize: "1.6em", verticalAlign: "middle"}}
                            onClick={() => addLike(docId, loginUserSelector, isLiked, likesNumber, setLikesNumber, toggleIsLiked)}/> {likesNumber}
                    </InfoContainer>
                </DocumentDataWrapper>
                <DescriptionDataContainer className="block-center">
                    <DescriptionDataHeader className="block-center">
                        Autor: {fileAuthor}
                    </DescriptionDataHeader>
                    <DescriptionDataContent className="block-center">
                        {descriptionOfFile}
                    </DescriptionDataContent>
                </DescriptionDataContainer>
                <Suspense fallback={<></>}>
                    <CommentingForm/>
                    <CommentingSectionDisplay/>
                </Suspense>
                </> : <></>}

            </LandingSectionFilter>
                
        </LandingSectionWrapper>
        <Suspense fallback={<></>}>
            <FooterComponent/>
        </Suspense>

    </MainContainer>
};
/* */
export default DocumentDisplayer;