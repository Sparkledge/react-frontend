import styled from "styled-components";

interface SearchingPreloaderInterface{
    delay: number
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