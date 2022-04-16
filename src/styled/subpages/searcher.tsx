import styled from "styled-components";

interface SearchingPreloaderInterface{
    delay: number
}

interface SearchResultInterface{
    animAlign: number
}

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