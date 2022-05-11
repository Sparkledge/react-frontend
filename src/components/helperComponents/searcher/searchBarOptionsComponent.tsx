import React from "react";
import { SearcherCategorieWrapper, SearcherCategorieChooser } from "../../../styled/subpages/searcher/searcherBar";

interface SearchBarOptionsComponentInterface{
    sectionHeader: string,
    options: string[],
    toggleOpening: (newState: boolean) => void,
    opening: boolean,
    choiceCallback: (newNameOfSection: any) => void,
    typeOfCallbackValue?: string
}

const SearchBarOptionsComponent:React.FC<SearchBarOptionsComponentInterface> = 
    ({sectionHeader, options, toggleOpening, opening, choiceCallback,
        typeOfCallbackValue} : SearchBarOptionsComponentInterface) => {
    return <SearcherCategorieWrapper>
        <SearcherCategorieChooser className="block-center" isOption={false}
            onClick={() => toggleOpening(!opening)}>
            {sectionHeader}
        </SearcherCategorieChooser>
        {
            options.map((elem, ind) => <SearcherCategorieChooser className="block-center" isOption={true}
            isOpened={opening} onClick={() => choiceCallback(typeOfCallbackValue !== undefined ? typeOfCallbackValue === "index" ? ind+1 : elem: elem)} key={`${sectionHeader}-${elem}-${ind}`}>
                {elem}
        </SearcherCategorieChooser>)
        }
        
    </SearcherCategorieWrapper>
};

export default SearchBarOptionsComponent;