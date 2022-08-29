import styled from "styled-components";

interface LandingWrapperInterface {
  source?: any,
  reversedShadow?: boolean,
  bottomPadding?: number,
  backgroundSize?: string,
  backgroundRepeat?: string
}

interface DownButtonInterface {
  marginBottom?: number
}

interface FilterInterface {
  minheight?: number
}

export const LandingSectionWrapper = styled.section<LandingWrapperInterface>`
    width: 100%;
    min-height: ${(props) => props.bottomPadding !== undefined ? `${90 + props.bottomPadding}vh` : "90vh"};
    height: fit-content;
    background: ${(props) => props.source !== undefined ? `url(${props.source})` : props.theme.bgColor};
    background-size: ${(props) => props.backgroundSize !== undefined ? props.backgroundSize : "cover"};
    background-repeat: ${(props) => props.backgroundRepeat !== undefined ? props.backgroundRepeat : "auto"};
    background-position: center;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.main};
    overflow: hidden;
    box-shadow: inset 0px ${(props) => props.reversedShadow !== undefined 
    ? props.reversedShadow === true ? "3px" : "-3px" : "-3px"} 4px rgba(0,0,0,.2);

    a{
        text-decoration: none;
    }
`;

export const LandingSectionFilter = styled.section<FilterInterface>`
    width: 100%;
    min-height: ${(props) => props.minheight !== undefined ? `${props.minheight}vh !important` : "inherit"};
    height: fit-content;
    position: relative;
    background: ${(props) => props.theme.filterColor};
`;

export const EndingBlock = styled.div`
    width: 100%;
    height: 10vh;
`;

export const LandingSectionHeader = styled.header`
    width: calc(100% - 20px);
    overflow-y: hidden;
    padding: 0px 10px;
    color: ${(props) => props.theme.color};
    font-size: 2.3em;
    letter-spacing: 0.06em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    line-height: 1em;
    transition: all 0.4s;
    position: relative;
    top: 5vh;
    margin-bottom: 9vh;

    @media screen and (min-width: 425px){
        font-size: 2.7em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        font-size: 3.1em;
    }
`;

export const LandingSectionSpan = styled.span`
    font-size: 0.35em;
`;

export const LandingSectionDesc = styled.div`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 0.85em;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    line-height: 1.2em;
    position: relative;
    margin-bottom: 15vh;
    transition: all 0.4s;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 1em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        line-height: 1.2em;
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
        line-height: 1.3em;
        font-size: 1.4em;
    }
`;

export const LandingButtonWrapper = styled.div<DownButtonInterface>`
    width: fit-content;
    transition: all 0.4s;
    ${(props) => props.marginBottom !== undefined ? `padding-bottom: ${props.marginBottom}vh;` : ""}
`;

export const LandingSectionButton = styled.div<DownButtonInterface>`
    width: fit-content;
    padding: 20px 40px;
    border-radius: 20px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.15);
    font-size: 1.2em;
    color: ${(props) => props.theme.color};
    letter-spacing: 0.05em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: ${(props) => props.theme.landingButtonColor};
    cursor: pointer;
    transition: all 0.4s;
    ${(props) => props.marginBottom !== undefined ? `margin-bottom: ${props.marginBottom}vh;` : ""}

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.1em;
    }
`;
