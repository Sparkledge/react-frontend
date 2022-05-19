import React, {useState, useEffect} from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter, LandingSectionHeader } from "../../styled/subpages/welcome";
import { DocumentDisplayerErrorHeader } from "../../styled/subpages/documentDisplayer";

import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

import { RootState } from "../../redux/mainReducer";

const Background = require("../../assets/pattern_background.webp");

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DocumentDisplayer:React.FC = () => {
    
    const [isError, toggleIsError] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [isFile, toggleIsFile] = useState<boolean>(false);
    const [file, setFile] = useState<any>(0);
    const loginUserSelector = useSelector((state: RootState) => state.generalData.currentToken);
    
    const {docId} = useParams();

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
                console.log(res);
                setTitle(res.data.title);
                await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/${res.data.fileKey}`, {
                    headers: {
                        "Authorization": `Bearer ${loginUserSelector}`
                    },
                    responseType: 'blob',
                }).then((res) => {
                    toggleIsFile(true);
                    setFile(res.data);
                })
                .catch((err) => {
                    console.log(err)
                    toggleIsFile(false);
                    toggleIsError(true);
                });
            })
            .catch((err) => {
                console.log(err)
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
            bottomPadding={0}>
            <LandingSectionFilter>

                <LandingSectionHeader className="block-center">
                    {title}
                </LandingSectionHeader>

                {loginUserSelector.length === 0 || isError? 
                <DocumentDisplayerErrorHeader className="block-center">
                    {isError ? "Coś poszło nie tak. Spróbuj ponownie": "Zaloguj się, aby móc wyświetlić dokument"}
                </DocumentDisplayerErrorHeader>: isFile ? <>
                    <Document file = {`data:application/pdf;base64,${file}`} onLoadSuccess={() => {console.log("loaded")}} 
                    onLoadProgress={() => console.log("loading")}
                    loading={<SearchingPreloaderComponent/>} onLoadError = {() => toggleIsError(true)} error={<div>Coś dupło</div>}>
                        <Page pageNumber={1}/>
                    </Document>
                </> : <></>}

            </LandingSectionFilter>
                
        </LandingSectionWrapper>

    </MainContainer>
};
/* */
export default DocumentDisplayer;