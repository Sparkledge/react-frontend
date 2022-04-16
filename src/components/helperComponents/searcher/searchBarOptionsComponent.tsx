import React from "react";
import { SearcherCategorieWrapper, SearcherCategorieChooser } from "../../../styled/subpages/searcher/searcherBar";

interface SearchBarOptionsComponentInterface{
    sectionHeader: string,
    options: string[],
    toggleOpening: (newState: boolean) => void,
    opening: boolean,
    choiceCallback: (newNameOfSection: string) => void
}

const SearchBarOptionsComponent:React.FC<SearchBarOptionsComponentInterface> = 
    ({sectionHeader, options, toggleOpening, opening, choiceCallback} : SearchBarOptionsComponentInterface) => {
    return <SearcherCategorieWrapper>
        <SearcherCategorieChooser className="block-center" isOption={false}
            onClick={() => toggleOpening(!opening)}>
            {sectionHeader}
        </SearcherCategorieChooser>
        {
            options.map((elem, ind) => <SearcherCategorieChooser className="block-center" isOption={true}
            isOpened={opening} onClick={() => choiceCallback(elem)} key={`${sectionHeader}-${elem}-${ind}`}>
                {elem}
        </SearcherCategorieChooser>)
        }
        
    </SearcherCategorieWrapper>
};

export default SearchBarOptionsComponent;