import React from "react";
import { SearchingMainResult, SearchingResultHeader,
    SearchingResultSubInfo, SearchingResultTagsSection, SearchingResultTag } from "../../../styled/subpages/searcher/searcherResults";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export interface SearchingMainResultComponentInterface{
    title: string,
    publishedOn: string,
    publisher: string,
    animAlign: number,
    likesNum: number
}

const SearchingMainResultComponent:React.FC<SearchingMainResultComponentInterface> = 
    ({title, publishedOn, publisher, animAlign, likesNum}:SearchingMainResultComponentInterface) => {
    return <SearchingMainResult className="block-center" animAlign={animAlign}>
    <SearchingResultHeader>
        {title}
    </SearchingResultHeader>
    <SearchingResultSubInfo>
        Udostępnione dnia {publishedOn.substring(0,10)} przez użytkownika {publisher}
    </SearchingResultSubInfo>
    <SearchingResultTagsSection className="block-center">
        <SearchingResultTag>
            <ThumbUpIcon style={{color: "inherit", fontSize: "inherit", verticalAlign:"middle"}}/> {likesNum}
        </SearchingResultTag>
    </SearchingResultTagsSection>
</SearchingMainResult>
};

export default SearchingMainResultComponent;