import React, { useState, useEffect, Suspense } from "react";
import useLocalStorage from "use-local-storage";
import { Link, useParams, useNavigate } from "react-router-dom";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import { AboutHeader } from "../../styled/subpages/about";
import { SearchingResultsSection } from "../../styled/subpages/searcher";
import { SearchingNoResultsContainer } from "../../styled/subpages/searcher/searcherResults";
import { SearcherFailureContainer, SearcherFailureHeader, SearcherFailureButton } from "../../styled/subpages/searcher/searcherFailure";
import { SearcherBarInputContainer, SearcherInput, SearcherButton } from "../../styled/subpages/searcher/searcherBar";

import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

import getUniversitiesInfrastructure from "../../connectionFunctions/searcher/getUniversitiesInfrastructure";
import getProgrammeOrFacultyInfrastructure from "../../connectionFunctions/searcher/getProgrammeOrFacultyInfrastructure";
import submitTheQuery from "../../connectionFunctions/searcher/submitTheQuery";

import checkIfFound from "../auxiliaryFunctions/searcher/checkIfFound";

const SearchBarComponent = React.lazy(() => import("../helperComponents/searcher/searchBarComponent"));
const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));
const SearchingMainResultComponent = React.lazy(() => import("../helperComponents/searcher/searchingMainResultComponent"));
const BackgroundPattern = require("../../assets/pattern_background5.webp");

