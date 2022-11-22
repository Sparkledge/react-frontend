import React, { useMemo } from "react";

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
} from "src/styled/subpages/searcher/searcherFilters";

import SearcherFiltersInterface from "./SearcherFiltersInterface";

const SearcherFiltersMain:React.FC<SearcherFiltersInterface> = ({
  openedFilters, setOpenedFilters, 
  chosenSemester, setChosenSemester, 
  chosenProgramme, setChosenProgramme,
  programmesList, chosenCourse, 
  setChosenCourse, coursesList,
  chosenDegree, setChosenDegree,
  chosenType, setChosenType,
}:SearcherFiltersInterface) => {
  const semesters:number[] = [1, 2, 3, 4, 5, 6, 7];
  const degrees:[string, string][] = [["inżynierskie", "BACHELOR"], ["magisterskie", "MASTER"], ["doktorskie", "PHD"]];
  const types:[string, string][] = [["obligatoryjny", "OBLIGATORY"], ["obieralny", "FACULTATIVE"]];

  const coursesDegreesList:JSX.Element[] = useMemo(() => degrees.map((elem: [string, string]) => (
    <SearchingFilterOptionChoice>
      <SearchingFilterOptionChoiceDesc>
        {elem[0]}
      </SearchingFilterOptionChoiceDesc>
      <SearchingFilterOptionChoiceCheckbox
        className="block-center"
        isChosen={chosenDegree === elem[1]}
        onClick={() => setChosenDegree(chosenDegree === elem[1] ? "" : elem[1])}
      />

    </SearchingFilterOptionChoice>
  )), [degrees]);

  const coursesTypesList:JSX.Element[] = useMemo(() => types.map((elem: [string, string]) => (
    <SearchingFilterOptionChoice>
      <SearchingFilterOptionChoiceDesc>
        {elem[0]}
      </SearchingFilterOptionChoiceDesc>
      <SearchingFilterOptionChoiceCheckbox
        className="block-center"
        isChosen={chosenType === elem[1]}
        onClick={() => setChosenType(chosenType === elem[1] ? "" : elem[1])}
      />

    </SearchingFilterOptionChoice>
  )), [types]);

  const coursesSemestersList:(JSX.Element | null)[] = useMemo(() => semesters.map((elem: number) => chosenDegree === "BACHELOR" && elem > 4 ? null : (
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
  )), [semesters]);
    
  return (
    <>
      <SearchingFiltersHeader className="block-center">
        Filtry
      </SearchingFiltersHeader>
      <SearchingFiltersOptionWrapper
        className="block-center"
        isOpened={openedFilters[3]}
        elementsNumber={degrees.length + 1}
      >
        <SearchingFilterOptionChoice isInterfaceButton onClick={() => setOpenedFilters([openedFilters[0], openedFilters[1], openedFilters[2], !openedFilters[3], openedFilters[4]])}>
          <SearchingFilterOptionLabel>
            Według stopnia
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!openedFilters[3] ? (
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
        {coursesDegreesList}
      </SearchingFiltersOptionWrapper>
      <SearchingFiltersOptionWrapper
        className="block-center"
        isOpened={openedFilters[0]}
        elementsNumber={programmesList.length + 1}
      >
        <SearchingFilterOptionChoice isInterfaceButton onClick={() => setOpenedFilters([!openedFilters[0], openedFilters[1], openedFilters[2], openedFilters[3], openedFilters[4]])}>
          <SearchingFilterOptionLabel>
            Według kierunku
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!openedFilters[0] ? (
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
        <SearchingFilterOptionChoice isInterfaceButton onClick={() => setOpenedFilters([openedFilters[0], openedFilters[1], !openedFilters[2], openedFilters[3], openedFilters[4]])}>
          <SearchingFilterOptionLabel>
            Według semestru
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!openedFilters[2] ? (
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
        {coursesSemestersList}
      </SearchingFiltersOptionWrapper>
      <SearchingFiltersOptionWrapper
        className="block-center"
        isOpened={openedFilters[1]}
        elementsNumber={coursesList.filter((elem: any) => elem.semester === chosenSemester).length + 1}
      >
        <SearchingFilterOptionChoice
          isInterfaceButton 
          onClick={() => setOpenedFilters([openedFilters[0], coursesList.length > 0 && chosenSemester > 0 ? !openedFilters[1] : openedFilters[1], 
            openedFilters[2], openedFilters[3], openedFilters[4]])}
        >
          <SearchingFilterOptionLabel>
            Według kursu
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!openedFilters[1] ? (
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
      <SearchingFiltersOptionWrapper
        className="block-center"
        isOpened={openedFilters[4]}
        elementsNumber={types.length + 1}
      >
        <SearchingFilterOptionChoice isInterfaceButton onClick={() => setOpenedFilters([openedFilters[0], openedFilters[1], openedFilters[2], openedFilters[3], !openedFilters[4]])}>
          <SearchingFilterOptionLabel>
            Według typu przedmiotu
          </SearchingFilterOptionLabel>
          <SearchingFilterOptionOpenBtn>
            {!openedFilters[4] ? (
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
        {coursesTypesList}
      </SearchingFiltersOptionWrapper>
    </>
  );
};

export default SearcherFiltersMain;
