import styled from "styled-components";

interface UserPanelWelcomeViewInterface {
  width: number
}

interface UserPanelLastViewAuthorInterface {
  marginBottom?: number
}

interface UserPanelLastViewItemInterface {
  isPublishedByUser: boolean
}

interface UserPanelDeleteNotificationInterface {
  isOpened: boolean
}

export const UserPanelHeader = styled.header`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    letter-spacing: 0.06em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
`;

export const UserPanelWelcomeSection = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    position: relative;
    top: 3vh;
    margin-bottom: 3vh;

    @media screen and (min-width: 1440px){
        width: calc(95% - 10px);
    }
`;

export const UserPanelLastView = styled.section<UserPanelWelcomeViewInterface>`
    width: calc(100% - 20px);
    min-height: calc(50vh - 20px);
    height: fit-content;
    padding: 10px;
    text-align: center;
    display: block;
    margin: 0px auto 10px;
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.color};
    border-radius: 10px;
    background: rgba(34,107,255,.1);

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(${(props) => props.width}% - 30px);
        min-height: calc(60vh - 20px);
        height: fit-content;
        padding: 10px;
        text-align: center;
        display: inline-block;
        vertical-align: top;
        margin: 0px 5px;
    }
`;

export const UserPanelLastViewHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.6em;
    letter-spacing: 0.06em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 4vh;
    position: relative;
    top: 1vh;

    @media screen and (min-width: 375px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
    }
`;

export const UserPanelLastViewGallery = styled.section`
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    
    &::-webkit-scrollbar{
        background: transparent;
        border-radius: 10px;
        height: 10px;
    }
`;

export const UserPanelLastViewNoItemsHeader = styled.header`
    width: calc(70% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.0em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};

    @media screen and (min-width: 375px){
        font-size: 1.8em;
    }
`;

export const UserPanelLastViewItem = styled.div<UserPanelLastViewItemInterface>`
    width: calc(90% - 20px);
    padding: 5px;
    margin: 0px 5px;
    display: inline-block;
    vertical-align: top;
    border-radius: 10px;
    background: rgba(240,240,240,.1);
    text-align: center;
    min-height: calc(40vh - 10px);
    height: fit-content;
    color: ${(props) => props.theme.color} !important;
    transition: filter 0.4s;
    cursor: pointer;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 425px){
        width: calc(60% - 20px);
    }

    @media screen and (min-width: 768px){
        width: ${(props) => props.isPublishedByUser ? "calc(60% - 20px)" : "calc(45% - 20px)"};
    }

    @media screen and (min-width: 1024px){
        ${(props) => props.isPublishedByUser ? "width: calc(75% - 20px);" : null}
    }
`;

export const UserPanelLastViewTitle = styled.header`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.04em;
    margin-bottom: 2vh;
    position: relative;
    top: 1vh;
    white-space: normal;

    @media screen and (min-width: 768px){
        font-size: 1.4em;
        margin-bottom: 3vh;
    }
`;

export const UserPanelLastViewAuthor = styled.div<UserPanelLastViewAuthorInterface>`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.1em;
    letter-spacing: 0.05em;
    margin-bottom: ${(props) => props.marginBottom !== undefined ? props.marginBottom : 6}vh;
    white-space: normal;

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
        font-size: 1.2em;
    }
`;

export const UserPanelDeleteNotification = styled.div<UserPanelDeleteNotificationInterface>`
    width: calc(100% - 40px);
    height: fit-content;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    color: ${(props) => props.theme.color};
    font-size: 1.2em;
    letter-spacing: 0.06em;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: ${(props) => props.theme.signingInputBackground};
    position: fixed;
    top: 80vh;
    left: ${(props) => props.isOpened ? "0%" : "100%"};
    z-index: 20;
    transition: left 0.4s;

    @media screen and (min-width: 375px){
        width: calc(100% - 80px);
        padding: 20px 40px;
        font-size: 1.4em;
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 80px);
        font-size: 1.6em;
        left: ${(props) => props.isOpened ? "10%" : "100%"};
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 80px);
        left: ${(props) => props.isOpened ? "45%" : "100%"};
    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 80px);
        font-size: 1.8em;
        left: ${(props) => props.isOpened ? "55%" : "100%"};
    }

    @media screen and (min-width: 1440px){
        width: calc(30% - 80px);
        left: ${(props) => props.isOpened ? "65%" : "100%"};
        font-size: 2.1em;
    }
`;
