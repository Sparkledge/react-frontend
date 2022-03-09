import styled from "styled-components";

export const SearcherBar = styled.div`
    width: calc(100% - 10px);
    padding: 10px 5px;
    text-align: center;

    @media screen and (min-width: 375px){
        width: calc(100% - 20px);
        padding: 10px;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
    }
`;

export const SearcherInput = styled.input`
    width: calc(60% - 24px);
    padding: 20px 10px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.signingInputBackground};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-size: 0.78em;
    letter-spacing: 0.06em;
    text-indent: 0.6em;
    display: inline-block;
    vertical-align: top;
    margin: 0px 2px;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){ 
        font-size: 1.1em;
        width: calc(60% - 30px);
        margin: 0px 5px;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 30px);
        font-size: 1.4em;
    }
`;

export const SearcherButton = styled.button`
    width: calc(40% - 24px);
    padding: 10px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.signingInputBackground};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-size: 1em;
    letter-spacing: 0.06em;
    display: inline-block;
    vertical-align: top;
    margin: 0px 2px;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        font-size: 1.2em;
        width: calc(40% - 30px);
        margin: 0px 5px;
    }

    @media screen and (min-width: 425px){
        width: calc(30% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(20% - 30px);
        font-size: 1.4em;
    }

    @media screen and (min-width: 1024px){
        width: calc(10% - 30px);
    }
`;