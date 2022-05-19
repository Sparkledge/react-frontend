import React, {useState, useEffect, Suspense} from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter, LandingSectionHeader } from "../../styled/subpages/welcome";
import { DocumentDisplayerErrorHeader, DocumentDisplayerWrapper,
    DocumentDataWrapper, SwipperBtn } from "../../styled/subpages/documentDisplayer";

import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

import { RootState } from "../../redux/mainReducer";


const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));

const Background = require("../../assets/pattern_background.webp");

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DocumentDisplayer:React.FC = () => {
    
    const [isError, toggleIsError] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [isFile, toggleIsFile] = useState<boolean>(false);
    const [file, setFile] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
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
        if (byteRemainder == 1) {
          chunk = bytes[mainLength];
      
          a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
      
          // Set the 4 least significant bits to zero
          b = (chunk & 3)   << 4; // 3   = 2^2 - 1
      
          base64 += encodings[a] + encodings[b] + '==';
        } else if (byteRemainder == 2) {
          chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
      
          a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
          b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
      
          // Set the 2 least significant bits to zero
          c = (chunk & 15)    <<  2; // 15    = 2^4 - 1
      
          base64 += encodings[a] + encodings[b] + encodings[c] + '=';
        }
        
        return base64;
    }

    const onDocumentLoad = ({numPages}:{numPages: number}) => {
        setPagesNumber(numPages);
        setCurrentPage(1);
    }

    const getTheData = async() => {
        if(loginUserSelector.length > 0 ){
            toggleIsFile(false);
            await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/document/`, {
                documentId: docId
            },{
                headers: {
                    "Authorization": `Bearer ${loginUserSelector}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(async(res) => {
                setTitle(res.data.title);
                await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/${res.data.fileKey}`, {
                    headers: {
                        "Authorization": `Bearer ${loginUserSelector}`
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
                toggleIsError(true);
            });
        }
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
        <LandingSectionWrapper className="block-center" source={Background} backgroundSize="contain"
            bottomPadding={10}>
            <LandingSectionFilter>

                <LandingSectionHeader className="block-center">
                    {title}
                </LandingSectionHeader>

                {loginUserSelector.length === 0 || isError? 
                <DocumentDisplayerErrorHeader className="block-center">
                    {isError ? "Coś poszło nie tak. Spróbuj ponownie": "Zaloguj się, aby móc wyświetlić dokument"}
                </DocumentDisplayerErrorHeader>: isFile ? <>
                
                <DocumentDisplayerWrapper className="block-center">
                    <Document file = {`data:application/pdf;base64,${base64ArrayBuffer(file)}`} 
                    onLoadSuccess={onDocumentLoad} 
                    loading={<SearchingPreloaderComponent/>} onLoadError = {() => toggleIsError(true)} error={<div>Coś dupło</div>}
                    className="inline">
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

                </DocumentDataWrapper>
                
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