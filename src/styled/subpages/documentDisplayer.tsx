import styled from "styled-components";

export const DocumentDisplayerErrorHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.07em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 3vh;

    @media screen and (min-width: 375px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 1.7em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.9em;
    }
`;

export const DocumentDisplayerWrapper = styled.section`
    width: auto;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
`;

export const SwipperBtn = styled.button`
    width: calc(25% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }
`;

export const DocumentDataWrapper = styled.section`
    width: calc(100% - 10px);
    padding: 10px 5px 10vh 5px;
    text-align: center;
    position: relative;
    top: 3vh;
`