import styled from "styled-components";

interface NextButtonInterface{
    scale: number
}

interface UploadButtonInterface{
    top?: number
}

export const DocumentUploadFormWrapper = styled.section`
    width: calc(95% - 20px);
    min-height: calc(80vh - 20px);
    height: fit-content;
    padding: 10px;
    border: none;
    border-radius: 10px;
    text-align: center;
    background: ${(props) => props.theme.resultBackground};
    box-shadow: 3px 4px 4px ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 2vh;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 425px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 20px);
    }
`

export const DocumentUploadFormHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.4em;
    letter-spacing: 0.06em;

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
        font-size: 2.3em;
    }
`

export const DocumentUploadFormDataSection = styled.div`
    height: calc(50vh - 10px);
    line-height: calc(50vh - 10px);
    width: 100%;
    padding: 5px 0px;
    text-align: center;
`


export const DocumentUploadNotWorking = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.4em;
    letter-spacing: 0.05em;
    line-height: 1.4em;
    position: relative;
    top: 20vh;

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 1.6em;
        line-height: 1.6em;
    }
`

export const DocumentUploadTextInput = styled.input`
    width: calc(95% - 20px);
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-size: 1.15em;
    letter-spacing: 0.05em;
    text-indent: 0;
    text-align: center;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: ${(props) => props.theme.signingInputBackground};
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        text-indent: 0.5em;
        text-align: left;
        font-size: 1.3em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.5em;
        text-indent: 0.7em;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
        font-size: 1.6em;
    }
`

export const DocumentUploadNextButton = styled.div<NextButtonInterface>`
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 10px;
    padding: 20px 40px;
    font-size: 1.9em;
    letter-spacing: 0.04em;
    transition: all 0.2s;
    transform: scale(${(props) => props.scale});
    cursor: pointer;
    
    &:hover{
        filter: brightness(70%);
    }
`;

export const DocumentUploadDataSubSection = styled.section`
    width: 100%;
    text-align: center;
    line-height: initial;
    position: relative;
    top: 4vh;
`

export const DocumentUploadFileHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.07em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 3vh;

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 1.9em;
    }
`;

export const DocumentUploadFileInput = styled.input`
    display: none;
`;

export const DocumentUploadFileButton = styled.button<UploadButtonInterface>`
    width: fit-content;
    padding: 20px 40px;
    border: none;
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1em;
    letter-spacing: 0.05em;
    background: ${(props) => props.theme.signingInputBackground};
    cursor: pointer;
    transition: all 0.4s;
    margin-bottom: 4vh;
    position: relative;
    top: ${(props) => props.top !== undefined ? `${props.top}vh` : "0vh"};


    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.6em;
        margin-bottom: 2vh;
    }
`;

export const DocumentUploadFileDescription = styled.textarea`
    max-width: calc(90% - 20px);
    min-width: calc(90% - 20px);
    min-height: calc(20vh - 20px);
    max-height: calc(23vh - 20px);
    padding: 10px;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.color};
    font-size: 0.85em;
    text-indent: 0.4em;
    letter-spacing: 0.06em;
    line-height: 1.1em;
    border-radius: 10px;
    border: none;
    background: ${(props) => props.theme.signingInputBackground};

    @media screen and (min-width: 425px){
        font-size: 1.1em;
        line-height: 1.15em;
    }

    @media screen and (min-width: 768px){
        max-width: calc(70% - 20px);
        min-width: calc(70% - 20px);
        font-size: 1.2em;
    }
`;