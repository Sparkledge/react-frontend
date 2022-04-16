import styled from "styled-components";

interface SearchingPreloaderInterface{
    delay: number
}

interface SearchResultInterface{
    animAlign: number
}

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

export const SearchingPreloader = styled.div`
    width: calc(100% - 20px);
    padding: 20px 10px;
    text-align: center;

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
    }
`;

export const SearchingPreloaderElem = styled.div<SearchingPreloaderInterface>`
    width: 20px;
    height: 40px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    background: ${(props) => props.theme.color};
    border-radius: 10px;
    animation-name: searchingPreloader;
    animation-duration: 0.6s;
    animation-delay: ${(props) => props.delay}s;
    animation-iteration-count: infinite;
    transition: all 0.2s;
    transform-origin: 0% 50%;

    @media screen and (min-width: 768px){
        margin: 0px 10px;
    }
`;

export const SearchingResultsSection = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
    }
`;

export const SearchingMainResult = styled.div<SearchResultInterface>`
    width: calc(95% - 20px);
    min-height: calc(50vh - 40px);
    height: fit-content;
    padding: 20px 10px;
    border-radius: 10px;
    margin-bottom: 2vh;
    background: ${(props) => props.theme.resultBackground};
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        transform: translateX(${(props) => props.animAlign ? `${props.animAlign}px` : "0px"});
    }

    @media screen and (min-width: 425px){
        width: calc(85% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }
`;

export const SearchingResultHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-size: 1.4em;
    letter-spacing: 0.06em;
    display: block;
    margin: 0px auto;
    margin-bottom: 3vh;
    position: relative;
    top: 1vh;

    @media screen and (min-width: 425px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        text-align: left;
        font-size: 2em;
        margin-right: auto;
        margin-left: 1vw;
    }
`;

export const SearchingResultSubInfo = styled.div`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    color: ${(props) => props.theme.color};
    font-size: 0.75em;
    letter-spacing: 0.05em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    display: block;
    margin: 0px auto;
    margin-bottom: 3vh;
    position: relative;

    @media screen and (min-width: 425px){
        font-size: 0.85em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 10px);
        text-align: left;
        font-size: 1.1em;
        margin-right: auto;
        margin-left: 1vw;
    }
`;

export const SearchingResultTagsSection = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;

    @media screen and (min-width: 1440px){
        width: calc(80% - 20px);
    }
`;

export const SearchingResultTag = styled.div`
    width: fit-content;
    padding: 10px 15px;
    border-radius: 40px;
    font-size: 0.65em;
    letter-spacing: 0.07em;
    background: ${(props) => props.theme.color};
    color: ${(props) => props.theme.signingInputBackground};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    letter-spacing: 0.06em;
    display: inline-block;
    margin: 5px;

    @media screen and (min-width: 425px){
        font-size: 0.85em;
    }

    @media screen and (min-width: 768px){
        font-size: 0.95em;
        padding: 20px;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.2em;
    }
`;

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