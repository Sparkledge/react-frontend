import styled from "styled-components";

interface ProfileUserDataEditContainerInterface {
  isOpened: boolean
}

interface ProfileUserDataEditSocialMediaClosingsInterface {
  alignment: string
}

interface ProfileUserDataEditSocialMediaInputInterface {
  isCorrect: boolean
}

export const ProfileUserDataEditContainer = styled.section<ProfileUserDataEditContainerInterface>`
    width: calc(98% - 20px);
    height: calc(70vh - 20px);
    padding: 10px;
    overflow-y: scroll;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    color: ${(props) => props.theme.color};
    text-align: center;
    background: ${(props) => props.theme.memoryBannerBackground};
    position: fixed;
    top: 20vh;
    left: ${(props) => props.isOpened ? "1%" : "-100%"};
    z-index: 6;
    transition: left 0.5s;

    &::-webkit-scrollbar{
        width: 6px;
    }
        
    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        width: 3px;
        background: rgba(34,107,255,.9);
    }
    
    &::-webkit-scrollbar-track{
        width: 5px;
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        left: ${(props) => props.isOpened ? "5%" : "-100%"};
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
        left: ${(props) => props.isOpened ? "15%" : "-100%"};
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
        left: ${(props) => props.isOpened ? "20%" : "-100%"};
    }
`;

export const ProfileUserDataEditHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.6em;
    letter-spacing: 0.06em;
    margin-bottom: 3vh;
    position: relative;
    top: 1vh;

    @media screen and (min-width: 425px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 2.4em;
        margin-bottom: 4vh;
    }
`;

export const ProfileUserDataEditSubHeader = styled.header`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.35em;
    letter-spacing: 0.05em;
    margin-bottom: 2vh;

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 10px);
        font-size: 1.9em;
    }
`;

export const ProfileUserDataEditDescribe = styled.textarea`
    min-width: calc(90% - 20px);
    max-width: calc(95% - 20px);
    min-height: calc(20vh - 20px);
    max-height: calc(20vh - 20px);
    padding: 10px;
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.landingButtonColor};
    font-size: 1em;
    line-height: 1.05em;
    letter-spacing: 0.05em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-family: ${(props) => props.theme.fonts.main};
    margin-bottom: 1vh;

    @media screen and (min-width: 425px){
        font-size: 1.2em;
        line-height: 1.1em;
        min-height: calc(30vh - 20px);
        max-height: calc(30vh - 20px);
    }

    @media screen and (min-width: 768px){
        min-width: calc(80% - 20px);
        max-width: calc(90% - 20px);        
    }
`;

export const ProfileUserDataEditDescribeCounterContainer = styled.div`
    width: fit-content;
    padding: 10px;
    font-size: 0.85em;
    letter-spacing: 0.04em;
    margin-bottom: 4vh;
    border-radius: 10px;
    background: ${(props) => props.theme.userDescriptionLengthCounterBackground};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};

    @media screen and (min-width: 768px){
        font-size: 1em;
    }
`;

export const ProfileUserDataEditSocialMediaContainer = styled.div`
    width: calc(95% - 20px);
    padding: 10px;
    text-align: center;
    margin-bottom: 3vh;

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }
`;

export const ProfileUserDataEditSocialMediaIcon = styled.div`
    width: calc(20% - 20px);
    padding: 5px;
    text-align: center;
    font-size: 1.6em;
    color: inherit;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;

    @media screen and (min-width: 768px){
        font-size: 1.9em;
    }
`;

export const ProfileUserDataEditSocialMediaInput = styled.input<ProfileUserDataEditSocialMediaInputInterface>`
    width: calc(80% - 30px);
    padding: 10px;
    text-indent: 0.4em;
    font-size: 1em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: ${(props) => props.theme.landingButtonColor};
    ${(props) => props.isCorrect ? null : "box-shadow: 0px 0px 10px rgba(240,20,20,.6);"}
    border: none;
    border-radius: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;

    &:focus{
        outline: none;
    }

    @media screen and (min-width: 768px){
        font-size: 1.2em;
    }
`;

export const ProfileUserDataEditSocialMediaClosings = styled.div<ProfileUserDataEditSocialMediaClosingsInterface>`
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    font-size: 1.1em;
    position: absolute;
    top: 10px;
    ${(props) => props.alignment}: 1px;
    cursor: pointer;
    transition: all 0.4s;
    z-index: 3;

    &:hover{
        filter: brigtness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        ${(props) => props.alignment}: 10px;
        font-size: 1.7em;
    }
`;
