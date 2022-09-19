import styled from "styled-components";

interface SearchingFiltersOptionWrapperInterface {
  isOpened: boolean,
  elementsNumber: number
}

interface SearchingFilterOptionChoiceInterface {
  isInterfaceButton?: boolean
}
  
interface SearchingFilterOptionChoiceCheckboxInterface {
  isChosen: boolean
}
  
interface SearchingFiltersPanelInterface {
  isOpened: boolean
}
  
export const SearchingFiltersPanel = styled.section<SearchingFiltersPanelInterface>`
      width: calc(98% - 30px);
      height: calc(80vh - 20px);
      overflow-y: scroll;
      padding: 10px;
      display: inline-block;
      vertical-align: top;
      margin: 0px 5px;
      text-align: center;
      background: ${(props) => props.theme.filtersResponsiveBackground};
      border-radius: 10px;
      font-family: ${(props) => props.theme.fonts.main};
      text-shadow: ${(props) => props.theme.fonts.textShadowMain};
      color: ${(props) => props.theme.color};
      position: fixed !important;
      top: 17vh;
      left: ${(props) => props.isOpened ? "1%" : "-98%"};
      z-index: 1;
      transition: all 0.4s;
  
      &::-webkit-scrollbar{
          width: 11px;
      }
        
      &::-webkit-scrollbar-thumb{
          border-radius: 10px;
          width: 3px;
          background: rgba(34,107,255,.9);
      }
        
      &::-webkit-scrollbar-track{
          width: 6px;
      }

      @media screen and (min-width: 375px){
        width: calc(90% - 30px);
        left: ${(props) => props.isOpened ? "5%" : "-90%"};
      }

      @media screen and (min-width: 425px){
        width: calc(70% - 30px);
        left: ${(props) => props.isOpened ? "15%" : "-70%"};

      }
  
      @media screen and (min-width: 768px){
          width: calc(40% - 30px);
          background: ${(props) => props.theme.signingInputBackground};
          left: 2%;
      }
  
      @media screen and (min-width: 1024px){
          width: calc(30% - 30px);
      }
  
      @media screen and (min-width: 1440px){
          width: calc(25% - 30px);
      }
`;

export const SearchingFiltersUploadWrapper = styled.section`
  width: calc(90% - 10px);
  height: calc(50vh - 10px);
  padding: 5px;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    width: 6px;
  }
    
  &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      width: 3px;
      background: rgba(34,107,255,.9);
  }
    
  &::-webkit-scrollbar-track{
      width: 5px;
  }
`;
  
export const SearchingFiltersHeader = styled.header`
      width: calc(100% - 10px);
      padding: 5px;
      text-align: center;
      font-size: 1.3em;
      letter-spacing: 0.06em;
      position: relative;
      margin-bottom: 2vh;

      @media screen and (min-width: 425px){
        font-size: 1.5em;
      }
  
      @media screen and (min-width: 1440px){
          width: calc(90% - 10px);
          font-size: 1.6em;
      }
  `;
  
export const SearchingFiltersOptionWrapper = styled.div<SearchingFiltersOptionWrapperInterface>`
      width: 95%;
      text-align: center;
      height: ${(props) => props.isOpened ? `${(props.elementsNumber + 1) * 8}vh` : "8vh"};
      overflow: hidden;
      transition: all 0.1s;
  
      @media screen and (min-width: 1440px){
          width: 90%;
      }
  `;
  
export const SearchingFilterOptionChoice = styled.div<SearchingFilterOptionChoiceInterface>`
      width: calc(100% - 10px);
      height: calc(8vh - 10px);
      padding: 5px;
      text-align: center;
      margin-bottom: 1vh;

      ${(props) => props.isInterfaceButton !== undefined && props.isInterfaceButton ? `
        cursor: pointer;
        transition: all 0.4s;

        &:hover{
          filter: brightness(70%);
        }
      ` : null}
  `;
  
export const SearchingFilterOptionLabel = styled.div`
      width: calc(90% - 20px);
      margin: 0px 5px;
      padding: 5px;
      display: inline-block;
      vertical-align: top;
      text-align: left;
      font-size: 0.95em;
      letter-spacing: 0.05em;

      @media screen and (min-width: 425px){
        font-size: 1.15em;
      }
  
      @media screen and (min-width: 1024px){
          font-size: 1.25em;
      }
`;
  
export const SearchingFilterOptionOpenBtn = styled.div`
      width: calc(10% - 20px);
      margin: 0px 5px;
      padding: 5px;
      display: inline-block;
      vertical-align: top;
      font-size: 1.2em;
      text-align: center;
      cursor: pointer;
      transition: all 0.4s;
  
      &:hover{
          filter: brightness(70%);
      }

      @media screen and (min-width: 425px){
        font-size: 1.3em;
      }
  
      @media screen and (min-width: 1024px){
          font-size: 1.5em;
      }
  `;
  
export const SearchingFilterOptionChoiceDesc = styled.span`
      width: calc(80% - 20px);
      padding: 5px;
      margin: 0px 5px;
      text-align: left;
      font-size: 0.85em;
      display: inline-block;
      vertical-align: top;

      @media screen and (min-width: 425px){
        font-size: 0.95em;
      }
  
      @media screen and (min-width: 1024px){
          font-size: 1.1em;
      }
  `;
  
export const SearchingFilterOptionChoiceInput = styled.input`
      display: none;
  `;
  
export const SearchingFilterOptionChoiceCheckbox = styled.label<SearchingFilterOptionChoiceCheckboxInterface>`
      width: calc(9% - 10px);
      height: 0.95em;
      padding: 10px;
      background: ${(props) => props.isChosen ? props.theme.filtersButtonBackground : props.theme.filtersButtonResponsiveBackground};
      border-radius: 10px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      transition: all 0.4s;
  
      &:hover{
          filter: brightness(70%);
      }

      @media screen and (min-width: 425px){
        width: calc(10% - 10px);
       height: 1.05em;
      }

      @media screen and (min-width: 768px){
        
      background: ${(props) => props.isChosen ? props.theme.filtersButtonBackground : props.theme.signingInputBackground};
      }
  
      @media screen and (min-width: 1024px){
          font-size: 1.2em;
      }
  `;
