import React, {
  useState, useEffect, Suspense, 
} from "react";
import useLocalStorage from "use-local-storage";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import { AboutHeader } from "src/styled/subpages/about";
import { SearchingResultsSection } from "src/styled/subpages/searcher";
import {
  SearchingResultsWrapper, SearchingNoResultsContainer, SearchingResultsOpenFiltersBtn,
} from "src/styled/subpages/searcher/searcherResults";
import { SearcherFailureContainer, SearcherFailureHeader, SearcherFailureButton } from "src/styled/subpages/searcher/searcherFailure";
import { SearcherBarInputContainer, SearcherInput } from "src/styled/subpages/searcher/searcherBar";

import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";
import SearcherFilters from "src/components/helperComponents/searcher/searcherFilters";

import getUniversitiesInfrastructure from "src/connectionFunctions/searcher/getUniversitiesInfrastructure";
import getUniversitySubInfrastructure from "src/connectionFunctions/searcher/getUniversitySubInfrastructure";
import submitTheQuery from "src/connectionFunctions/searcher/submitTheQuery";

import Template from "src/components/subcomponents/template";
import checkIfFound from "src/components/auxiliaryFunctions/searcher/checkIfFound";
import SearchingMainResultComponent from "src/components/helperComponents/searcher/searchingMainResultComponent";
import SearcherPagingComponent from "src/components/helperComponents/searcher/searcherPagingComponent";
import DisplayList from "src/components/helperComponents/searcher/searchingResultsLazyLoading";

const SearchBarComponent = React.lazy(() => import("../helperComponents/searcher/searchBarComponent"));

