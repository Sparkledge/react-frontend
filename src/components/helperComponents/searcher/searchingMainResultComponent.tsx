import React from "react";
import { SearchingMainResult, SearchingResultHeader,
    SearchingResultSubInfo, SearchingResultTagsSection, SearchingResultTag } from "../../../styled/subpages/searcher";

export interface SearchingMainResultComponentInterface{
    title: string,
    publishedOn: string,
    publisher: string,
    animAlign: number
}

const SearchingMainResultComponent:React.FC<SearchingMainResultComponentInterface> = 
    ({title, publishedOn, publisher, animAlign}:SearchingMainResultComponentInterface) => {
    return <SearchingMainResult className="block-center" animAlign={animAlign}>
    <SearchingResultHeader>
        {title}
    </SearchingResultHeader>
    <SearchingResultSubInfo>
        Udostępnione dnia {publishedOn.substring(0,10)} przez użytkownika {publisher}
    </SearchingResultSubInfo>
    <SearchingResultTagsSection className="block-center">
        <SearchingResultTag>
            Doktorologia
        </SearchingResultTag>
        <SearchingResultTag>
            Doktorologia stosowana
        </SearchingResultTag>
        <SearchingResultTag>
            Doktorologia
        </SearchingResultTag>
        <SearchingResultTag>
            Doktorologia stosowana
        </SearchingResultTag>
        <SearchingResultTag>
            Doktorologia
        </SearchingResultTag>
        <SearchingResultTag>
            Doktorologia stosowana
        </SearchingResultTag>
        <SearchingResultTag>
            Doktorologia
        </SearchingResultTag>
        <SearchingResultTag>
            Doktorologia stosowana
        </SearchingResultTag>
    </SearchingResultTagsSection>
</SearchingMainResult>
};

export default SearchingMainResultComponent;