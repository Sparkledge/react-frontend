/*

Searching Side Result Component
The searching side result component is meant to use when displaying the 
secondary results of the search (usually 5th, 6th result and so on)

*/



import React from "react";
import { SearchingMainResult, SearchingSideResultTitle,
    SearchingSideResultData } from "../../../styled/subpages/searcher";

import { SearchingMainResultComponentInterface } from "./searchingMainResultComponent";

const SearchingSideResultComponent:React.FC<SearchingMainResultComponentInterface> = (
    {title, publishedOn, publisher, animAlign}:SearchingMainResultComponentInterface
) => {
    return <SearchingMainResult className="block-center" animAlign={animAlign} isMain={false}>
        <SearchingSideResultTitle>
            {title.length > 15 ? title.substring(0,12)+"..." : title}
        </SearchingSideResultTitle>
        <SearchingSideResultData width={"calc(20% - 20px)"}>
            {publishedOn.substring(0,10)}
        </SearchingSideResultData>
        <SearchingSideResultData width={"calc(30% - 20px)"}>
            {publisher.length > 15 ? publisher.substring(0,12)+"..." : publisher}
        </SearchingSideResultData>
    </SearchingMainResult>
};

export default SearchingSideResultComponent;