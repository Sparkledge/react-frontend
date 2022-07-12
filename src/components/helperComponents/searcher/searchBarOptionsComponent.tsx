import React from "react";
import { SearcherCategorieChooser } from "../../../styled/subpages/searcher/searcherBar";

interface SearchBarOptionsComponentInterface {
  options: string[],
  choiceCallback: (newNameOfSection: any) => void,
  typeOfCallbackValue?: string,
  isBiggerScale: boolean
}

const SearchBarOptionsComponent:React.FC<SearchBarOptionsComponentInterface> = ({
  options, choiceCallback,
  typeOfCallbackValue, isBiggerScale, 
} : SearchBarOptionsComponentInterface) => (
  <>
    {
            options.map((elem, ind) => (
              <SearcherCategorieChooser
                className="block-center"
                isOption
                isBiggerScale={isBiggerScale}
                onClick={() => choiceCallback(typeOfCallbackValue !== undefined ? typeOfCallbackValue === "index" ? ind + 1 : elem : elem)}
              >
                <div>
                  {elem}
                </div>
              </SearcherCategorieChooser>
            ))
        }
    { options !== undefined && options.length > 0 ? (
      <SearcherCategorieChooser
        className="block-center"
        isOption
        isInfoCategorie
        isBiggerScale={isBiggerScale}
        onClick={() => {}}
      >
        <div>
          Nie ma Twojej uczelni?
        </div>
      </SearcherCategorieChooser>
    ) : null }
        
  </>
);

SearchBarOptionsComponent.defaultProps = {
  typeOfCallbackValue: "index",
};

export default SearchBarOptionsComponent;