const Searcher:React.FC = () => {
  const NUMBER_OF_MATERIALS_PER_PAGE:number = 10;
  const isBiggerThanTablet:boolean = useMediaQuery("(min-width: 768px)");
  const [listWidth, setListWidth] = useState<number>(0);

  const [isLoaded, toggleIsLoaded] = useState<boolean>(false);
  const [areDocumentsLoaded, toggleAreDocumentsLoaded] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const [universitiesList, setUniversitiesList] = useState<any[]>([]);
  const [facultiesList, setFacultiesList] = useState<any[]>([]);
  const [programmesList, setProgrammesList] = useState<any[]>([]);
  const [coursesList, setCoursesList] = useState<any[]>([]);

  const [searcherState, setSearcherState] = useState<number>(0); // 0 - nothing searched yet, 1 - search in progress, 2 - search results
  const [searchedUniversity, setSearchedUniversity] = useState<string>("");
  const [searchedFaculty, setSearchedFaculty] = useState<string>("");
  const [searchedProgramme, setSearchedProgramme] = useState<string>("");
  const [searchedSemester, setSearchedSemester] = useState<number>(0); // 0 - nothing chosen
  const [searchedCourse, setSearchedCourse] = useState<string>("");
  const [searchedDegree, setSearchedDegree] = useState<string>("");
  const [searchedType, setSearchedType] = useState<string>("");
  const [searchedPhrase, setSearchedPhrase] = useState<string>("");
  const [searchedResults, setSearchedResults] = useState<any[]>([]);
  const [currentSearchedResultsPage, setCurrentSearchedResultsPage] = useState<number>(0);
  const [areFiltersOn, toggleAreFiltersOn] = useState<boolean>(false);
  const [openedFilters, setOpenedFilters] = useState<boolean[]>([false, false, false, false, false]); // 0 - course, 1 - programme, 2 - semester, 3 - degree, 4 - course type

  const [chosenSort, setChosenSort] = useState<string>("viewsNumber");
  const [chosenSortOrder, setChosenSortOrder] = useState<string>("desc");

  const [previouslySearchedUni, setPreviouslySearchedUni] = useLocalStorage<string>("uni", "");
  const [previouslySearchedFac, setPreviouslySearchedFac] = useLocalStorage<string>("fac", "");
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "", { syncData: true });
    
  const { courseId } = useParams();
  const navigate = useNavigate();

  const windowResizing = ():void => {
    setListWidth(window.innerWidth - 50);
  };

  const goBackToTheBeginning = () => {
    setPreviouslySearchedFac(undefined); 
    setPreviouslySearchedUni(undefined); 
    setSearchedUniversity("");
    setSearchedFaculty("");
    setSearchedProgramme("");
    setSearchedCourse("");
    setSearchedDegree("");
    setSearchedPhrase("");
    setSearchedResults([]);
    setSearchedSemester(0);
    setSearcherState(0); 
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
  };

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(navigator.onLine));
    window.addEventListener("offline", () => setIsOnline(navigator.onLine));

    return () => {
      window.removeEventListener("online", () => setIsOnline(navigator.onLine));
      window.removeEventListener("offline", () => setIsOnline(navigator.onLine));
    };
  }, [isOnline]);

  useEffect(() => {
    if (isOnline) {
      window.addEventListener("resize", windowResizing);
      toggleIsLoaded(false);
      if (previouslySearchedFac !== undefined && previouslySearchedUni !== undefined
        && previouslySearchedFac.length > 0 && previouslySearchedUni.length > 0) {
        setSearchedUniversity(previouslySearchedUni);
        setSearchedFaculty(previouslySearchedFac);
        submitTheQuery(
          previouslySearchedUni, 
          previouslySearchedFac, 
          searchedProgramme, 
          searchedSemester.toString(),
          searchedCourse,
          searchedDegree, 
          searchedType,
          chosenSort, 
          chosenSortOrder,
          setSearchedResults,
          toggleAreDocumentsLoaded,
        );
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
      toggleIsLoaded(true);
    } else goBackToTheBeginning();
    return () => {
      window.removeEventListener("resize", windowResizing);
    };
  }, [isOnline]);

  useEffect(() => {
    if (isOnline) {
      if (searchedUniversity.toString().length > 0) {
        getUniversitySubInfrastructure(
          universitiesList, 
          setFacultiesList, 
          "faculties", 
          setSearcherState, 
          searchedUniversity,
        );
        setPreviouslySearchedUni(searchedUniversity.toString());
      } else setPreviouslySearchedUni(undefined);
    } else goBackToTheBeginning();
  }, [isOnline, searchedUniversity]);

  useEffect(() => {
    if (isOnline) {
      if (searchedFaculty.toString().length > 0) {
        setPreviouslySearchedFac(searchedFaculty.toString());
        if (programmesList.length === 0) {
          getUniversitySubInfrastructure(
            facultiesList, 
            setProgrammesList, 
            "programmes", 
            setSearcherState, 
            searchedFaculty,
          );
        }
        if (searchedProgramme.length !== 0 && coursesList.length === 0) {
          getUniversitySubInfrastructure(
            programmesList, 
            setCoursesList, 
            "courses", 
            setSearcherState, 
            searchedProgramme,
          );
        }
        submitTheQuery( 
          searchedUniversity, 
          searchedFaculty, 
          searchedProgramme, 
          searchedSemester.toString(),
          searchedCourse,
          searchedDegree, 
          searchedType,
          chosenSort, 
          chosenSortOrder,
          setSearchedResults,
          toggleAreDocumentsLoaded,
        );
        setCurrentSearchedResultsPage(0);
        setSearcherState(2);
      }
    }
  }, [isOnline, universitiesList, facultiesList, searchedUniversity, searchedFaculty, searchedProgramme, searchedSemester, searchedCourse, 
    searchedDegree, 
    searchedType, chosenSort, chosenSortOrder]);

  useEffect(() => {
    setCurrentSearchedResultsPage(0);
    if (searchedResults.length > 0) {
      const operand = [...searchedResults];
      operand.map((elem:any) => {
        elem.isDisplayed = checkIfFound(elem, searchedPhrase) || searchedPhrase.length === 0 ? 1 : 0;
        return elem;
      });
      setSearchedResults(operand);
    }
  }, [searchedPhrase]);

  return (
    <Template headTagTitle="Wyszukiwarka - Sparkledge">
      {
            searcherState === 2 ? null : (
              
              <AboutHeader className="block-center">
                {searcherState === 1 ? "Ładowanie..." : "Wyszukiwarka"}    
              </AboutHeader>
            )
          }
      {!isOnline || (searcherState < 0 || searcherState > 2) ? (
        <SearcherFailureContainer className="block-center">
          <SearcherFailureHeader className="block-center">
            {isOnline ? "Niestety, coś poszło nie tak i połączenie z serwerem nie zakończyło się pomyślnie" : "Brak połączenia z internetem. Sprawdź swoje połączenie sieciowe"}
          </SearcherFailureHeader>
          {isOnline ? (
            <SearcherFailureButton
              className="block-center"
              onClick={() => { setSearcherState(0); setSearchedProgramme(""); navigate("/searcher/"); }}
            >
              Powrót do wyszukiwania
            </SearcherFailureButton>
          ) : null}
        </SearcherFailureContainer>
      ) : !isLoaded ? <SearchingPreloaderComponent /> : searcherState === 0 ? (
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
        : searcherState === 1 ? <SearchingPreloaderComponent /> : (
          <SearchingResultsSection className="block-center">
            <SearcherFilters
              openedFilters={openedFilters}
              setOpenedFilters={setOpenedFilters}
              chosenSemester={searchedSemester}
              setChosenSemester={setSearchedSemester}
              chosenProgramme={searchedProgramme}
              setChosenProgramme={setSearchedProgramme}
              programmesList={programmesList}
              chosenCourse={searchedCourse}
              setChosenCourse={setSearchedCourse}
              coursesList={coursesList}
              chosenDegree={searchedDegree}
              setChosenDegree={setSearchedDegree}
              chosenType={searchedType}
              setChosenType={setSearchedType}
              chosenSort={chosenSort}
              setChosenSort={setChosenSort}
              chosenSortOrder={chosenSortOrder}
              setChosenSortOrder={setChosenSortOrder}
              areFiltersOn={areFiltersOn}
              toggleAreFiltersOn={toggleAreFiltersOn}
            />
            <SearchingResultsWrapper>
              <SearcherBarInputContainer className="block-center">
                <SearcherInput
                  type="text"
                  placeholder="Czego szukamy?"
                  value={searchedPhrase} 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchedPhrase(e.currentTarget.value)}
                  className="block-center"
                />
              </SearcherBarInputContainer>
              <SearchingResultsOpenFiltersBtn
                className="block-center"
                isAlwaysVisible
                onClick={() => goBackToTheBeginning()}
              >
                Wróć
              </SearchingResultsOpenFiltersBtn>
              <SearchingResultsOpenFiltersBtn
                className="block-center"
                onClick={() => toggleAreFiltersOn(!areFiltersOn)}
              >
                Filtry
              </SearchingResultsOpenFiltersBtn>
              {
                    !areDocumentsLoaded ? (
                      <SearchingPreloaderComponent />
                    ) : searchedResults.filter((elem: any) => elem.isDisplayed === 1).length === 0 ? (
                      <SearchingNoResultsContainer className="block-center">
                        Brak wyników. Spróbuj innych słów kluczowych
                      </SearchingNoResultsContainer>
                    ) 
                      : isBiggerThanTablet ? (
                        <> 
                          {" "}
                          {
                        searchedResults.map((elem: any, ind: number) => elem.isDisplayed === 0 || (ind < (NUMBER_OF_MATERIALS_PER_PAGE * currentSearchedResultsPage) - 1
                      || ind > (NUMBER_OF_MATERIALS_PER_PAGE * (currentSearchedResultsPage + 1)))
                          ? null : (
                            <Link to={`/document/${elem.id}`}>
                              <SearchingMainResultComponent
                                title={elem.title}
                                publishedOn={elem.createdAt}
                                publisher={`${elem.user.firstName} ${elem.user.lastName}`}
                                description={elem.description}
                                likesNum={elem.likesNumber}
                                viewsNum={elem.viewsNumber}
                                animAlign={ind % 2 === 0 ? -10 : 10}
                              />
                            </Link>
                          ))
                      }
                          {searchedResults.length < NUMBER_OF_MATERIALS_PER_PAGE ? null : (
                            <SearcherPagingComponent
                              currentPage={currentSearchedResultsPage}
                              maxPagesNumber={Math.ceil(searchedResults.length / NUMBER_OF_MATERIALS_PER_PAGE)}
                              changeCurrentPage={setCurrentSearchedResultsPage}
                            />
                          )}
                        </>
                      ) : (
                        <DisplayList
                          searchedResults={searchedResults}
                          listWidth={listWidth}
                        />
                      )
}
            </SearchingResultsWrapper>

          </SearchingResultsSection>
        )}
    </Template>
  );
};

export default Searcher;
