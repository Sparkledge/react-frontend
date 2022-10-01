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
    width: calc(80% - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};
`;

export const ProfileUserData = styled.div`
    width: calc(60% - 30px);
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
`;

export const ProfilePublishingData = styled.div`
    width: calc(40% - 30px);
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
`;

export const ProfileUserDataContainer = styled.div`
    width: calc(95% - 10px);
    padding: 5px;
    text-align: center;
`;

export const ProfileUserSubData = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 20px 40px;
    border-radius: 10px;
    font-size: 1.15em;
    letter-spacing: 0.04em;
    background: ${(props) => props.theme.signingInputBackground};
    display: inline-block;
    vertical-align: top;
    margin: 5px;
`;

export const ProfileUserSubDataIconContainer = styled.span`
    display: inline-block;
    vertical-align: center;
    margin: 0px 5px 0px 0px;
    font-size: 1.2em;
`;

export const ProfileUserSubDataTextContainer = styled.span`
    display: inline-block;
    vertical-align: bottom;
    margin: 0px 0px 5px 0px;
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
