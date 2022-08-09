import styled from "styled-components";

export const TermsAndConditionsHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    letter-spacing: 0.06em;
    color: ${(props) => props.theme.color};
    position: relative;
    top: 2vh;

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 2.3em;
    }
`;

export const TermsAndConditionsParagraphsContainer = styled.div`
    position: relative;
    top: 6vh;
    padding-bottom: 6vh;

    @media screen and (min-width: 425px){
        top: 10vh;
    }
`;

export const TermsAndConditionsParagraph = styled.p`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: left;
    text-indent: 0.8em;
    font-size: 1em;
    color: ${(props) => props.theme.color};
    letter-spacing: 0.06em;
    line-height: 1.2em;
    margin-bottom: 2vh;

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
        font-size: 1.2em;
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
        line-height: 1.3em;
        text-indent: 1em;
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
        font-size: 1.4em;
    }
`;
