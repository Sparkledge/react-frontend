import styled from "styled-components";

interface LandingWrapperInterface{
    source?: any,
    reversedShadow?: boolean
}

interface AnimatingInterface{
    height?: number,
    leftPos?: number
}

interface DownButtonInterface{
    marginBottom?: number
}

export const LandingSectionWrapper = styled.section<LandingWrapperInterface>`
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background: ${(props) => props.source !== undefined ? `url(${props.source})` : props.theme.bgColor};
    background-size: cover;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.main};
    overflow-x: hidden;
    box-shadow: inset 0px ${(props) => props.reversedShadow !== undefined ? props.reversedShadow === true ? "3px" : "-3px" : "-3px"} 4px rgba(0,0,0,.2);

    a{
        text-decoration: none;
    }
`;

export const LandingSectionFilter = styled.section`
    width: 100%;
    min-height: inherit;
    height: 100%;
    position: relative;
    background: ${(props) => props.theme.filterColor};
`;

export const LandingSectionHeader = styled.header<AnimatingInterface>`
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
    height: ${(props) => props.height !== undefined ? props.height: "2.5"}em;

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

export const LandingSectionDesc = styled.div<AnimatingInterface>`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 0.85em;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    line-height: 1.2em;
    position: relative;
    margin-bottom: 9vh;
    left: ${(props) => props.leftPos !== undefined ? props.leftPos : "0"}%;
    transition: all 0.4s;

    @media screen and (min-width: 425px){
        width: calc(70% - 20px);
        font-size: 1em;
        line-height: 1.1em;
    }

    @media screen and (min-width: 768px){
        width: calc(60% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(50% - 20px);
        font-size: 1.2em;
    }
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
    transition: filter 0.4s;
    ${(props) => props.marginBottom !== undefined ? `margin-bottom: ${props.marginBottom}vh;`: ""}

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