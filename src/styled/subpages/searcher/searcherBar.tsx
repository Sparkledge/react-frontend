import styled from "styled-components";

interface SearcherCategorieChooserInterface {
  isOption: boolean,
  isInfoCategorie?: boolean,
  isBiggerScale: boolean
}

// main container - to wrap all of the content into one piece
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
`;
// sub container - to make the change of categories in searching more convienient and eye-candy
export const SearcherCategoriesSubContainer = styled.div`
    width: 100%;
    position: relative;
    top: 0vh;
    left: 0%;
    height: fit-content;
    overflow-y: hidden !important;
    text-align: center;
`;

export const SearcherCategorieChooser = styled.div<SearcherCategorieChooserInterface>`
    width: calc(100% - 40px);
    padding: 40px 10px;
    text-align: center;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.landingButtonColor};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-size: 1em;
    letter-spacing: 0.06em;
    border-radius: 10px;
    transition: all 0.4s;
    cursor: pointer;
    height: fit-content;
    min-height: calc(17vh - 90px) !important;
    overflow-y: hidden;
    display: inline-block;
    vertical-align: top;
    margin: 0px 10px 1vh;

    & > div{
        line-height: 1.4em;
    }

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        width: calc(80% - 40px);
    }

    @media screen and (min-width: 425px){
        width: calc(50% - 40px);
        font-size: 0.9em;
    }

    @media screen and (min-width: 768px){
        min-width: calc(${(props) => props.isBiggerScale ? "50%" : "25%"} - 40px);
        width: fit-content;
        margin: 0px 5px;
        font-size: 1.1em;
    }
    
    @media screen and (min-width: 1024px){
        font-size: 1.4em;
    }
`;

export const GoToSearchBarBtn = styled.button`
    width: calc(95% - 80px);
    padding: 10px 40px;
    height: fit-content;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    letter-spacing: 0.06em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    text-align: center;
    color: ${(props) => props.theme.color};
    background: transparent;
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
`;

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

export const SearcherBarInputContainer = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    margin-bottom: 2vh;
`;

export const SearcherInput = styled.input`
    width: calc(100% - 24px);
    padding: 20px 10px;
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.signingInputBackground};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-size: 0.78em;
    letter-spacing: 0.06em;
    text-indent: 0.6em;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 320px){
        width: calc(80% - 24px);
    }

    @media screen and (min-width: 375px){ 
        font-size: 1.1em;
        width: calc(70% - 30px);
    }

    @media screen and (min-width: 425px){
        width: calc(60% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 30px);
        font-size: 1.4em;
    }
`;

export const SearcherButton = styled.button`
    width: calc(80% - 20px);
    padding: 20px 10px;
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.signingInputBackground};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-size: 1em;
    letter-spacing: 0.06em;
    cursor: pointer;
    transition: all 0.4s;
    margin-bottom: 4.5vh;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        width: calc(60% - 30px);
    }

    @media screen and (min-width: 425px){
        width: calc(55% - 30px);
        font-size: 1.2em;
    }

    @media screen and (min-width: 768px){
        width: calc(40% - 30px);
        font-size: 1.4em;
    }

    @media screen and (min-width: 1024px){
        width: calc(50% - 30px);
    }
`;
