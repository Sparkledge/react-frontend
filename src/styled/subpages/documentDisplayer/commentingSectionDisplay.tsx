import styled from "styled-components";

interface CommentContainerInteractiveInfoLabelInterface {
  isClickable?: boolean
}

interface CommentContainerInteractiveInfoInterface {
  isSendingButton?: boolean
}

export const CommentContainer = styled.div`
    width: calc(100% - 20px);
    min-height: calc(14vh - 20px);
    padding: 10px;
    margin-bottom: 3vh;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: ${(props) => props.theme.bgColor};

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
    }
`;

export const CommentContainerAuthor = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-indent: 0.2em;
    font-size: 1em;
    letter-spacing: 0.04em;
    margin-bottom: 1vh;
    text-align: left;

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 1.2em;
        margin-bottom: 2vh;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 10px);
        font-size: 1.4em;
    }
`;

export const CommentContainerContent = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: 0.85em;
    letter-spacing: 0.06em;
    line-height: 1.1em;
    margin-bottom: 2vh;
    text-align: left;

    @media screen and (min-width: 768px){
        font-size: 1em;
        line-height: 1.2em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.2em;
    }
`;

export const CommentContainerInteractivePart = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};
`;

export const CommentContainerInteractiveInfo = styled.div<CommentContainerInteractiveInfoInterface>`
    width: ${(props) => props.isSendingButton !== undefined ? props.isSendingButton ? "fit-content" : "calc(17% - 20px)" : "calc(17% - 20px)"};
    padding: 5px;
    text-align: ${(props) => props.isSendingButton !== undefined ? props.isSendingButton ? "left" : "center" : "center"};
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    color: inherit;
    font-size: 0.8em;

    @media screen and (min-width: 768px){
        width: ${(props) => props.isSendingButton !== undefined ? props.isSendingButton ? "fit-content" : "calc(15% - 20px)" : "calc(15% - 20px)"};
        font-size: 1em;
    }

    @media screen and (min-width: 1024px){
        display: ${(props) => props.isSendingButton !== undefined ? props.isSendingButton ? "none" : "inline-block" : "inline-block"};
    }
`;

export const CommentContainerInteractiveInfoLabel = styled.label<CommentContainerInteractiveInfoLabelInterface>`
    display: inline-block;
    vertical-align: top;
    text-indent: 0.2em;
    ${(props) => props.isClickable !== undefined 
    ? props.isClickable ? `cursor: pointer;
        transition: filter 0.2s;
    
        &:hover{
            filter: brightness(70%);
        }` 
      : "" : ""};
`;

export const CommentContainerInteractiveCommentInput = styled.input`
    width: calc(45% - 20px);
    padding: 5px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    text-align: left;
    text-indent: 0.3em;
    color: inherit;
    font-size: 0.85em;
    font-family: inherit;
    border: none;
    border-radius: 10px;
    background: ${(props) => props.theme.signingInputBackground};
    outline: none;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 768px){
        font-size: 1.05em;
        width: calc(55% - 20px);
    }

    @media screen and (min-width: 1024px){
        font-size: 1.2em;
    }
`;
