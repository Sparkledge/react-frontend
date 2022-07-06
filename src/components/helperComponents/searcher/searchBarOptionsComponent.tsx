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
    <SearcherCategorieChooser
      className="block-center"
      isOption={false}
      onClick={() => toggleOpening(!opening)}
    >
      {sectionHeader}
    </SearcherCategorieChooser>
    {
            options.map((elem, ind) => (
              <SearcherCategorieChooser
                className="block-center"
                isOption
                isOpened={opening}
                onClick={() => choiceCallback(typeOfCallbackValue !== undefined ? typeOfCallbackValue === "index" ? ind + 1 : elem : elem)}
              >
                {elem}
              </SearcherCategorieChooser>
            ))
        }
        
  </SearcherCategorieWrapper>
);

SearchBarOptionsComponent.defaultProps = {
  typeOfCallbackValue: "index",
};

export default SearchBarOptionsComponent;
