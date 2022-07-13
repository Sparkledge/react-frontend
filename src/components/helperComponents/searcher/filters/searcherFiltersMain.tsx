import React from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  SearchingFiltersHeader, 
  SearchingFiltersOptionWrapper,
  SearchingFilterOptionChoice,
  SearchingFilterOptionChoiceDesc,
  SearchingFilterOptionChoiceCheckbox,
  SearchingFilterOptionLabel,
  SearchingFilterOptionOpenBtn,
} from "../../../../styled/subpages/searcher/searcherFilters";

import SearcherFiltersInterface from "./SearcherFiltersInterface";

const SearcherFiltersMain:React.FC<SearcherFiltersInterface> = ({
  openedFilters, setOpenedFilters, 
  chosenSemester, setChosenSemester, 
  chosenProgramme, setChosenProgramme,
  programmesList, chosenCourse, 
  setChosenCourse, coursesList,
}:SearcherFiltersInterface) => {
  const semesters:number[] = [1, 2, 3, 4, 5, 6, 7];
    
  return (
    <>
      <SearchingFiltersHeader className="block-center">
        Filtry
      </SearchingFiltersHeader>
      <SearchingFiltersOptionWrapper
        className="block-center"
        isOpened={openedFilters[0]}
        elementsNumber={programmesList.length + 1}
      >
        <SearchingFilterOptionChoice>
          <SearchingFilterOptionLabel>
            Według kierunku
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!openedFilters[0] ? (
              <ArrowDropDownIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => setOpenedFilters([!openedFilters[0], openedFilters[1], openedFilters[2]])}
              />
            ) : (
              <ArrowDropUpIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => setOpenedFilters([!openedFilters[0], openedFilters[1], openedFilters[2]])}
              />
            )}

          </SearchingFilterOptionOpenBtn>
        </SearchingFilterOptionChoice>
        {
    programmesList.map((elem: any) => (
      <SearchingFilterOptionChoice>
        <SearchingFilterOptionChoiceDesc>
          {elem.name.length > 20 ? `${elem.name.substring(0, 17)}...` : elem.name}
        </SearchingFilterOptionChoiceDesc>
        <SearchingFilterOptionChoiceCheckbox
          className="block-center"
          isChosen={chosenProgramme === elem.id}
          onClick={() => setChosenProgramme(chosenProgramme === elem.id ? "" : elem.id)}
        />

      </SearchingFilterOptionChoice>
    ))
  }
      </SearchingFiltersOptionWrapper>
      <SearchingFiltersOptionWrapper
        className="block-center"
        isOpened={openedFilters[2]}
        elementsNumber={semesters.length + 1}
      >
        <SearchingFilterOptionChoice>
          <SearchingFilterOptionLabel>
            Według semestru
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!openedFilters[2] ? (
              <ArrowDropDownIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => setOpenedFilters([openedFilters[0], openedFilters[1], !openedFilters[2]])}
              />
            ) : (
              <ArrowDropUpIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => setOpenedFilters([openedFilters[0], openedFilters[1], !openedFilters[2]])}
              />
            )}

          </SearchingFilterOptionOpenBtn>
        </SearchingFilterOptionChoice>
        {
    semesters.map((elem: number) => (
      <SearchingFilterOptionChoice>
        <SearchingFilterOptionChoiceDesc>
          Semestr 
          {" "}
          {elem}
        </SearchingFilterOptionChoiceDesc>
        <SearchingFilterOptionChoiceCheckbox
          className="block-center"
          isChosen={chosenSemester === elem}
          onClick={() => setChosenSemester(chosenSemester === elem ? 0 : elem)}
        />

      </SearchingFilterOptionChoice>
    ))
  }
      </SearchingFiltersOptionWrapper>
      <SearchingFiltersOptionWrapper
        className="block-center"
        isOpened={openedFilters[1]}
        elementsNumber={coursesList.filter((elem: any) => elem.semester === chosenSemester).length + 1}
      >
        <SearchingFilterOptionChoice>
          <SearchingFilterOptionLabel>
            Według kursu
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!openedFilters[1] ? (
              <ArrowDropDownIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => setOpenedFilters([openedFilters[0], coursesList.length > 0 && chosenSemester > 0 ? !openedFilters[1] : openedFilters[1], openedFilters[2]])}
              />
            ) : (
              <ArrowDropUpIcon
                style={{ color: "inherit", fontSize: "1.2em" }}
                onClick={() => setOpenedFilters([openedFilters[0], coursesList.length > 0 && chosenSemester > 0 ? !openedFilters[1] : openedFilters[1], openedFilters[2]])}
              />
            )}

          </SearchingFilterOptionOpenBtn>
        </SearchingFilterOptionChoice>
        {
          coursesList.filter((elem: any) => elem.semester === chosenSemester).length === 0 ? (
            <SearchingFilterOptionChoice>
              <SearchingFilterOptionLabel>
                Brak kursów
              </SearchingFilterOptionLabel>
            </SearchingFilterOptionChoice>
          ) 
            : coursesList.map((elem: any) => elem.semester !== chosenSemester ? null : (
              <SearchingFilterOptionChoice>
                <SearchingFilterOptionChoiceDesc>
                  {elem.name.length > 20 ? `${elem.name.substring(0, 17)}...` : elem.name}
                </SearchingFilterOptionChoiceDesc>
                <SearchingFilterOptionChoiceCheckbox
                  className="block-center"
                  isChosen={chosenCourse === elem.id}
                  onClick={() => setChosenCourse(chosenCourse === elem.id ? "" : elem.id)}
                />

              </SearchingFilterOptionChoice>
            ))
  }
      </SearchingFiltersOptionWrapper>      
    </>
  );
};

export default SearcherFiltersMain;
