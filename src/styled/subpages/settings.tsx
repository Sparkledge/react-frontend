import styled from "styled-components";
import { motion } from "framer-motion";

export const SettingsContainer = styled.section`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};
`;

export const SettingsHeader = styled.header`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 2.9em;
    letter-spacing: 0.04em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 2vh;
    margin-bottom: 5vh;
`;

export const SettingsWrapper = styled.main`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    position: relative;
    top: 3vh;
`;

export const SettingsSegment = styled.div`
    width: calc(40% - 30px);
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    background: ${(props) => props.theme.landingButtonColor};
    text-align: center;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    display: inline-block;
    vertical-align: top;
    margin: 5px;
`;

export const SettingsBanner = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
`;

export const SettingsBannerName = styled.span`
    width: calc(80% - 10px);
    padding: 5px 0px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    font-size: 1.7em;
    letter-spacing: 0.05em;
    text-align: left;
    text-indent: 0.4em;
`;

export const SettingsBannerOpener = styled.span`
    width: calc(20% - 10px);
    padding: 5px 0px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    text-align: center;
    font-size: 2.5em;
    cursor: pointer;

    transition: filter 0.4s;

    &:hover{
        filter: brightness(70%);
    }
`;

export const SettingsSegmentContent = styled(motion.div)`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
`;
