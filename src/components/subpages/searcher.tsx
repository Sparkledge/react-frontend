import React, {useState, useEffect, Suspense} from "react";
import useLocalStorage from "use-local-storage";
import {Link} from "react-router-dom";
import axios from "axios";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import { AboutHeader } from "../../styled/subpages/about";
import { SearchingResultsSection } from "../../styled/subpages/searcher";
import { SearchingNoResultsContainer } from "../../styled/subpages/searcher/searcherResults";
import { SearcherFailureContainer, SearcherFailureHeader, SearcherFailureButton } from "../../styled/subpages/searcher/searcherFailure"
import { SearcherBarInputContainer, SearcherInput, SearcherButton } from "../../styled/subpages/searcher/searcherBar";

import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

const SearchBarComponent = React.lazy(() => import("../helperComponents/searcher/searchBarComponent"));
const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));
const SearchingMainResultComponent = React.lazy(() => import("../helperComponents/searcher/searchingMainResultComponent"));
const BackgroundPattern = require("../../assets/pattern_background5.webp");

const Searcher:React.FC = () => {

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

    const [previouslySearchedUni, setPreviouslySearchedUni] = useLocalStorage<string>("uni","");
    const [previouslySearchedFac, setPreviouslySearchedFac] = useLocalStorage<string>("fac","");

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/university`)
        .then((res) => {
            setUniversitiesList(res.data);
            if(previouslySearchedUni.length > 0 && res.data.filter((elem: any) => elem["name"] === previouslySearchedUni).length > 0) {
                setSearchedUniversity(previouslySearchedUni);
                if(previouslySearchedFac.length > 0 && res.data.filter((elem: any) => elem["name"] === previouslySearchedUni)[0]["faculties"]
                    .filter((elem:any) => elem["name"] === previouslySearchedFac).length > 0) {setSearchedFaculty(previouslySearchedFac);}
                    else setPreviouslySearchedFac(undefined);
            }
        })
        .catch(() => {
            setSearcherState(3);
        })
    }, []);

    useEffect(() => {
        if(searchedFaculty.length > 0) {
            setFacultiesList([]);

            const facultyID:string = universitiesList.filter((elem:any) => elem["name"] !== undefined && elem["name"] === searchedUniversity)[0]["faculties"]
            .filter((elem: any) => elem["name"] !== undefined && elem["name"] === searchedFaculty)[0]["_id"];

            const requestBody:Object = {
                "facultyId": facultyID
            }

            axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/faculty`, requestBody, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
            .then((res) => {
                setFacultiesList(res.data.programmes)
            })
            .catch((err) => {
                console.log(err);
                setSearcherState(3);
            })

        } 
    }, [searchedFaculty])

    useEffect(() => {
        if(searchedProgramme.length > 0){
            setProgrammesList([]);
            
            const programmeID:string = facultiesList.filter((elem:any) => elem["name"] !== undefined && elem["name"] === searchedProgramme)[0]["_id"];

            const requestBody:Object = {
                "programmeId": programmeID
            }

            axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/programme`, requestBody, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
            .then((res) => {
                setProgrammesList(res.data.courses)
            })
            .catch((err) => {
                console.log(err);
                setSearcherState(3);
            })

        }
    }, [searchedProgramme])

    useEffect(() => {
        if(searchedCourse.length > 0) submitTheQuery();
    }, [searchedCourse]);
    
    const submitTheQuery = async() => {
        if(searchedUniversity.length > 0 && searchedFaculty.length > 0 && searchedProgramme.length > 0 && 
            searchedCourse.length > 0 && programmesList.filter((elem:any) => elem.name === searchedCourse).length > 0){
                setSearcherState(1);
            await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/course`,{
                    courseId: programmesList.filter((elem:any) => elem.name === searchedCourse)[0]["_id"]
            })
                .then((res) => {
                    setSearcherState(res.status === 200 ? 2 : 3);
                    setSearchedResults(res.status === 200 ? res.data.documents.map((elem:any) => {elem["isDisplayed"] = 1; return elem;}) : []);
                    setSearchedPhrase("");
                })
                .catch((err) => {
                    setSearcherState(3);
                })
        }
    }

    const getBackToSearch = () => {
        setSearchedCourse("");
        setSearchedPhrase("");
        setSearchedProgramme("");
        setSearchedSemester(0);
        setSearchedResults([]);
        setSearcherState(0);
    }

    const checkIfFound = (elem: any) :boolean => {
        return elem["title"].toLowerCase().search(searchedPhrase.toLowerCase()) !== -1 ? true :
        elem["creatorEmail"].toLowerCase().search(searchedPhrase.toLowerCase()) !== -1 ?  true :
        elem["description"].toLowerCase().search(searchedPhrase.toLowerCase()) !== -1 ? true: 
        searchedPhrase.toLowerCase().split(' ').filter((toAnalyze: string) => elem["title"].search(toAnalyze) !== -1).length > 0 ? true : false;
    }

    useEffect(() => {
        if(searchedResults.length > 0 ){
            let operand = [...searchedResults];
            if(searchedPhrase.length === 0) operand.map((elem:any) => {elem["isDisplayed"] = 1; return elem;});
            else operand.map((elem:any) => {
                    checkIfFound(elem) ? elem["isDisplayed"] = 1 : elem["isDisplayed"] = 0;
                return elem;
            })
            setSearchedResults(operand);
        }
    }, [searchedPhrase])

    return <MainContainer className="block-center">
        <LandingSectionWrapper className="block-center" source={BackgroundPattern} backgroundSize="initial"
        backgroundRepeat="repeat">
            <LandingSectionFilter>
                <AboutHeader className="block-center">
                    {searcherState === 2 ? "Wyniki wyszukiwania" : searcherState === 1 ? "Ładowanie..." : "Wyszukiwarka"}    
                </AboutHeader>
                {searcherState === 0 ? <Suspense fallback={<></>}>
                    <SearchBarComponent 
                        universities={universitiesList}
                        faculties={facultiesList}
                        programmes={programmesList}
                        searchedUniversity={searchedUniversity}
                        setSearchedUniversity={(newUni:string) => {setSearchedUniversity(newUni);
                            setPreviouslySearchedUni(newUni === "" ? undefined : newUni);
                            if(newUni === "") setPreviouslySearchedFac(undefined)}}
                        searchedFaculty={searchedFaculty}
                        setSearchedFaculty={(newFac: string) => {setSearchedFaculty(newFac);
                            if(previouslySearchedUni !== undefined && previouslySearchedUni.length > 0 && searchedUniversity.length > 0) setPreviouslySearchedFac(newFac === "" ? undefined : newFac)}}
                        searchedProgramme={searchedProgramme} 
                        setSearchedProgramme={setSearchedProgramme}
                        searchedSemester={searchedSemester}
                        setSearchedSemester={setSearchedSemester}
                        searchedCourse={searchedCourse} 
                        setSearchedCourse={setSearchedCourse}/>
                </Suspense> : 
                searcherState === 1 ? <SearchingPreloaderComponent/> : searcherState === 2 ? <SearchingResultsSection className="block-center">
                    <SearcherBarInputContainer className="block-center">
                        <SearcherInput type="text" placeholder="Czego szukamy?" value={searchedPhrase} 
                            onChange={(e) => setSearchedPhrase(e.target.value)} className="block-center"/>
                    </SearcherBarInputContainer>
                    <SearcherButton className="block-center" onClick={() => getBackToSearch()}>
                        Wróć do wyszukiwania
                    </SearcherButton>
                    {
                    searchedResults.filter((elem:any) => elem["isDisplayed"] === 1).length === 0 ?
                    <SearchingNoResultsContainer className="block-center">
                        Brak wyników. Spróbuj innych słów kluczowych
                    </SearchingNoResultsContainer> :
                    searchedResults.map((elem, ind) => elem["isDisplayed"] === 0 ? <div key={`search-result-${ind}`}></div> : <Suspense fallback={<></>}
                                key={`search-result-${ind}`}>
                        <Link to={`/document/${elem["_id"]}`}>
                            <SearchingMainResultComponent
                                title={elem["title"]}
                                publishedOn={elem["createdDate"]}
                                publisher={elem["creatorEmail"]}
                                description={elem["description"]}
                                likesNum={elem["likesNum"]}
                                viewsNum={elem["viewsNum"]}
                                animAlign={ind % 2 === 0 ? -10 : 10}/>
                        </Link></Suspense>)}
                    </SearchingResultsSection> : <SearcherFailureContainer className="block-center">
                            <SearcherFailureHeader className="block-center">
                                Niestety, coś poszło nie tak i połączenie z serwerem nie zakończyło się pomyślnie
                            </SearcherFailureHeader>
                            <SearcherFailureButton className="block-center"
                                onClick={() => {setSearcherState(0); setSearchedProgramme("");}}>
                                    Powrót do wyszukiwania
                            </SearcherFailureButton>
                        </SearcherFailureContainer>}
            </LandingSectionFilter>    
        </LandingSectionWrapper>
        <Suspense fallback={<></>}>
            <FooterComponent/>
        </Suspense>
    </MainContainer>
};

export default Searcher;