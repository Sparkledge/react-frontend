import styled from "styled-components";

export const ProfileHeader = styled.header`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    color: ${(props) => props.theme.color};
    font-size: 2.3em;
    letter-spacing: 0.05em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 2vh;
    margin-bottom: 5vh;
`;

export const ProfileContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
    }
`;

export const ProfileUserData = styled.div`
    width: calc(100% - 30px);
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;

    @media screen and (min-width: 375px){
        width: calc(90% - 30px);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(60% - 30px);
        margin: 0px 5px;
    }
`;

export const ProfilePublishingData = styled.div`
    width: calc(100% - 30px);
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;

    @media screen and (min-width: 375px){
        width: calc(90% - 30px);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(40% - 30px);
        margin: 0px 5px;
    }
`;

export const ProfileUserDataContainer = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;

    @media screen and (min-width: 1024px){
        width: calc(95% - 10px);
    }
`;

export const ProfileUserDescriptionContainer = styled.div`
    width: calc(100% - 40px);
    padding: 20px;
    text-align: center;
    font-size: 0.9em;
    background: ${(props) => props.theme.signingInputBackground};
    border-radius: 10px;
    text-align: center;
    margin: 5px auto;

    @media screen and (min-width: 425px){
        font-size: 1em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.1em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 40px);
        font-size: 1.15em;
    }
`;

export const ProfileDataHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    margin-bottom: 7vh;
    position: relative;
    top: 2vh;
    font-size: 1.6em;
    letter-spacing: 0.06em;
`;

export const ProfilePublishingInfoContainer = styled.div`
    width: fit-content;
    padding: 20px 40px;
    text-align: center;
    font-size: 1.35em;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.color};
    text-indent: 0em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 2vh;
    border-radius: 10px;
    background: ${(props) => props.theme.signingInputBackground};

    @media screen and (min-width: 768px){
        width: calc(100% - 20px);
        padding: 10px;
        text-align: left;
        text-indent: 0.3em;
        margin-bottom: 3vh;
    }

    @media screen and (min-width: 1440px){
        text-indent: 0.7em;
        font-size: 1.5em;
    }
`;

export const ProfileUserSwitchModeBtn = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 20px;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    color: ${(props) => props.theme.color};
    font-size: 1.6em;
    position: absolute;
    left: 80%;
    cursor: pointer;
    transition: all 0.4s;
    z-index: 5;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        left: 70%;
    }

    @media screen and (min-width: 768px){
        left: 50%;
    }
`;
