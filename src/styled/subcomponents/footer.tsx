import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: calc(100% - 20px);
    min-height: calc(50vh - 20px);
    height: fit-content;
    padding: 10px;
    text-align: center;
    box-shadow: 0px -3px 4px rgba(0,0,0,.2);
    background: ${(props) => props.theme.bgColor};
`;

export const FooterColumnsWrapper = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;

    a{
        text-decoration: none;
        color: inherit;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
    }
`;

export const FooterColumn = styled.div`
    width: calc(80% - 30px);
    padding: 10px;
    margin: 5px;
    display: inline-block;
    vertical-align: top;

    @media screen and (min-width: 375px){
        width: calc(50% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(20% - 30px);
        margin: 0px 5px;
    }
`;

export const FooterColumnElem = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    margin-bottom: 10px;
    transition: all 0.4s;
    font-size: 0.9em;
    letter-spacing: 0.07em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 768px){
        font-size: 1.1em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1440px){
        width: calc(90% - 10px);
        font-size: 1.4em;
    }
`;

export const FooterImage = styled.img`
    width: inherit;
    height: auto;
`;
