import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  SearchingMainResult, SearchingResultHeader,
  SearchingResultSubInfo, SearchingResultTagsSection, SearchingResultTag, 
} from "../../../styled/subpages/searcher/searcherResults";

export interface SearchingMainResultComponentInterface {
  title: string,
  publishedOn: string,
  publisher: string,
  description?: string,
  animAlign: number,
  likesNum: number,
  viewsNum: number
}

const SearchingMainResultComponent:React.FC<SearchingMainResultComponentInterface> = ({
  title, publishedOn, publisher, description = "", animAlign, likesNum, viewsNum, 
}:SearchingMainResultComponentInterface) => (
  <SearchingMainResult className="block-center" animAlign={animAlign}>
    <SearchingResultHeader>
      {title}
    </SearchingResultHeader>
    <SearchingResultSubInfo>
      Udostępnione dnia 
      {" "}
      {publishedOn.substring(0, 10)}
      {" "}
      przez użytkownika
      {" "}
      {publisher}
    </SearchingResultSubInfo>
    {
        description !== undefined ? (
          <SearchingResultSubInfo>
            {description.length > 100 ? `${description.substring(0, 97)}...` : description}
          </SearchingResultSubInfo>
        ) : null
    }
    <SearchingResultTagsSection className="block-center">
      <SearchingResultTag>
        <ThumbUpIcon style={{ color: "inherit", fontSize: "inherit", verticalAlign: "middle" }} /> 
        {" "}
        {likesNum}
      </SearchingResultTag>
      <SearchingResultTag>
        <RemoveRedEyeIcon style={{ color: "inherit", fontSize: "inherit", verticalAlign: "middle" }} /> 
        {" "}
        {viewsNum}
      </SearchingResultTag>
    </SearchingResultTagsSection>
  </SearchingMainResult>
);

SearchingMainResultComponent.defaultProps = {
  description: "",
};

export default SearchingMainResultComponent;
