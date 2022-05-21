import React, {useState, useEffect, createRef} from "react";
import { useSelector } from "react-redux";
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import { DocumentUploadFormWrapper, DocumentUploadFormHeader,
    DocumentUploadFormDataSection, DocumentUploadNotWorking, DocumentUploadTextInput,
    DocumentUploadNextButton, DocumentUploadDataSubSection, DocumentUploadFileHeader, DocumentUploadFileInput,
    DocumentUploadFileDescription, DocumentUploadFileButton } from "../../styled/subpages/documentUpload";

import { RootState } from "../../redux/mainReducer";

const BackgroundPattern = require("../../assets/pattern_background5.webp");

const DocumentUpload:React.FC = () => {

    const currentToken:string = useSelector((state: RootState) => state.generalData.currentToken);

    const [isWorking, toggleIsWorking] = useState<boolean>(true);
    const [phaseNumber, setPhaseNumber] = useState<number>(1); // 1 - name, 2 - file & upload
    const [materialName, setMaterialName] = useState<string>("");
    const [file, setFile] = useState<any>(null);
    const [desc, setDesc] = useState<string>("");

    const FileRef = createRef<HTMLInputElement>();

    const sendFile = () => {
        console.log(file);
    }

    useEffect(() => {
        toggleIsWorking(currentToken.length === 0 ? false : true);
    }, [currentToken])

    return <MainContainer className="block-center">
        <LandingSectionWrapper className="block-center" backgroundSize="initial" source={BackgroundPattern}
            backgroundRepeat="repeat">
            <LandingSectionFilter>
                <DocumentUploadFormWrapper className="block-center">
                    <DocumentUploadFormHeader className="block-center">
                        Tworzenie dokumentu
                    </DocumentUploadFormHeader>
                    <DocumentUploadFormDataSection className="block-center">
                        {
                            isWorking ? phaseNumber === 1 ? <>
                                <DocumentUploadTextInput type="text" placeholder="Jak nazwiesz ten materiał?"
                                    value={materialName} onChange={(e) => setMaterialName(e.target.value)}/>
                             </> : <>
                                <DocumentUploadDataSubSection className="block-center">
                                    <DocumentUploadFileHeader className="block-center">
                                        Zamieść materiał
                                    </DocumentUploadFileHeader>
                                    <DocumentUploadFileButton className="block-center" onClick={() => FileRef !== undefined && FileRef.current !== null ? FileRef.current.click() : null}>
                                        Wybierz
                                    </DocumentUploadFileButton>
                                    <DocumentUploadFileInput type="file" ref={FileRef}
                                        onClick={async(e:any) => {console.log(e.target.files);e.target.files && e.target.files.length > 0 ? setFile(e.target.files[0]) : setFile(null)}}/>
                                    <DocumentUploadFileDescription className="block-center"
                                        onChange={(e:any) => setDesc(e.target.value)}></DocumentUploadFileDescription>
                                </DocumentUploadDataSubSection>
                                {
                                    file !== null ? <DocumentUploadFileButton className="block-center" top={5}
                                        onClick={() => sendFile()}>
                                        Wyślij
                                    </DocumentUploadFileButton>: null
                                }
                             </> : <DocumentUploadNotWorking className="block-center">
                                {currentToken.length === 0 ? "Zaloguj się, żeby wrzucić materiał" : "Coś poszło nie tak. Spróbuj ponownie"}
                            </DocumentUploadNotWorking>
                        }
                    </DocumentUploadFormDataSection>
                    <DocumentUploadNextButton className="block-center" scale={materialName.length === 0 || phaseNumber !== 1 ? 0 : 1}
                        onClick={() => setPhaseNumber(2)}>
                        <SwipeRightAltIcon style={{color: "inherit", fontSize: "inherit"}}/>
                    </DocumentUploadNextButton>
                </DocumentUploadFormWrapper>
            </LandingSectionFilter>
        </LandingSectionWrapper>
    </MainContainer>
};

export default DocumentUpload;