const Searcher:React.FC = () => {
  const [isLoaded, toggleIsLoaded] = useState<boolean>(false);

  const [universitiesList, setUniversitiesList] = useState<any[]>([]);
  const [facultiesList, setFacultiesList] = useState<any[]>([]);
  const [programmesList, setProgrammesList] = useState<any[]>([]);

  const [searcherState, setSearcherState] = useState<number>(0); // 0 - nothing searched yet, 1 - search in progress, 2 - search results
  const [searchedUniversity, setSearchedUniversity] = useState<string>("");
  const [searchedFaculty, setSearchedFaculty] = useState<string>("");
  const [searchedProgramme, setSearchedProgramme] = useState<string>("");
  const [searchedSemester, setSearchedSemester] = useState<number>(0); // 0 - nothing chosen
  const [searchedCourse, setSearchedCourse] = useState<string>("");
  const [searchedPhrase, setSearchedPhrase] = useState<string>("");
  const [searchedResults, setSearchedResults] = useState<any[]>([]);

  const [previouslySearchedUni, setPreviouslySearchedUni] = useLocalStorage<string>("uni", "");
  const [previouslySearchedFac, setPreviouslySearchedFac] = useLocalStorage<string>("fac", "");
    
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    toggleIsLoaded(false);
    if (courseId !== undefined && courseId.length > 0) {
      submitTheQuery(
        searchedUniversity, 
        searchedFaculty, 
        searchedProgramme,
        searchedCourse, 
        programmesList, 
        courseId,
        setSearcherState, 
        setSearchedResults, 
        setSearchedPhrase,
      ); 
      toggleIsLoaded(true);
    } else {
      getUniversitiesInfrastructure(
        setUniversitiesList, 
        previouslySearchedUni, 
        previouslySearchedFac,
        setSearchedUniversity, 
        setSearchedFaculty, 
        setPreviouslySearchedFac, 
        toggleIsLoaded,
        setSearcherState,
      );
    }
  }, [courseId]);

  useEffect(() => {
    if (searchedFaculty.length > 0) {
      getProgrammeOrFacultyInfrastructure(
        universitiesList, 
        setFacultiesList, 
        searchedFaculty,
        "faculties", 
        setSearcherState, 
        searchedUniversity,
      );
    } 
  }, [searchedFaculty]);

  useEffect(() => {
    if (searchedProgramme.length > 0) {
      getProgrammeOrFacultyInfrastructure(
        facultiesList, 
        setProgrammesList, 
        searchedProgramme,
        "programmes", 
        setSearcherState,
      );
    }
  }, [searchedProgramme]);

  useEffect(() => {
    if (searchedCourse.length > 0) navigate(`/searcher/${programmesList.filter((elem:any) => elem.name === searchedCourse)[0]._id}`);
    // submitTheQuery();
  }, [searchedCourse]);

  const getBackToSearch = () => {
    setSearchedCourse("");
    setSearchedPhrase("");
    setSearchedProgramme("");
    setSearchedSemester(0);
    setSearchedResults([]);
    setSearcherState(0);
    navigate("/searcher/");
  };

  useEffect(() => {
    if (searchedResults.length > 0) {
      const operand = [...searchedResults];
      if (searchedPhrase.length === 0) operand.map((elem:any) => { elem.isDisplayed = 1; return elem; });
      else {
        operand.map((elem:any) => {
          elem.isDisplayed = checkIfFound(elem, searchedPhrase) ? 1 : 0;
          return elem;
        });
      }
      setSearchedResults(operand);
    }
  }, [searchedPhrase]);

  return (
    <MainContainer className="block-center">
      <LandingSectionWrapper
        className="block-center"
        source={BackgroundPattern}
        backgroundSize="initial"
        backgroundRepeat="repeat"
      >
        <LandingSectionFilter>
          <AboutHeader className="block-center">
            {searcherState === 2 ? "Wyniki wyszukiwania" : searcherState === 1 ? "Ładowanie..." : "Wyszukiwarka"}    
          </AboutHeader>
          {!isLoaded ? <SearchingPreloaderComponent /> : searcherState === 0 ? (
            <Suspense fallback={null}>
              <SearchBarComponent 
                universities={universitiesList}
                faculties={facultiesList}
                programmes={programmesList}
                searchedUniversity={searchedUniversity}
                setSearchedUniversity={(newUni:string) => {
                  setSearchedUniversity(newUni);
                  setPreviouslySearchedUni(newUni === "" ? undefined : newUni);
                  if (newUni === "") setPreviouslySearchedFac(undefined);
                }}
                searchedFaculty={searchedFaculty}
                setSearchedFaculty={(newFac: string) => {
                  setSearchedFaculty(newFac);
                  if (previouslySearchedUni !== undefined 
                    && previouslySearchedUni.length > 0 
                    && searchedUniversity.length > 0) setPreviouslySearchedFac(newFac === "" ? undefined : newFac);
                }}
                searchedProgramme={searchedProgramme} 
                setSearchedProgramme={setSearchedProgramme}
                searchedSemester={searchedSemester}
                setSearchedSemester={setSearchedSemester}
                searchedCourse={searchedCourse} 
                setSearchedCourse={setSearchedCourse}
              />
            </Suspense>
          ) 
            : searcherState === 1 ? <SearchingPreloaderComponent /> : searcherState === 2 ? (
              <SearchingResultsSection className="block-center">
                <SearcherBarInputContainer className="block-center">
                  <SearcherInput
                    type="text"
                    placeholder="Czego szukamy?"
                    value={searchedPhrase} 
                    onChange={(e) => setSearchedPhrase(e.target.value)}
                    className="block-center"
                  />
                </SearcherBarInputContainer>
                <SearcherButton className="block-center" onClick={() => getBackToSearch()}>
                  Wróć do wyszukiwania
                </SearcherButton>
                {
                    searchedResults.filter((elem:any) => elem.isDisplayed === 1).length === 0
                      ? (
                        <SearchingNoResultsContainer className="block-center">
                          Brak wyników. Spróbuj innych słów kluczowych
                        </SearchingNoResultsContainer>
                      )
                      : searchedResults.map((elem, ind) => elem.isDisplayed === 0 ? <div key="search-result" /> : (
                        <Suspense
                          fallback={null}
                          key="search-result-container"
                        >
                          <Link to={`/document/${elem._id}`}>
                            <SearchingMainResultComponent
                              title={elem.title}
                              publishedOn={elem.createdDate}
                              publisher={elem.creatorEmail}
                              description={elem.description}
                              likesNum={elem.likesNum}
                              viewsNum={elem.viewsNum}
                              animAlign={ind % 2 === 0 ? -10 : 10}
                            />
                          </Link>
                        </Suspense>
                      ))
}
              </SearchingResultsSection>
            ) : (
              <SearcherFailureContainer className="block-center">
                <SearcherFailureHeader className="block-center">
                  Niestety, coś poszło nie tak i połączenie z serwerem nie zakończyło się pomyślnie
                </SearcherFailureHeader>
                <SearcherFailureButton
                  className="block-center"
                  onClick={() => { setSearcherState(0); setSearchedProgramme(""); navigate("/searcher/"); }}
                >
                  Powrót do wyszukiwania
                </SearcherFailureButton>
              </SearcherFailureContainer>
            )}
        </LandingSectionFilter>    
      </LandingSectionWrapper>
      <Suspense fallback={null}>
        <FooterComponent />
      </Suspense>
    </MainContainer>
  );
};

export default Searcher;
