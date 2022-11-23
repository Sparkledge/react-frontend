/*
    The SearcherFiltersCategory component is used in choosing the properties of filters in searcher and in document upload 
    page
 */

import React, { useMemo } from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  SearchingFiltersOptionWrapper,
  SearchingFilterOptionChoice,
  SearchingFilterOptionChoiceDesc,
  SearchingFilterOptionChoiceCheckbox,
  SearchingFilterOptionLabel,
  SearchingFilterOptionOpenBtn,
} from "src/styled/subpages/searcher/searcherFilters";

interface SearcherFiltersCategoryInterface {
  header: string,
  isFullyOpened: boolean,
  isChoosingOpened: boolean,
  elementsNumber: number,
  openingFunction: (newState: boolean) => void,
  listToMap: [string, string][],
  chosenOption: string,
  setChosenOption: (newState: string) => void,
}

const SearcherFiltersCategory:React.FC<SearcherFiltersCategoryInterface> = ({
  header,
  isFullyOpened,
  isChoosingOpened,
  elementsNumber,
  openingFunction,
  listToMap,
  chosenOption,
  setChosenOption,
}:SearcherFiltersCategoryInterface) => {
  const mappedListToMap:JSX.Element[] = useMemo(() => listToMap.map((elem: [string, string]) => (
    <SearchingFilterOptionChoice>
      <SearchingFilterOptionChoiceDesc>
        {elem[0].length > 20 ? `${elem[0].substring(0, 17)}...` : elem[0]}
      </SearchingFilterOptionChoiceDesc>
      <SearchingFilterOptionChoiceCheckbox
        className="block-center"
        isChosen={chosenOption === elem[1]}
        onClick={() => { setChosenOption(chosenOption === elem[1] ? "" : elem[1]); openingFunction(false); }}
      />
    
    </SearchingFilterOptionChoice>
  )), [listToMap]);

  return (
    <SearchingFiltersOptionWrapper
      className="block-center"
      isOpened={isFullyOpened}
      elementsNumber={elementsNumber}
    >

      <SearchingFilterOptionChoice onClick={() => openingFunction(!isChoosingOpened)}>
        <SearchingFilterOptionLabel>
          {header}
        </SearchingFilterOptionLabel>
        <SearchingFilterOptionOpenBtn>
          {!isChoosingOpened ? (
            <ArrowDropDownIcon
              style={{ color: "inherit", fontSize: "1.2em" }}
            />
          ) : (
            <ArrowDropUpIcon
              style={{ color: "inherit", fontSize: "1.2em" }}
            />
          )}

        </SearchingFilterOptionOpenBtn>
      </SearchingFilterOptionChoice>
      {mappedListToMap}
    </SearchingFiltersOptionWrapper>
  );
};

export default SearcherFiltersCategory;
