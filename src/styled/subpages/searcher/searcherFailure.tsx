import styled from "styled-components";

export const SearcherFailureContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-family: ${(props) => props.theme.fonts.main};
    position: relative;
    top: 3vh;

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
    }

    @media screen and (min-width: 1440px){
        width: calc(50% - 20px);
    }
`

export const SearcherFailureHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.06em;
    margin-bottom: 4vh;

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 10px);
        font-size: 1.7em;
    }
`

export const SearcherFailureButton = styled.button`
    width: fit-content;
    padding: 20px 40px;
    font-size: 1em;
    color: inherit;
    text-shadow: inherit;
    font-family: inherit;
    background: ${(props) => props.theme.landingButtonColor};
    border: none;
    border-radius: 10px;
    transition: all 0.4s;
    cursor: pointer;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.4em;
    }
`