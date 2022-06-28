import styled from "styled-components";

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

export const DocumentDisplayerWrapper = styled.section`
    width: auto;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
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
`;

export const DescriptionDataHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: 1.3em;
    margin-bottom: 2vh;

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 1.9em;
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