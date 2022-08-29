/* 

    The searchingParametersPicker components is used to choose the university, faculty, programme and course of a document that
    a user wants to upload

*/

import React, { useState } from "react";

import {
  SearchingFiltersHeader, 
  SearchingFiltersUploadWrapper, 
} from "src/styled/subpages/searcher/searcherFilters";

import SearcherFiltersCategory from "../searcher/filters/searcherFiltersCategory";

interface SearchingParametersPickerInterface {
  universitiesList: any[],
  chosenUniversity: string,
  setChosenUniversity: (newState: string) => void,
  facultiesList: any[],
  chosenFaculty: string,
  setChosenFaculty: (newState: string) => void,
  chosenTypeOfStudies: string,
  setChosenTypeOfStudies: (newState: string) => void,  
  programmesList: any[],
  chosenProgramme: string,
  setChosenProgramme: (newState: string) => void,
  coursesList: any[],
  chosenCourse: string,
  setChosenCourse: (newState: string) => void,
  chosenTypeOfSubject: string,
  setChosenTypeOfSubject: (newState: string) => void,
  chosenSemester: number,
  setChosenSemester: (newState: number) => void,
}

const SearchingParametersPicker:React.FC<SearchingParametersPickerInterface> = ({
  universitiesList,
  chosenUniversity,
  setChosenUniversity, 
  facultiesList,
  chosenFaculty,
  setChosenFaculty,
  chosenTypeOfStudies,
  setChosenTypeOfStudies,
  programmesList,
  chosenProgramme,
  setChosenProgramme,
  coursesList,
  chosenCourse,
  setChosenCourse,
  chosenTypeOfSubject,
  setChosenTypeOfSubject,
  chosenSemester,
  setChosenSemester,
}:SearchingParametersPickerInterface) => {
  const [isUniversityOpened, toggleIsUniversityOpened] = useState<boolean>(false);
  const [isFacultyOpened, toggleIsFacultyOpened] = useState<boolean>(false);
  const [isTypeOpened, toggleIsTypeOpened] = useState<boolean>(false);
  const [isProgrammeOpened, toggleIsProgrammeOpened] = useState<boolean>(false);
  const [isCourseOpened, toggleIsCourseOpened] = useState<boolean>(false);
  const [isTypeOfSubjectOpened, toggleIsTypeOfSubjectOpened] = useState<boolean>(false);
  const [isSemesterOpened, toggleIsSemesterOpened] = useState<boolean>(false);

  const semesters:number[] = [1, 2, 3, 4, 5, 6, 7];
  const typesOfStudies:[string, string][] = [["inżynierskie", "BACHELOR"], ["magisterskie", "MASTER"], ["doktorskie", "PHD"]];
  const typesOfSubject:[string, string][] = [["obligatoryjne", "OBLIGATORY"], ["obieralne", "FACULTATIVE"]];

  return (
    <SearchingFiltersUploadWrapper className="block-center">
      <SearchingFiltersHeader className="block-center">
        Dopasuj kategorię
      </SearchingFiltersHeader>
      <SearcherFiltersCategory 
        header="Uczelnia"   
        isFullyOpened={isUniversityOpened}
        isChoosingOpened={isUniversityOpened}
        elementsNumber={universitiesList.length + 1}
        openingFunction={toggleIsUniversityOpened}
        listToMap={universitiesList.map((elem) => { const newElem:[string, string] = [elem.name, elem.id]; return newElem; })}
        chosenOption={chosenUniversity}
        setChosenOption={setChosenUniversity}
      />
      <SearcherFiltersCategory 
        header="Wydział"   
        isFullyOpened={isFacultyOpened && chosenUniversity.toString().length > 0}
        isChoosingOpened={isFacultyOpened}
        elementsNumber={facultiesList.length + 1}
        openingFunction={toggleIsFacultyOpened}
        listToMap={facultiesList.map((elem) => { const newElem:[string, string] = [elem.name, elem.id]; return newElem; })}
        chosenOption={chosenFaculty}
        setChosenOption={setChosenFaculty}
      />
      <SearcherFiltersCategory 
        header="Typ studiów"   
        isFullyOpened={isTypeOpened && chosenFaculty.toString().length > 0 && chosenUniversity.toString().length > 0}
        isChoosingOpened={isTypeOpened}
        elementsNumber={typesOfStudies.length + 1}
        openingFunction={toggleIsTypeOpened}
        listToMap={typesOfStudies}
        chosenOption={chosenTypeOfStudies}
        setChosenOption={setChosenTypeOfStudies}
      />
      <SearcherFiltersCategory 
        header="Kierunek"   
        isFullyOpened={isProgrammeOpened && chosenTypeOfStudies.length > 0}
        isChoosingOpened={isProgrammeOpened}
        elementsNumber={programmesList.length + 1}
        openingFunction={toggleIsProgrammeOpened}
        listToMap={programmesList.map((elem: any) => { const newElem:[string, string] = [elem.name, elem.id]; return newElem; })}
        chosenOption={chosenProgramme}
        setChosenOption={setChosenProgramme}
      />
      <SearcherFiltersCategory 
        header="Typ przedmiotu"   
        isFullyOpened={isTypeOfSubjectOpened && chosenProgramme.toString().length > 0}
        isChoosingOpened={isTypeOfSubjectOpened}
        elementsNumber={typesOfSubject.length + 1}
        openingFunction={toggleIsTypeOfSubjectOpened}
        listToMap={typesOfSubject}
        chosenOption={chosenTypeOfSubject}
        setChosenOption={setChosenTypeOfSubject}
      />
      <SearcherFiltersCategory 
        header="Semestr"   
        isFullyOpened={isSemesterOpened && chosenTypeOfSubject.length > 0}
        isChoosingOpened={isSemesterOpened}
        elementsNumber={semesters.length + 1}
        openingFunction={toggleIsSemesterOpened}
        listToMap={semesters.map((elem) => { const newElem: [string, string] = [`Semester ${elem.toString()}`, elem.toString()]; return newElem; })}
        chosenOption={chosenSemester.toString()}
        setChosenOption={(newState: string) => setChosenSemester(parseInt(newState, 10))}
      />
      <SearcherFiltersCategory 
        header="Kurs"   
        isFullyOpened={isCourseOpened && chosenSemester > 0}
        isChoosingOpened={isCourseOpened}
        elementsNumber={coursesList.length + 1}
        openingFunction={toggleIsCourseOpened}
        listToMap={coursesList.filter((elem: any) => elem.courseType === chosenTypeOfSubject && elem.semester === chosenSemester)
          .map((elem: any) => { const newElem:[string, string] = [elem.name, elem.id]; return newElem; })}
        chosenOption={chosenCourse}
        setChosenOption={setChosenCourse}
      />
    </SearchingFiltersUploadWrapper>
  );
};

export default SearchingParametersPicker;
