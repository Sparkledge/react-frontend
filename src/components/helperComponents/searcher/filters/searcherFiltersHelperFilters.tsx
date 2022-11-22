import React, { useMemo, useState } from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

import { SearchingResultsOpenFiltersBtn } from "src/styled/subpages/searcher/searcherResults";

import {
  SearchingFiltersHeader, 
  SearchingFiltersOptionWrapper,
  SearchingFilterOptionChoice,
  SearchingFilterOptionChoiceDesc,
  SearchingFilterOptionChoiceCheckbox,
  SearchingFilterOptionLabel,
  SearchingFilterOptionOpenBtn,
} from "src/styled/subpages/searcher/searcherFilters";

interface SearcherFiltersHelperFiltersInterface {
  chosenSort: string,
  setChosenSort: (newState: string) => void,
  chosenSortOrder: string,
  setChosenSortOrder: (newState: string) => void,
  toggleAreFiltersOn: (newState: boolean) => void,
}

const SearcherFiltersHelperFilters:React.FC<SearcherFiltersHelperFiltersInterface> = ({
  chosenSort, setChosenSort, chosenSortOrder, setChosenSortOrder, toggleAreFiltersOn,
}:SearcherFiltersHelperFiltersInterface) => {
  const [isKindOfSortingOpened, toggleIsKindOfSortingOpened] = useState<boolean>(false);
  const [isOrderOfSortingOpened, toggleIsOrderOfSortingOpened] = useState<boolean>(false);

  const listOfSorts:[string, string][] = [["createdAt", "Data utworzenia"], ["title", "alfabetycznie"], 
    ["viewsNumber", "Odsłony"], ["likesNumber", "Polubienia"]];

  const listOfOrders:[string, string][] = [["asc", "rosnąco"], ["desc", "malejąco"]];

  const listOfSortsMemoList:JSX.Element[] = useMemo(() => listOfSorts.map((elem: [string, string]) => (
    <SearchingFilterOptionChoice>
      <SearchingFilterOptionChoiceDesc>
        {elem[1].length > 20 ? `${elem[1].substring(0, 17)}...` : elem[1]}
      </SearchingFilterOptionChoiceDesc>
      <SearchingFilterOptionChoiceCheckbox
        className="block-center"
        isChosen={chosenSort === elem[0]}
        onClick={() => setChosenSort(chosenSort === elem[0] ? "viewsNumber" : elem[0])}
      />

    </SearchingFilterOptionChoice>
  )), [listOfSorts]);

  const listOfOrdersMemoList:JSX.Element[] = useMemo(() => listOfOrders.map((elem: [string, string]) => (
    <SearchingFilterOptionChoice>
      <SearchingFilterOptionChoiceDesc>
        {elem[1].length > 20 ? `${elem[1].substring(0, 17)}...` : elem[1]}
      </SearchingFilterOptionChoiceDesc>
      <SearchingFilterOptionChoiceCheckbox
        className="block-center"
        isChosen={chosenSortOrder === elem[0]}
        onClick={() => setChosenSortOrder(chosenSortOrder === elem[0] ? "asc" : elem[0])}
      />

    </SearchingFilterOptionChoice>
  )), [listOfOrders]);

  return (
    <>
      <SearchingResultsOpenFiltersBtn
        onClick={() => toggleAreFiltersOn(false)}
        isOnPanel
      >
        <CloseIcon style={{ color: "inherit", fontSize: "1.2em" }} />
      </SearchingResultsOpenFiltersBtn>
      <SearchingFiltersHeader className="block-center">
        Sortowanie
      </SearchingFiltersHeader>
      <SearchingFiltersOptionWrapper
        className="block-center"
        isOpened={isKindOfSortingOpened}
        elementsNumber={5}
      > 
        <SearchingFilterOptionChoice>
          <SearchingFilterOptionLabel>
            Sortuj według
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!isKindOfSortingOpened ? (
              <ArrowDropDownIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => toggleIsKindOfSortingOpened(!isKindOfSortingOpened)}
              />
            ) : (
              <ArrowDropUpIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => toggleIsKindOfSortingOpened(!isKindOfSortingOpened)}
              />
            )}

          </SearchingFilterOptionOpenBtn>
        </SearchingFilterOptionChoice>
        {listOfSortsMemoList}
      </SearchingFiltersOptionWrapper>
      <SearchingFiltersOptionWrapper
        className="block-center"
        isOpened={isOrderOfSortingOpened}
        elementsNumber={3}
      > 
        <SearchingFilterOptionChoice>
          <SearchingFilterOptionLabel>
            Porządek sortowania
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!isOrderOfSortingOpened ? (
              <ArrowDropDownIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => toggleIsOrderOfSortingOpened(!isOrderOfSortingOpened)}
              />
            ) : (
              <ArrowDropUpIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => toggleIsOrderOfSortingOpened(!isOrderOfSortingOpened)}
              />
            )}

          </SearchingFilterOptionOpenBtn>
        </SearchingFilterOptionChoice>
        {listOfOrdersMemoList}
      </SearchingFiltersOptionWrapper>
    </>
  );
};

export default SearcherFiltersHelperFilters;
