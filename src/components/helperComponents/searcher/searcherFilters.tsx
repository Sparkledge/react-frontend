import React from "react";

import CloseIcon from "@mui/icons-material/Close";

import { SearchingResultsOpenFiltersBtn } from "src/styled/subpages/searcher/searcherResults";
import {
  SearchingFiltersPanel,
} from "../../../styled/subpages/searcher/searcherFilters";

import SearcherFiltersMain from "./filters/searcherFiltersMain";
import SearcherFiltersHelperFilters from "./filters/searcherFiltersHelperFilters";
import SearcherFiltersInterface from "./filters/SearcherFiltersInterface";

interface SearcherFiltersExtendedInterface extends SearcherFiltersInterface {
  openedFilters: boolean[],
  setOpenedFilters: (newState: boolean[]) => void,
  chosenSemester: number,
  setChosenSemester: (newState: number) => void,
  chosenProgramme: string,
  setChosenProgramme: (newState: string) => void,
  programmesList: any[],
  chosenCourse: string,
  setChosenCourse: (newState: string) => void,
  coursesList: any[],
  chosenSort: string,
  setChosenSort: (newState: string) => void,
  chosenSortOrder: string,
  setChosenSortOrder: (newState: string) => void,
  areFiltersOn: boolean,
  toggleAreFiltersOn: (newState: boolean) => void,
}

const SearcherFilters:React.FC<SearcherFiltersExtendedInterface> = ({
  openedFilters, setOpenedFilters, 
  chosenSemester, setChosenSemester, 
  chosenProgramme, setChosenProgramme,
  programmesList, chosenCourse, 
  setChosenCourse, coursesList,
  chosenSort, setChosenSort,
  chosenSortOrder, setChosenSortOrder,
  areFiltersOn, toggleAreFiltersOn,
}:SearcherFiltersExtendedInterface) => {
  const semesters:number[] = [1, 2, 3, 4, 5, 6, 7];

  return (
    <SearchingFiltersPanel isOpened={areFiltersOn}>
      <SearcherFiltersHelperFilters 
        chosenSort={chosenSort}
        setChosenSort={setChosenSort}
        chosenSortOrder={chosenSortOrder}
        setChosenSortOrder={setChosenSortOrder}
        toggleAreFiltersOn={toggleAreFiltersOn}
      />
      <SearcherFiltersMain 
        openedFilters={openedFilters}
        setOpenedFilters={setOpenedFilters}
        chosenSemester={chosenSemester}
        setChosenSemester={setChosenSemester}
        chosenProgramme={chosenProgramme}
        setChosenProgramme={setChosenProgramme}
        programmesList={programmesList}
        chosenCourse={chosenCourse}
        setChosenCourse={setChosenCourse}
        coursesList={coursesList}
      />
    </SearchingFiltersPanel>
  );
};

export default SearcherFilters;
