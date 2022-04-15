import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

import { SearcherCategoriesContainer, GoToSearchBarBtn, 
    SearcherBar, SearcherInput, SearcherButton } from "../../../styled/subpages/searcher";

import SearchBarOptionsComponent from "./searchBarOptionsComponent";

interface SearchBarComponentInterface{
    searchedUniversity: string,
    setSearchedUniversity: (newUniversity: string) => void,
    searchedFaculty: string,
    setSearchedFaculty: (newFaculty: string) => void,
    searchedProgramme: string,
    setSearchedProgramme: (newProgramme: string) => void,
    searchedCourse: string,
    setSearchedCourse: (newCourse: string) => void,
    searchedPhrase: string,
    setSearchedPhrase: (newPhrase: string) => void,
    submitCallback: () => void
}

const SearchBarComponent:React.FC<SearchBarComponentInterface> = 
    ({searchedUniversity, setSearchedUniversity, searchedFaculty, setSearchedFaculty,
        searchedProgramme, setSearchedProgramme, searchedCourse, setSearchedCourse,
        searchedPhrase, submitCallback, setSearchedPhrase}:SearchBarComponentInterface) => {

    const [phase, setPhase] = useState<number>(1); // 1 - research data, 2 - string data
    const [isUniversityOpened, toggleIsUniversityOpened] = useState<boolean>(false);
    const [isFacultyOpened, toggleIsFacultyOpened] = useState<boolean>(false);
    const [isProgrammeOpened, toggleIsProgrammeOpened] = useState<boolean>(false);
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

    const courseCallback = (corName: string) => {
        searchedCourse === corName ? setSearchedCourse("") : setSearchedCourse(corName);
        toggleIsCourseOpened(false);
    }

    return <SearcherBar className="block-center">
        {
            phase === 1 ? <><SearcherCategoriesContainer className="block-center">
                    <SearchBarOptionsComponent 
                        sectionHeader= {searchedUniversity.length === 0 ? "Uczelnia" : searchedUniversity}
                        options={["Politechnika Warszawska"]}
                        toggleOpening={toggleIsUniversityOpened}
                        opening={isUniversityOpened}
                        choiceCallback={universityCallback}/>

                    <SearchBarOptionsComponent 
                        sectionHeader= {searchedFaculty.length === 0 ? "Wydział" : searchedFaculty}
                        options={["MiNI"]}
                        toggleOpening={toggleIsFacultyOpened}
                        opening={isFacultyOpened}
                        choiceCallback={facultyCallback}/>

                    <SearchBarOptionsComponent 
                        sectionHeader= {searchedProgramme.length === 0 ? "Kierunek" : searchedProgramme}
                        options={["Computer Science"]}
                        toggleOpening={toggleIsProgrammeOpened}
                        opening={isProgrammeOpened}
                        choiceCallback={programmeCallback}/>

                    <SearchBarOptionsComponent 
                        sectionHeader= {searchedCourse.length === 0 ? "Przedmiot" : searchedCourse}
                        options={["Programming 1", "Programming 2", "Discrete Maths"]}
                        toggleOpening={toggleIsCourseOpened}
                        opening={isCourseOpened}
                        choiceCallback={courseCallback}/>
                </SearcherCategoriesContainer><GoToSearchBarBtn className="block-center" onClick={() => setPhase(2)}>
                        Continue
                    </GoToSearchBarBtn>
                {searchedUniversity.length > 0 && searchedFaculty.length > 0 && searchedProgramme.length > 0 && searchedCourse.length > 0 ? 
                    <GoToSearchBarBtn className="block-center" onClick={() => setPhase(2)}>
                        Continue
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