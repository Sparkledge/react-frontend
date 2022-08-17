import styled from "styled-components";

interface AboutSpecialThanksHeaderInterface {
  posTop?: number
}

export const AboutHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 2vh;
    margin-bottom: 9vh;
    
    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 2.3em;
    }
`;

export const AboutDesc = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    line-height: 1.1em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 4vh;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
        font-size: 1.7em;
        line-height: 1.3em;
    }
`;

export const AboutSpecialThanksHeader = styled.header<AboutSpecialThanksHeaderInterface>`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    padding-bottom: 4vh;

    ${(props) => props.posTop !== undefined ? `padding-top: ${props.posTop}vh;` : null}

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 1.65em;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
        font-size: 1.8em;
    }
`;

export const AboutSpecialThanksObject = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    padding-bottom: 2vh;

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.45em;
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
        font-size: 1.6em;
    }
`;
