import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import { DocumentUploadFormWrapper, DocumentUploadFormHeader,
    DocumentUploadFormDataSection, DocumentUploadNotWorking, DocumentUploadTextInput,
    DocumentUploadNextButton } from "../../styled/subpages/documentUpload";

import { RootState } from "../../redux/mainReducer";

const BackgroundPattern = require("../../assets/pattern_background.webp");

const DocumentUpload:React.FC = () => {

    const currentToken:string = useSelector((state: RootState) => state.generalData.currentToken);

    const [isWorking, toggleIsWorking] = useState<boolean>(true);
    const [phaseNumber, setPhaseNumber] = useState<number>(1); // 1 - name, 2 - file & upload
    const [materialName, setMaterialName] = useState<string>("");

    useEffect(() => {
        if(currentToken.length === 0) toggleIsWorking(false);
    }, [])

    return <MainContainer className="block-center">
        <LandingSectionWrapper className="block-center" backgroundSize="contain" source={BackgroundPattern}>
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