import styled from "styled-components";

interface CommentingFormWrapperInterface {
  paddingBottom?: number
}

export const CommentingWrapper = styled.section<CommentingFormWrapperInterface>`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    top: 1vh;
    padding-bottom: ${(props) => props.paddingBottom !== undefined ? props.paddingBottom : 4}vh;

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
    }
`;

export const CommentingFormTextarea = styled.input`
    min-width: calc(80% - 30px);
    max-width: calc(80% - 30px);
    min-height: calc(6vh - 20px);
    max-height: calc(6vh - 20px);
    padding: 10px;
    border: none;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    background: ${(props) => props.theme.signingInputBackground};
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.color};
    font-size: 0.8em;
    letter-spacing: 0.05em;
    outline: none;
    resize: none;

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

    @media screen and (min-width: 320px){
        font-size: 1em;
        min-height: calc(7vh - 20px);
        max-height: calc(7vh - 20px);

        &::-webkit-scrollbar-thumb{
            background: ${(props) => props.theme.color};
        }
    }

    @media screen and (min-width: 375px){
        min-width: calc(80% - 30px);
        max-width: calc(80% - 30px);
    }

    @media screen and (min-width: 425px){
        min-height: calc(10vh - 20px);
        max-height: calc(10vh - 20px);
    }

    @media screen and (min-width: 768px){
        font-size: 1.2em;
    }
`;

export const CommentingFormButton = styled.button`
    width: calc(10% - 20px);
    height: calc(6vh - 20px);
    padding: 10px 10px 10px 0px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    background: none;
    border: none;
    color: ${(props) => props.theme.color};
    font-size: 1.2em;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 320px){
        height: calc(10vh - 20px);
        font-size: 1.5em;
    }

    @media screen and (min-width: 425px){
        font-size: 3.3em;
        height: calc(10vh - 20px);
    }

`;
