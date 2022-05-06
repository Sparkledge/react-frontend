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