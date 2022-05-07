import React, {useState, useEffect} from "react";
import SearchIcon from '@mui/icons-material/Search';

import { SearcherCategoriesSubContainer, SearcherCategoriesContainer, GoToSearchBarBtn, 
    SearcherBar, SearcherInput, SearcherButton } from "../../../styled/subpages/searcher/searcherBar";

import SearchBarOptionsComponent from "./searchBarOptionsComponent";

interface SearchBarComponentInterface{
    universities: any[],
    faculties: any[],
    searchedUniversity: string,
    setSearchedUniversity: (newUniversity: string) => void,
    searchedFaculty: string,
    setSearchedFaculty: (newFaculty: string) => void,
    searchedProgramme: string,
    setSearchedProgramme: (newProgramme: string) => void,
    searchedSemester: string,
    setSearchedSemester: (newSemester: string) => void,
    searchedCourse: string,
    setSearchedCourse: (newCourse: string) => void,
    searchedPhrase: string,
    setSearchedPhrase: (newPhrase: string) => void,
    submitCallback: () => void
}

const SearchBarComponent:React.FC<SearchBarComponentInterface> = 
    ({universities, faculties, searchedUniversity, setSearchedUniversity, searchedFaculty, setSearchedFaculty,
        searchedProgramme, setSearchedProgramme, searchedSemester, setSearchedSemester,
        searchedCourse, setSearchedCourse,
        searchedPhrase, submitCallback, setSearchedPhrase}:SearchBarComponentInterface) => {

    const [phase, setPhase] = useState<number>(1); // 1 - research data, 2 - string data
    const [paramsPhase, setParamsPhase] = useState<number>(0); // 0 - university, fauculty and programme, 1 - semester, course
    const [isUniversityOpened, toggleIsUniversityOpened] = useState<boolean>(false);
    const [isFacultyOpened, toggleIsFacultyOpened] = useState<boolean>(false);
    const [isProgrammeOpened, toggleIsProgrammeOpened] = useState<boolean>(false);
    const [isSemesterOpened, toggleIsSemesterOpened] = useState<boolean>(false);
    const [isCourseOpened, toggleIsCourseOpened] = useState<boolean>(false);

    const universityCallback = (uniName: string) => {
        searchedUniversity === uniName ? setSearchedUniversity("") : setSearchedUniversity(uniName);
        toggleIsUniversityOpened(false);
    }

    const facultyCallback = (facName: string) => {
        searchedFaculty === facName ? setSearchedFaculty("") : setSearchedFaculty(facName);
        toggleIsFacultyOpened(false);
    }

    const programmeCallback = (proName: string) => {
        searchedProgramme === proName ? setSearchedProgramme("") : setSearchedProgramme(proName);
        toggleIsProgrammeOpened(false);
    }

    const semesterCallback = (semName: string) => {
        searchedSemester === semName ? setSearchedSemester("") : setSearchedSemester(semName);
        toggleIsSemesterOpened(false);
    }

    const courseCallback = (corName: string) => {
        searchedCourse === corName ? setSearchedCourse("") : setSearchedCourse(corName);
        toggleIsCourseOpened(false);
    }

    useEffect(() => {if(searchedUniversity === "") setSearchedFaculty("")}, [searchedUniversity])
    useEffect(() => {if(searchedFaculty === "") setSearchedProgramme("")}, [searchedFaculty])
    useEffect(() => {
        if(searchedProgramme === "") { 
            setSearchedSemester(""); 
            setParamsPhase(0);
        } else setParamsPhase(1)
    }, [searchedProgramme])
    useEffect(() => {if(searchedSemester === "") setSearchedCourse("")}, [searchedSemester]);

    return <SearcherBar className="block-center">
        {
            phase === 1 ? <><SearcherCategoriesContainer className="block-center">
                
                    <SearcherCategoriesSubContainer isOpened={paramsPhase === 0 ? true : false}>
                    <SearchBarOptionsComponent 
                        sectionHeader= {searchedUniversity.length === 0 ? "Uczelnia" : searchedUniversity}
                        options={universities.map((elem: any) => elem["name"])}
                        toggleOpening={toggleIsUniversityOpened}
                        opening={isUniversityOpened}
                        choiceCallback={universityCallback}/>

                    <SearchBarOptionsComponent 
                        sectionHeader= {searchedFaculty.length === 0 ? "Wydział" : searchedFaculty}
                        options={searchedUniversity.length === 0 ? [] : universities.filter((elem:any) => elem["name"] !== undefined && elem["name"] === searchedUniversity)
                            [0]["faculties"].map((elem: any) => elem["name"])}
                        toggleOpening={(newOpeningState: boolean) => { if(searchedUniversity.length > 0 ) toggleIsFacultyOpened(newOpeningState)}}
                        opening={isFacultyOpened}
                        choiceCallback={facultyCallback}/>

                    <SearchBarOptionsComponent 
                        sectionHeader= {searchedProgramme.length === 0 ? "Kierunek" : searchedProgramme}
                        options={searchedFaculty.length === 0 ? [] : faculties.map((elem: any) => elem["name"])}
                        toggleOpening={(newOpeningState: boolean) => { if(searchedFaculty.length > 0 ) toggleIsProgrammeOpened(newOpeningState)}}
                        opening={isProgrammeOpened}
                        choiceCallback={programmeCallback}/></SearcherCategoriesSubContainer>
                    
                    <SearcherCategoriesSubContainer isOpened={paramsPhase === 1 ? true : false}>
                    <SearchBarOptionsComponent 
                        sectionHeader= {searchedSemester.length === 0 ? "Semestr" : searchedSemester}
                        options={["Semestr 1", "Semestr 2", "Semestr 3"]}
                        toggleOpening={(newOpeningState: boolean) => { if(searchedProgramme.length > 0 ) toggleIsSemesterOpened(newOpeningState)}}
                        opening={isSemesterOpened}
                        choiceCallback={semesterCallback}/>

                    <SearchBarOptionsComponent 
                        sectionHeader= {searchedCourse.length === 0 ? "Przedmiot" : searchedCourse}
                        options={["Programming 1", "Programming 2", "Discrete Maths"]}
                        toggleOpening={(newOpeningState: boolean) => { if(searchedSemester.length > 0 ) toggleIsCourseOpened(newOpeningState)}}
                        opening={isCourseOpened}
                        choiceCallback={courseCallback}/></SearcherCategoriesSubContainer>
                
                    

                    
                </SearcherCategoriesContainer>
                {
                    searchedUniversity.length > 0 && searchedFaculty.length > 0 && searchedProgramme.length > 0 && paramsPhase === 1 ?
                    <GoToSearchBarBtn className="block-center" onClick={() => setSearchedProgramme("")}>
                        Wróć
                    </GoToSearchBarBtn> : <></>
                }
                {searchedUniversity.length > 0 && searchedFaculty.length > 0 && searchedProgramme.length > 0 && 
                searchedSemester.length > 0 && searchedCourse.length > 0 ? 
                    <GoToSearchBarBtn className="block-center" onClick={() => setPhase(2)}>
                        Dalej
                    </GoToSearchBarBtn>: <></>}
            </> : <>
                <SearcherInput type="text" placeholder="Czego szukamy?" value={searchedPhrase} 
                    onChange={(e) => setSearchedPhrase(e.target.value)}/>   
                <SearcherButton type="button" onClick={() => submitCallback()}>
                    <SearchIcon style={{color: "inherit", fontSize: "1.9em"}}/>    
                </SearcherButton>
            </>
        }
    </SearcherBar>
}

export default SearchBarComponent;