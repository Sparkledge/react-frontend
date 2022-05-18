import React, {useState, useEffect} from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter, LandingSectionHeader } from "../../styled/subpages/welcome";
import { DocumentDisplayerErrorHeader } from "../../styled/subpages/documentDisplayer";

import { RootState } from "../../redux/mainReducer";

const Background = require("../../assets/pattern_background.webp");

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DocumentDisplayer:React.FC = () => {
    
    const [isError, toggleIsError] = useState<boolean>(false);
    const [isFile, toggleIsFile] = useState<boolean>(false);
    const [file, setFile] = useState<any>(0);
    const loginUserSelector = useSelector((state: RootState) => state.generalData.currentToken);
    
    const {docId} = useParams();

    const getTheData = async() => {
        if(loginUserSelector.length > 0 ){
            toggleIsFile(false);
            await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/${docId}`,{
                headers: {
                    "Authorization": `Bearer ${loginUserSelector}`,
                    "responseType": "arraybuffer",
                    'Content-Type': 'application/json',
                    "Accept": 'application/pdf',
                }
            })
            .then((res) => {
                toggleIsFile(true);
                console.log(res);
                setFile(res.data);
            })
            .catch((err) => {
                console.log(err)
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
    }, [])

    return <MainContainer className="block-center">
        <LandingSectionWrapper className="block-center" source={Background} backgroundSize="contain"
            bottomPadding={0}>
            <LandingSectionFilter>

                <LandingSectionHeader className="block-center">
                    Document title
                </LandingSectionHeader>

                {loginUserSelector.length === 0 || isError? 
                <DocumentDisplayerErrorHeader className="block-center">
                    {isError ? "Coś poszło nie tak. Spróbuj ponownie": "Zaloguj się, aby móc wyświetlić dokument"}
                </DocumentDisplayerErrorHeader>: isFile ? <>
                    <Document file={`data:application/pdf;base64,${file}`} onLoadSuccess={() => {console.log("loaded")}} 
                    loading={<div style={{color: "white"}}>Ładowanie...</div>} error={<div>Coś dupło</div>}>
                        <Page pageNumber={0} />
                    </Document>
                </> : <></>}

            </LandingSectionFilter>
                
        </LandingSectionWrapper>

    </MainContainer>
};

export default DocumentDisplayer;