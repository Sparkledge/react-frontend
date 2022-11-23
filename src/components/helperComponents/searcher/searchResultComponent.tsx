import React from "react";
import {
  SearchingMainResult, SearchingResultHeader, SearchingResultSubInfo, 
  SearchingResultTagsSection, SearchingResultTag, 
} from "src/styled/subpages/searcher/searcherResults";

interface SearchResultComponentInterface {
  align: boolean,
  header: string,
  shareDay: string,
  author: string,
  tags: string[]
}

const SearchResultComponent:React.FC<SearchResultComponentInterface> = ({
  align, header, shareDay, author, tags, 
}:SearchResultComponentInterface) => (
  <SearchingMainResult className="block-center" animAlign={align ? -10 : 10}>
    <SearchingResultHeader>
      {header}
    </SearchingResultHeader>
    <SearchingResultSubInfo>
      Udostępnione dnia 
      {" "}
      {shareDay}
      {" "}
      przez użytkownika
      {author}
    </SearchingResultSubInfo>
    <SearchingResultTagsSection className="block-center">
      {
            tags.map((elem, ind) => (
              <SearchingResultTag>
                {elem}
              </SearchingResultTag>
            ))
        }
    </SearchingResultTagsSection>
  </SearchingMainResult>
);

export default SearchResultComponent;
