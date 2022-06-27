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

import { RootState } from "../../redux/mainReducer";


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

    const base64ArrayBuffer = (arrayBuffer:ArrayBuffer) => {
        let base64    = '';
        let encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      
        let bytes         = new Uint8Array(arrayBuffer);
        let byteLength    = bytes.byteLength;
        let byteRemainder = byteLength % 3;
        let mainLength    = byteLength - byteRemainder;
      
        let a, b, c, d;
        let chunk;
      
        // Main loop deals with bytes in chunks of 3
        for (let i = 0; i < mainLength; i = i + 3) {
          // Combine the three bytes into a single integer
          chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
      
          // Use bitmasks to extract 6-bit segments from the triplet
          a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
          b = (chunk & 258048)   >> 12; // 258048   = (2^6 - 1) << 12
          c = (chunk & 4032)     >>  6 ;// 4032     = (2^6 - 1) << 6
          d = chunk & 63   ;            // 63       = 2^6 - 1
      
          // Convert the raw binary segments to the appropriate ASCII encoding
          base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
        }
      
        // Deal with the remaining bytes and padding
        if (byteRemainder === 1) {
          chunk = bytes[mainLength];
      
          a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
      
          // Set the 4 least significant bits to zero
          b = (chunk & 3)   << 4; // 3   = 2^2 - 1
      
          base64 += encodings[a] + encodings[b] + '===';
        } else if (byteRemainder === 2) {
          chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
      
          a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
          b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
      
          // Set the 2 least significant bits to zero
          c = (chunk & 15)    <<  2; // 15    = 2^4 - 1
      
          base64 += encodings[a] + encodings[b] + encodings[c] + '=';
        }
        
        return base64;
    }

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

    const addLike = async() => {
        await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/likes`, {
                documentId: docId
        }, {
            headers: {
                 "Content-Type": "application/json",
                 "Authorization": `Bearer ${loginUserSelector}`,
            } 
        })
        .then((res) => {
            setLikesNumber(isLiked ? likesNumber-1 : likesNumber+1);
            toggleIsLiked(!isLiked);
        })
        .catch((err) => {
            console.log(err);
        })
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

                {loginUserSelector.length === 0 || isError? 
                <DocumentDisplayerErrorHeader className="block-center">
                    {isError ? "Coś poszło nie tak. Spróbuj ponownie": "Zaloguj się, aby móc wyświetlić dokument"}
                </DocumentDisplayerErrorHeader>: isFile ? <>
                
                <DocumentDisplayerWrapper className="block-center"  onContextMenu={(e:MouseEvent) => e.preventDefault()}>
                    {/*<embed
                        src={fileSrc + "#toolbar=0"}
                        type="application/pdf"
                        height={800}
                        width={500}/>*/}
                    <Document file = {`data:application/pdf;base64,${base64ArrayBuffer(file)}`} 
                    onLoadSuccess={onDocumentLoad} 
                    loading={<SearchingPreloaderComponent/>} onLoadError = {() => toggleIsError(true)} 
                    error={<div>Coś dupło</div>}
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
                    <InfoContainer className="hoverClass">
                        <ThumbUpIcon style={{color: "inherit",fontSize: "1.6em", verticalAlign: "middle"}}
                            onClick={() => addLike()}/> {likesNumber}
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