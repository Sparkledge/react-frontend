import styled from "styled-components";

interface SearchResultInterface {
  animAlign: number,
  isMain?: boolean
}

interface SearchingSideResultDataInterface {
  width: string
}

interface SearchingResultsOpenFiltersBtnInterface {
  isOnPanel?: boolean,
  isAlwaysVisible?: boolean
}

export const SearchingResultsWrapper = styled.section`
      width: calc(100% - 30px);
      padding: 10px;
      padding-bottom: 2vh;
      display: inline-block;
      vertical-align: top;
      margin: 0px 10px 0px;
      text-align: center;
      position: relative;
      top: 4vh;
  
      @media screen and (min-width: 768px){
          width: calc(65% - 30px);
          margin: 0px 10px 0px 40%;
      }
  
      @media screen and (min-width: 1024px){
          width: calc(70% - 30px);
          margin: 0px 10px 0px 25%;
      }
  
      @media screen and (min-width: 1440px){
          margin: 0px 10px 0px 20%;
      }
`;

export const SearchingResultsOpenFiltersBtn = styled.button<SearchingResultsOpenFiltersBtnInterface>`
    padding: ${(props) => props.isOnPanel !== undefined ? "0px" : "10px 40px"};
    background: ${(props) => props.isOnPanel !== undefined ? "transparent" : props.theme.filtersButtonBackground};
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    letter-spacing: 0.06em;
    font-size: 1.4em;
    margin-bottom: 2vh;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    ${(props) => props.isOnPanel !== undefined ? `
      position: absolute;
      top: 2vh;
      left: 85%;
      z-index: 2;
    ` : null}

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 768px){
        ${(props) => props.isAlwaysVisible !== undefined ? "" : "display: none;"}
    }
`;

export const SearchingMainResult = styled.div<SearchResultInterface>`
    width: calc(100% - 20px);
    
    height: fit-content;
    padding: 20px 10px;
    border-radius: 10px;
    margin-bottom: 2vh;
    background: ${(props) => props.theme.resultBackground};
    color: ${(props) => props.theme.color};
    cursor: pointer;
    transition: all 0.4s;
    text-align: center;

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

export const SearchingSideResultTitle = styled.header`
    width: calc(33% - 20px);
    padding: 0px 5px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    font-size: 0.7em;
    letter-spacing: 0.04em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};

    @media screen and (min-width: 600px){
        width: calc(40% - 20px);
        font-size: 0.9em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.6em;
    }
`;

export const SearchingSideResultData = styled.div<SearchingSideResultDataInterface>`
    width: calc(33% - 20px);
    padding: 0px 5px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    font-size: 0.7em;

    @media screen and (min-width: 600px){
        width: ${(props) => props.width};
        font-size: 0.9em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.6em;
    }
`;

export const SearchingNoResultsContainer = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    font-size: 1.1em;
    letter-spacing: 0.07em;
    text-align: center;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 1.3em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.7em;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
    }
`;
