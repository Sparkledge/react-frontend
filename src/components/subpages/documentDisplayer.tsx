import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter, LandingSectionHeader } from "../../styled/subpages/welcome";
import { DocumentDisplayerErrorHeader } from "../../styled/subpages/documentDisplayer";

import { RootState } from "../../redux/mainReducer";

const Background = require("../../assets/pattern_background.webp");

const DocumentDisplayer:React.FC = () => {
    
    const [isError, toggleIsError] = useState<boolean>(false);
    const loginUserSelector = useSelector((state: RootState) => state.generalData.currentToken);
    
    const {docId} = useParams();

    useEffect(() => {
        toggleIsError(false);
        if(docId === undefined || docId.length === 0){
            toggleIsError(true);
        }
        else{
            /*TODO: apply the connection with the backend to check if the document with the
            ID given exists and load the data*/
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
                </DocumentDisplayerErrorHeader>: <></>}

            </LandingSectionFilter>
                
        </LandingSectionWrapper>

    </MainContainer>
};

export default DocumentDisplayer;