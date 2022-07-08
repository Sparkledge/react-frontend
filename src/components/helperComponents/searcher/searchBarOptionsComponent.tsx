import React from "react";
import { SearcherCategorieWrapper, SearcherCategorieChooser } from "../../../styled/subpages/searcher/searcherBar";

interface SearchBarOptionsComponentInterface {
  sectionHeader: string,
  options: string[],
  toggleOpening: (newState: boolean) => void,
  opening: boolean,
  choiceCallback: (newNameOfSection: any) => void,
  typeOfCallbackValue?: string,
  isBiggerScale: boolean
}

const SearchBarOptionsComponent:React.FC<SearchBarOptionsComponentInterface> = ({
  sectionHeader, options, toggleOpening, opening, choiceCallback,
  typeOfCallbackValue, isBiggerScale, 
} : SearchBarOptionsComponentInterface) => (
  <SearcherCategorieWrapper isBiggerScale={isBiggerScale}>
    {
            options.map((elem, ind) => (
              <SearcherCategorieChooser
                className="block-center"
                isOption
                isOpened
                isBiggerScale={isBiggerScale}
                onClick={() => choiceCallback(typeOfCallbackValue !== undefined ? typeOfCallbackValue === "index" ? ind + 1 : elem : elem)}
              >
                {elem}
              </SearcherCategorieChooser>
            ))
        }
    <SearcherCategorieChooser
      className="block-center"
      isOption
      isOpened
      isBiggerScale={isBiggerScale}
      onClick={() => {}}
    >
      Nie ma Twojej uczelni? Skontaktuj się z nami
    </SearcherCategorieChooser>
        
  </SearcherCategorieWrapper>
);

SearchBarOptionsComponent.defaultProps = {
  typeOfCallbackValue: "index",
};

export default SearchBarOptionsComponent;
