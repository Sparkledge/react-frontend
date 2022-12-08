import styled from "styled-components";
import { motion } from "framer-motion";

export const UserNotificationsContainer = styled(motion.section)`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    height: calc(90vh - 20px);
    background: ${(props) => props.theme.filtersButtonResponsiveBackground};
    box-shadow: -3px 4px 4px rgba(0,0,0,.15);
    z-index: 4;
    left: 100%;

    @media screen and (min-width: 550px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 20px);
    }

    @media screen and (min-width: 1440px){
        width: calc(30% - 20px);
    }
`;

export const UserNotificationsNotificationContainer = styled.div`
    width: calc(90% - 20px);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    font-size: 1.05em;
    margin-bottom: 2vh;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: ${(props) => props.theme.notificationColor};
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 1024px){
        font-size: 1.2em;
    }
`;

export const UserNotificationsNotificationHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.06em;
    margin-bottom: 2vh;

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }
`;

export const UserNotificationsNotificationContent = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 0.85em;
    letter-spacing: 0.04em;
    line-height: 1.05em;
    margin-bottom: 1vh;

    @media screen and (min-width: 425px){
        width: calc(95% - 10px);
        font-size: 0.95em;
    }
`;
