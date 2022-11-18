import styled from "styled-components";
import { motion } from "framer-motion";

interface SettingsSegmentCheckboxInterface {
  isChecked: boolean,
}

export const SettingsContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
    }
`;

export const SettingsHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.9em;
    letter-spacing: 0.04em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 2vh;
    margin-bottom: 5vh;

    @media screen and (min-width: 375px){
        font-size: 2.4em;
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
        font-size: 2.9em;
    }
`;

export const SettingsWrapper = styled.main`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    position: relative;
    top: 3vh;
`;

export const SettingsSegment = styled.div`
    width: calc(100% - 30px);
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    background: ${(props) => props.theme.landingButtonColor};
    text-align: center;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    display: inline-block;
    vertical-align: top;
    margin: 5px;

    @media screen and (min-width: 375px){
        width: calc(90% - 30px);
    }

    @media screen and (min-width: 425px){
        width: calc(70% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 30px);
    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 30px);
    }
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
    font-size: 1.15em;
    letter-spacing: 0.05em;
    text-align: left;
    text-indent: 0.4em;

    @media screen and (min-width: 768px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.7em;
    }
`;

export const SettingsBannerOpener = styled.span`
    width: calc(20% - 10px);
    padding: 5px 0px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    text-align: center;
    font-size: 1.5em;
    cursor: pointer;
    text-align: right;

    transition: filter 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 1024px){
        font-size: 2.5em;
    }
`;

export const SettingsSegmentContent = styled(motion.div)`
    width: calc(100% - 10px);
    padding: 0px 5px;
    text-align: center;
    overflow-x: hidden;
    overflow-y: scroll;

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

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
    }
`;

export const SettingsSegmentSubHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.4em;
    letter-spacing: 0.05em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 2vh;
    margin-bottom 5vh;

    @media screen and (min-width: 1024px){
        font-size: 1.7em;
    }
`;

export const SettingsSegmentInput = styled.input`
    width: calc(90% - 10px);
    padding: 15px 5px;
    text-indent: 0.3em;
    letter-spacing: 0.04em;
    font-size: 1.05em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    border: none;
    border-radius: 10px;
    background: ${(props) => props.theme.signingInputBackground};
    margin-bottom: 2vh;

    @media screen and (min-width: 768px){
        font-size: 1.15em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 10px);
        font-size: 1.4em;
    }
`;

export const SettingsSegmentCheckboxWrapper = styled.div`
    width: calc(100% - 10px);
    padding: 15px 5px;
    text-align: center;
`;

export const SettingsSegmentCheckboxText = styled.div`
    width: fit-content;
    max-width: calc(100% - 70px);
    padding: 10px 5px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    font-size: 1em;

    @media screen and (min-width: 1440px){
        font-size: 1.3em;
    }
`;

export const SettingsSegmentCheckbox = styled.div<SettingsSegmentCheckboxInterface>`
    width: 30px;
    height: 30px;
    padding: 5px;
    background: ${(props) => props.isChecked ? props.theme.color : props.theme.memoryBannerBackground};
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    cursor: pointer;
    transition: all 0.4s;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;

    &:hover{
        filter: brightness(70%);
    }
`;

export const SettingsSegmentButton = styled.div`
    width: fit-content;
    padding: 20px 40px;
    background: ${(props) => props.theme.signingInputBackground};
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-size: 1.3em;
    letter-spacing: 0.04em;
    position: relative;
    top: 3vh;
    margin-bottom: 4vh;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 1024px){
        font-size: 1.5em;
    }
`;
