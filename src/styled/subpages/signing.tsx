import styled from "styled-components";

interface InputInterface {
  marginBottom?: number
}

interface ErrorLabelInterface {
  isUsedForReset?: boolean
}

export const SigningPanelWrapper = styled.section`
    width: calc(95% - 40px);
    min-height: calc(60vh - 40px);
    height: fit-content;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 3px 3px 4px rgba(0,0,0,.3);
    background: ${(props) => props.theme.landingButtonColor};

    @media screen and (min-width: 320px){
        width: calc(90% - 40px);
    }

    @media screen and (min-width: 375px){
        width: calc(80% - 40px);
    }

    @media screen and (min-width: 620px){
        width: calc(60% - 40px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 40px);
    }

    @media screen and (min-width: 1024px){
        width: calc(30% - 40px);
    }
`;

export const SigningPanelInput = styled.input<InputInterface>`
    width: calc(95% - 20px);
    padding: 10px;
    border-radius: 10px;
    border: none;
    background: ${(props) => props.theme.signingInputBackground};
    text-indent: 0.5em;
    font-size: 1.2em;
    letter-spacing: 0.07em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: ${(props) => props.marginBottom !== undefined ? `${props.marginBottom}vh` : "2vh"};
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
        text-indent: 0.7em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }
`;

export const SigningPanelButton = styled.button`
    width: fit-content;
    padding: 20px 40px;
    font-size: 1em;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.landingButtonColor};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    border: none;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s;
    margin-bottom: 5vh;
    
    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.2em;
    }
`;

export const ErrorLabel = styled.div<ErrorLabelInterface>`
    width: calc(100% - 10px);
    text-align: center;
    font-size: 0.95em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    color: ${(props) => props.theme.errorColor};
    ${(props) => props.isUsedForReset !== undefined ? `
        position: relative;
        top: 26vh;
    ` : null}

    @media screen and (min-width: 425px){
        font-size: 1.1em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 10px);
    }
`;

export const ForgotPasswordButton = styled.div`
    width: fit-content;
    font-size: 0.9em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    text-align: center;
    text-decoration: none !important;
    transition: all 0.4s;
    cursor: pointer;

    &:hover{
        filter: brightness(70%);
    }
`;
