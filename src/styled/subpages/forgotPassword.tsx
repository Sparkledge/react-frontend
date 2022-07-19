import styled from "styled-components";

export const ForgotPasswordContainer = styled.section`
    width: calc(95% - 20px);
    height: calc(75vh - 20px);
    padding: 10px;
    position: relative;
    top: 4vh;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    text-align: center;
    background: ${(props) => props.theme.landingButtonColor};

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
`;

export const ForgotPasswordHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: 1.9em;
    letter-spacing: 0.06em;
    position: relative;
    top: 1vh;

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
        font-size: 2.1em;
    }
`;

export const ForgotPasswordDescription = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: 1.1em;
    letter-spacing: 0.04em;
    position: relative;
    top: 7vh;

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 10px);
        font-size: 1.4em;
    }
`;

export const ForgotPasswordEmailInput = styled.input`
    width: calc(90% - 20px);
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-family: inherit;
    color: inherit;
    text-shadow: inherit;
    font-size: 1.3em;
    letter-spacing: 0.05em;
    text-indent: 0.3em;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: ${(props) => props.theme.signingInputBackground};
    position: relative;
    top: 14vh;

    @media screen and (min-width: 425px){
        width: calc(85% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 1024px){
        font-size: 1.5em;
    }
`;

export const ForgotPasswordSubmitBtn = styled.button`
    padding: 20px 40px;
    width: fit-content;
    font-size: 1.15em;
    color: inherit;
    font-family: inherit;
    text-shadow: inherit;
    letter-spacing: 0.04em;
    background: ${(props) => props.theme.signingInputBackground};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.4s;
    position: relative;
    top: 24vh;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 1024px){
        font-size: 1.4em;
    }
`;

export const ForgotPasswordSuccessDescription = styled.div`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.04em; 
    position: relative;
    top: 25vh;

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
        font-size: 1.4em;
    }
`;

export const ForgotPasswordErrorHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.35em;
    letter-spacing: 0.06em;
    position: relative;
    top: 20vh;

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 1440px){
        width: calc(90% - 10px);
        font-size: 2.1em;
    }
`;
