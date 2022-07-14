import React, { useState, useEffect } from "react";
import SwipeLeftAltIcon from "@mui/icons-material/SwipeLeftAlt";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";

import {
  SearcherCategoriesSubContainer, SearcherCategoriesContainer, GoToSearchBarBtn, 
  SearcherBar, 
} from "../../../styled/subpages/searcher/searcherBar";

import SearchBarOptionsComponent from "./searchBarOptionsComponent";

interface SearchBarComponentInterface {
  universities: any[],
  faculties: any[],
  programmes: any[],
  searchedUniversity: string,
  setSearchedUniversity: (newUniversity: string) => void,
  searchedFaculty: string,
  setSearchedFaculty: (newFaculty: string) => void,
  searchedProgramme: string,
  setSearchedProgramme: (newProgramme: string) => void,
  searchedSemester: number,
  setSearchedSemester: (newSemester: number) => void,
  searchedCourse: string,
  setSearchedCourse: (newCourse: string) => void,
  submitCallback?: () => void,
  isBiggerScale?: boolean
}

const SearchBarComponent:React.FC<SearchBarComponentInterface> = ({
  universities, faculties, programmes, 
  searchedUniversity, setSearchedUniversity, searchedFaculty, setSearchedFaculty,
  searchedProgramme, setSearchedProgramme, searchedSemester, setSearchedSemester,
  searchedCourse, setSearchedCourse, submitCallback,
  isBiggerScale, 
}:SearchBarComponentInterface) => {
  const [phase, setPhase] = useState<number>(1); // 1 - research data, 2 - string data
  const [paramsPhase, setParamsPhase] = useState<number>(0); // 0 - university, 1 - faculty, 2 - main searcher
  const [isUniversityOpened, toggleIsUniversityOpened] = useState<boolean>(false);
  const [isFacultyOpened, toggleIsFacultyOpened] = useState<boolean>(false);
  const [isProgrammeOpened, toggleIsProgrammeOpened] = useState<boolean>(false);
  const [isSemesterOpened, toggleIsSemesterOpened] = useState<boolean>(false);
  const [isCourseOpened, toggleIsCourseOpened] = useState<boolean>(false);

  const [helperSemesterArray, setHelperSemesterArray] = useState<string[]>([]);

  const universityCallback = (uniName: string) => {
    searchedUniversity === uniName ? setSearchedUniversity("") : setSearchedUniversity(uniName);
    toggleIsUniversityOpened(false);
  };

  const facultyCallback = (facName: string) => {
    searchedFaculty === facName ? setSearchedFaculty("") : setSearchedFaculty(facName);
    toggleIsFacultyOpened(false);
  };

  const generateTheArrayForSemesters = () :string[] => {
    if (searchedProgramme === "" || programmes.length === 0) return [];
    const final:string[] = [];
    for (let i = 0; i < programmes[programmes.length - 1].semester; i++) final.push(`Semestr ${i + 1}`);
    return final;
  };

  useEffect(() => {
    if (searchedUniversity.toString() === "") {
      setSearchedFaculty("");
      setParamsPhase(0);
    } else setParamsPhase(1); 
  }, [searchedUniversity]);
  useEffect(() => { if (searchedFaculty === "") setSearchedProgramme(""); }, [searchedFaculty]);
  useEffect(() => {
    if (searchedProgramme === "") { 
      setSearchedSemester(0); 
      setParamsPhase(0);
    } else {
      setHelperSemesterArray(generateTheArrayForSemesters());
      setParamsPhase(1);
    }
  }, [searchedProgramme]);
  useEffect(() => { if (searchedSemester === 0) { setSearchedCourse(""); toggleIsCourseOpened(false); } }, [searchedSemester]);

  useEffect(() => {
    setHelperSemesterArray(generateTheArrayForSemesters());
  }, [programmes]);

  return (
    <SearcherBar className="block-center">
      {
            phase === 1 ? (
              <>
                <SearcherCategoriesContainer className="block-center">
                  {
                    paramsPhase === 0 
                      ? (
                        <SearcherCategoriesSubContainer>
                          <SearchBarOptionsComponent 
                            options={universities.map((elem: any) => elem.name)}
                            choiceCallback={universityCallback}
                            isBiggerScale={isBiggerScale !== undefined ? isBiggerScale : false}
                          />
                        </SearcherCategoriesSubContainer>
                      ) 
                      : (
                        <SearcherCategoriesSubContainer>
                          <SearchBarOptionsComponent 
                            options={faculties.map((elem: any) => elem.name)}
                            choiceCallback={facultyCallback}
                            isBiggerScale={isBiggerScale !== undefined ? isBiggerScale : false}
                          />
                        </SearcherCategoriesSubContainer>
                      )
                  }              
                    
                </SearcherCategoriesContainer>
                {
                    searchedUniversity.length > 0 && searchedFaculty.length > 0 && searchedProgramme.length > 0 && paramsPhase === 1
                      ? (
                        <GoToSearchBarBtn className="block-center" onClick={() => setSearchedProgramme("")}>
                          <SwipeLeftAltIcon style={{ color: "inherit", fontSize: "2em" }} />
                        </GoToSearchBarBtn>
                      ) : null
                }
                {searchedUniversity.length > 0 && searchedFaculty.length > 0 && searchedProgramme.length > 0 
                && searchedSemester > 0 && searchedCourse.length > 0 && submitCallback !== undefined 
                  ? (
                    <GoToSearchBarBtn className="block-center" onClick={() => { setPhase(2); submitCallback(); }}>
                      <SwipeRightAltIcon style={{ color: "inherit", fontSize: "2em" }} />
                    </GoToSearchBarBtn>
                  ) : null}
              </>
            ) : null
        }
    </SearcherBar>
  );
};

SearchBarComponent.defaultProps = {
  submitCallback: () => {},
  isBiggerScale: false,
};

export default SearchBarComponent;
