import styled from "styled-components";

interface NavbarAlignGroupInterface{
    alignDir: string
}

interface NavbarOpeningInterface{
    isOpened?: string
}

interface RotatingBtnElemInterface{
    isrotated: string
}

export const NavbarContainer = styled.nav<NavbarOpeningInterface>`
    width: calc(100% - 20px);
    height: ${(props) => props.isOpened === "true" ? "100vh" : "10vh"};
    padding: 0px 10px;
    background: ${(props) => props.theme.navBgColor};
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.color};
    box-shadow: 0px 3px 4px rgba(0,0,0,.2);
    transition: all 0.4s;
    overflow-y: hidden;
    position: fixed;
    top: 0px;
    z-index: 4;

    a{
        text-decoration: none;
        color: inherit;
    }

    @media screen and (min-width: 840px){
        height: 10vh;
    }
`;

export const NavbarAlignGroup = styled.div<NavbarAlignGroupInterface>`
    @media screen and (min-width: 840px){
        float: ${(props) => props.alignDir}
    }
`;

export const NavbarElem = styled.div`
    width: calc(80% - 40px);
    padding: 10px 20px;
    height: calc(9vh - 20px);
    line-height: calc(9vh - 20px);
    position: relative;
    top: 0.5vh;
    display: block;
    margin: 0px auto 1vh;
    border-radius: 10px;
    text-align: center;
    font-size: 0.95em;
    letter-spacing: 0.04em;
    text-shadow: 3px 3px 4px rgba(0,0,0,.05);
    transition: all 0.4s;
    cursor: pointer;
    background: ${(props) => props.theme.navElemBgColor};

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 0.95em;
    }

    @media screen and (min-width: 840px){
        font-size: 1.1em;
        width: fit-content;
        top: 0.5vh;
        display: inline-block;
        vertical-align: top;
        margin: 0px 5px;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.4em;
    }
`;

export const NavbarElemImg = styled.img`
    max-height: 100%;
    width: auto;
`;

export const RespOpeningCloseBtn = styled.div`
    width: fit-content;
    position: absolute;
    color: ${(props) => props.theme.color};
    right: 5px;
    font-size: 4vh;
    top: 3vh;
    @media screen and (min-width: 425px){
        top: 3vh;
        right: 10px;
        font-size: 5vh;
    }
    
    @media screen and (min-width: 840px){
        display: none;
    }
`;

export const RotatingBtnElem = styled.div<RotatingBtnElemInterface>`
    transition: all 0.4s;
    width: fit-content;
    height: fit-content;
    transition: all 0.4s;
    ${(props) => 
        props.isrotated === "true"? `
        transform: rotateX(90deg) scale(0);
        font-size: 0;` : ``}
`;