import styled from "styled-components";

interface QuestionAnswerContentInterface {
  isOpened: boolean
}

export const FAQHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.9em;
    letter-spacing: 0.05em;
    position: relative;
    top: 2vh;
    margin-bottom: 3vh;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    color: ${(props) => props.theme.color};

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
        font-size: 2.3em;
    }
`;

export const FAQDescription = styled.div`
    width: calc(95% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.15em;
    letter-spacing: 0.06em;
    position: relative;
    top: 1vh;
    margin-bottom: 5vh;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    color: ${(props) => props.theme.color};

    @media screen and (min-width: 425px){
        display: none;
    }
`;

export const QuestionsContainer = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 10px);
    }
`;

export const QuestionWrapper = styled.div`
    width: calc(100% - 20px);
    min-height: calc(8vh - 20px);
    max-height: calc(60vh - 20px);
    height: fit-content;
    overflow-y: hidden;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    padding: 10px;
    text-align: center;
    transition: all 0.4s;
    &::-webkit-scrollbar{
        width: 7px;
    }
    
    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        width: 3px;
        background: rgba(34,107,255,.9);
    }
    
    &::-webkit-scrollbar-track{
        width: 6px;
    }

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
    }

`;

export const QuestionUpperPart = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
`;

export const QuestionContent = styled.header`
    width: calc(100% - 20px);
    padding: 5px;
    text-align: center;
    text-indent: 0em;
    font-size: 1.15em;
    letter-spacing: 0.05em;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
        text-align: left;
        font-size: 1.3em;
        text-indent: 0.5em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.5em;
        text-indent: 0.7em;
    }
`;

export const QuestionArrow = styled.div`
    width: calc(20% - 20px);
    padding: 5px;
    text-align: center;
    font-size: 1.9em;
    color: ${(props) => props.theme.color};
    display: none;
    margin: 0px 5px;
    cursor: pointer;

    @media screen and (min-width: 425px){
        display: inline-block;
        vertical-align: top;
    }
`;

export const QuestionAnswerContent = styled.div<QuestionAnswerContentInterface>`
    width: calc(100% - 10px);
    height: ${(props) => props.isOpened ? "fit-content" : "0"};
    overflow-y: hidden;
    padding: 0px 5px;
    text-align: center;
    font-size: 1em;
    letter-spacing: 0.06em;
    line-height: 1.3em;

    @media screen and (min-width: 425px){
        text-align: left;
        font-size: 1.05em;
        line-height: 1.4em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.2em;
        line-height: 1.6em;
    }
`;
