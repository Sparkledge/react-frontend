import styled from "styled-components";

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

export const AboutTeamSection = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    position: relative;
    top: 1vh;

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
    }
`;

export const AboutTeamWidget = styled.div`
    width: calc(95% - 20px);
    height: fit-content;
    padding: 30px 10px;
    text-align: center;
    border-radius: 20px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.3);
    margin-bottom: 3vh;
    color: ${(props) => props.theme.color};
    background: rgba(34,107,255,.15);

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
    }
`;

export const AboutTeamWidgetPhotoContainer = styled.div`
    width: calc(100% - 10px);
    display: inline-block;
    vertical-align: middle;
    margin: 0px 5px;

    @media screen and (min-width: 425px){
        width: calc(80% - 10px);
    }

    @media screen and (min-width: 768px){
        width: calc(30% - 10px);
    }
`;

export const AboutTeamWidgetPhoto = styled.img`
    width: 80%;
    height: auto;
    border-radius: 25%;

    @media screen and (min-width: 768px){
        width: 100%;
    }

    @media screen and (min-width: 1440px){
        width: 90%;
    }
`;

export const AboutTeamWidgetTextSection = styled.div`
    width: calc(100% - 10px);
    display: inline-block;
    vertical-align: middle;
    margin: 0px 5px;

    @media screen and (min-width: 768px){
        width: calc(70% - 10px);
    }
`;

export const AboutTeamWidgetName = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.07em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 1vh;
    font-weight: bold;

    @media screen and (min-width: 1440px){
        width: calc(90% - 10px);
        font-size: 1.4em;
    }
`;

export const AboutTeamWidgetPosition = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.1em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 2vh;
    letter-spacing: 0.05em;

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
    }

    @media screen and (min-width: 1440px){
        width: calc(70% - 10px);
        font-size: 1.2em;
    }
`;

export const AboutTeamWidgetDesc = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 0.9em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    line-height: 1.1em;
    letter-spacing: 0.05em;

    @media screen and (min-width: 425px){
        width: calc(80% - 10px);
    }

    @media screen and (min-width: 1440px){
        width: calc(60% - 10px);
        font-size: 1em;
    }
`;