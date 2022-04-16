import styled from "styled-components";

interface SearcherCategorieChooserInterface{
    isOption: boolean,
    isOpened?: boolean
}

export const SearcherCategoriesContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    top: 1vh;
    font-family: ${(props) => props.theme.fonts.main};
    margin-bottom: 4vh;

    @media screen and (min-width: 1024px){
        width: calc(95% - 20px);
    }
`

export const SearcherCategorieWrapper = styled.div`
    width: calc(100% - 30px);
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;

    @media screen and (min-width: 375px){
        width: calc(80% - 30px);
    }

    @media screen and (min-width: 425px){
        width: calc(50% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(25% - 30px);
        margin: 0px 5px;
    }
`

export const SearcherCategorieChooser = styled.div<SearcherCategorieChooserInterface>`
    width: calc(100% - 20px);
    padding: ${(props) => props.isOption ? props.isOpened !== undefined ? props.isOpened ? "10px" : "0px" : "10px" : "30px"} 10px;
    text-align: center;
    margin-bottom: ${(props) => props.isOpened !== undefined ? props.isOpened ? "1vh" : "0vh" : "1vh"};
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.landingButtonColor};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-size: ${(props) => props.isOption ? props.isOpened !== undefined ? props.isOpened ? "0.8em" : "0em" : "0.8em" : "1em"};
    letter-spacing: 0.06em;
    border-radius: 10px;
    transition: all 0.4s;
    cursor: pointer;
    height: ${(props) => props.isOpened !== undefined ? props.isOpened ? "fit-content" : 0 : "fit-content"} !important;
    overflow-y: hidden;
    transform: scale(${(props) => props.isOpened !== undefined ? props.isOpened ? 1.0 : 0.0 : 1.0});

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: ${(props) => props.isOption ? props.isOpened !== undefined ? props.isOpened ? "1em" : "0em" : "1em" : "1.2em"};
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
    font-size: ${(props) => props.isOption ? props.isOpened !== undefined ? props.isOpened ? "1em" : "0em" : "1em" : "1.4em"};
    }
`

export const GoToSearchBarBtn = styled.div`
    width: calc(95% - 80px);
    padding: 20px 40px;
    border-radius: 10px;
    font-size: 1em;
    letter-spacing: 0.06em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    text-align: center;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.landingButtonColor};
    margin-bottom: 4vh;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        width: fit-content;
    }

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.7em;
    }
`

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