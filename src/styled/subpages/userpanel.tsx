import styled from "styled-components";

interface UserPanelWelcomeViewInterface{
    width: number
}

interface UserPanelLastViewAuthorInterface{
    marginBottom?: number
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
`

export const UserPanelWelcomeSection = styled.section`
    width: calc(95% - 10px);
    padding: 5px;
    text-align: center;
    position: relative;
    top: 3vh;
`

export const UserPanelLastView = styled.section<UserPanelWelcomeViewInterface>`
    width: calc(${(props) => props.width}% - 30px);
    min-height: calc(60vh - 20px);
    height: fit-content;
    padding: 10px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.color};
    border-radius: 10px;
    background: rgba(34,107,255,.35);
`

export const UserPanelLastViewHeader = styled.header`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.9em;
    letter-spacing: 0.06em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 4vh;
    position: relative;
    top: 1vh;
`

export const UserPanelLastViewGallery = styled.section`
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
`

export const UserPanelLastViewItem = styled.div`
    width: calc(40% - 20px);
    padding: 5px;
    margin: 0px 5px;
    display: inline-block;
    vertical-align: top;
    border-radius: 10px;
    background: rgba(240,240,240,.1);
    text-align: center;
    min-height: calc(40vh - 10px);
    height: fit-content;
`

export const UserPanelLastViewTitle = styled.header`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.4em;
    letter-spacing: 0.04em;
    margin-bottom: 3vh;
    position: relative;
    top: 1vh;
    white-space: normal;
`

export const UserPanelLastViewAuthor = styled.div<UserPanelLastViewAuthorInterface>`
    width: calc(70% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.05em;
    margin-bottom: ${(props) => props.marginBottom !== undefined ? props.marginBottom : 6}vh;
`