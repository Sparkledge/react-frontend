import styled from "styled-components";

interface DocumentDisplayerDownloadBtnInterface {
  isUserSignedOut?: boolean,
  isInline?:boolean
}

interface DescriptionDataHeaderInterface {
  isSmaller?: boolean
}

export const DocumentDisplayerErrorHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.07em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 3vh;

    @media screen and (min-width: 375px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 1.7em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.9em;
    }
`;

export const DocumentDisplayerNotSignedInHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.4em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 4vh;

    @media screen and (min-width: 375px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 425px){
        font-size: 2.1em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.4em;
    }
`;

export const DocumentDisplayerDownloadBtn = styled.button<DocumentDisplayerDownloadBtnInterface>`
    width: fit-content;
    height: fit-content;
    padding: ${(props) => props.isUserSignedOut !== undefined ? "15px 40px" : props.isInline === undefined ? "10px 25px" : "0px"};
    border: none;
    border-radius: 10px;
    background: ${(props) => props.isInline === undefined ? props.theme.resultBackground : "transparent"};
    color: ${(props) => props.theme.color};
    font-size: 1.4em;
    letter-spacing: 0.06em;
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    cursor: pointer;
    transition: filter 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: ${(props) => props.isUserSignedOut !== undefined ? "1.3em" : "1.9em"};
    }

    @media screen and (min-width: 768px){
        font-size: ${(props) => props.isUserSignedOut !== undefined ? "1.6em" : "1.9em"};
    }
`;

export const DocumentDisplayerDataWrapper = styled.section`
    
    width: 100%;

    @media screen and (min-width: 1024px){
        width: calc(40% - 10px);
        display: inline-block !important;
        vertical-align: top;
        margin: 0px 5px !important;
    }
`;

export const DocumentDisplayerWrapper = styled.section`
    width: 100%;
    height: 70vh;
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 10px;
    text-align: center;

    &::-webkit-scrollbar{
        background: ${(props) => props.theme.signingInputBackground};
        width: 6px;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb{
        background: ${(props) => props.theme.resultBackground};
        width: 4px;
        border-radius: 5px;
    }

    @media screen and (min-width: 350px){
        height: 100vh;
    }

    @media screen and (min-width: 460px){
        width: fit-content;
    }
    
    @media screen and (min-width: 1024px){
        width: calc(50% - 10px);
        display: inline-block !important;
        vertical-align: top;
        margin: 0px 5px 4vh 0px !important;
    }
`;

export const DocumentDisplayerIframe = styled.iframe`
    min-width: 65%;
    height: 100vh;
    border: none;
    overflow-x: hidden !important;
    border-radius: 10px;

    &>#document>#toolbar{
        background-color: red;
    }
    
    &::-webkit-scrollbar{
        background: ${(props) => props.theme.signingInputBackground};
        width: 6px;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb{
        background: ${(props) => props.theme.resultBackground};
        width: 4px;
        border-radius: 5px;
    }

    @media screen and (min-width: 1024px){
        min-width: 55%;
    }
`;

export const DocumentDataWrapper = styled.section`
    width: calc(100% - 10px);
    padding: 10px 5px 10vh 5px;
    text-align: center;
    position: relative;
    top: 3vh;

    @media screen and (min-width: 768px){
        width: calc(70% - 10px);
    }

    @media screen and (min-width: 1024px){
        width: calc(50% - 10px);
    }
`;

export const SwipperBtn = styled.button`
    width: calc(25% - 30px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }
`;

export const InfoContainer = styled.div`
    width: calc(40% - 20px);
    padding: 10px 5px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    color: ${(props) => props.theme.color};
    font-size: 0.9em;

    @media screen and (min-width: 290px){
        width: calc(30% - 20px);
    }

    @media screen and (min-width: 425px){
        width: calc(20% - 20px);
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        width: calc(30% - 20px);
    }
`;

export const DescriptionDataContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    text-align: center;
    letter-spacing: 0.05em;
    top: 3vh;
    margin-bottom: 3vh;

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(60% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(100% - 20px);
    }
`;

export const DescriptionDataHeader = styled.header<DescriptionDataHeaderInterface>`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: ${(props) => props.isSmaller !== undefined ? "1.1em" : "1.3em"};
    margin-bottom: 2vh;
    color: ${(props) => props.theme.color};
    ${(props) => props.isSmaller === undefined ? "text-decoration: underline;" : null}

    @media screen and (min-width: 425px){
        font-size: ${(props) => props.isSmaller !== undefined ? "1.4em" : "1.6em"};
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: ${(props) => props.isSmaller !== undefined ? "1.6em" : "1.9em"};
    }

    @media screen and (min-width: 1024px){
        width: calc(100% - 10px);
        font-size: ${(props) => props.isSmaller !== undefined ? "1.4em" : "1.6em"};
    }
`;

export const DescriptionDataContent = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    font-size: 1.15em;
    line-height: 1.1em;

    @media screen and (min-width: 425px){
        font-size: 1.3em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.5em;
        line-height: 1.2em;
    }
`;
