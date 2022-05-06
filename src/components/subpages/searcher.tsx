import React, {useState, Suspense} from "react";
import axios from "axios";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import { AboutHeader } from "../../styled/subpages/about";
import { SearchingResultsSection } from "../../styled/subpages/searcher";
import { SearcherFailureContainer, SearcherFailureHeader, SearcherFailureButton } from "../../styled/subpages/searcher/searcherFailure"

import SearchBarComponent from "../helperComponents/searcher/searchBarComponent";
import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";
import FooterComponent from "../helperComponents/welcome/footerComponent";

const SearchingMainResultComponent = React.lazy(() => import("../helperComponents/searcher/searchingMainResultComponent"));
const SearchingSideResultComponent = React.lazy(() => import("../helperComponents/searcher/searchingSideResultComponent"));
const BackgroundPattern = require("../../assets/pattern_background.webp");

const Searcher:React.FC = () => {

    const [searcherState, setSearcherState] = useState<number>(0); // 0 - nothing searched yet, 1 - search in progress, 2 - search results
    const [searchedUniversity, setSearchedUniversity] = useState<string>("");
    const [searchedFaculty, setSearchedFaculty] = useState<string>("");
    const [searchedProgramme, setSearchedProgramme] = useState<string>("");
    const [searchedSemester, setSearchedSemester] = useState<string>("");
    const [searchedCourse, setSearchedCourse] = useState<string>("");
    const [searchedPhrase, setSearchedPhrase] = useState<string>("");
    const [searchedResults, setSearchedResults] = useState<any[]>([]);

    const submitTheQuery = async() => {
        if(searchedUniversity.length > 0 && searchedFaculty.length > 0 && searchedProgramme.length > 0 && 
            searchedCourse.length > 0 && searchedPhrase.length > 0){
            setSearcherState(1);
            await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/dev`,{
                params: {
                    university: searchedUniversity,
                    faculty: searchedFaculty,
                    programme: searchedProgramme,
                    course: searchedCourse
                }
            })
                .then((res) => {
                    console.log(res.data.description);
                    setSearcherState(res.status === 200 ? 2 : 3);
                    setSearchedResults(res.status === 200 ? res.data.description : []);
                    setSearchedPhrase("");
                })
                .catch((err) => {
                    console.log(err);
                    setSearcherState(3);
                })
        }
    }

    return <MainContainer className="block-center">
        <LandingSectionWrapper className="block-center" source={BackgroundPattern} backgroundSize="contain">
            <LandingSectionFilter>
                <AboutHeader className="block-center">
                    {searcherState === 2 ? "Wyniki wyszukiwania" : searcherState === 1 ? "Ładowanie..." : "Wyszukiwarka"}    
                </AboutHeader>
                {searcherState === 0 ? <SearchBarComponent 
                    searchedUniversity={searchedUniversity}
                    setSearchedUniversity={setSearchedUniversity}
                    searchedFaculty={searchedFaculty}
                    setSearchedFaculty={setSearchedFaculty}
                    searchedProgramme={searchedProgramme} 
                    setSearchedProgramme={setSearchedProgramme}
                    searchedSemester={searchedSemester}
                    setSearchedSemester={setSearchedSemester}
                    searchedCourse={searchedCourse} 
                    setSearchedCourse={setSearchedCourse}
                    searchedPhrase={searchedPhrase} 
                    setSearchedPhrase={setSearchedPhrase} 
                    submitCallback={submitTheQuery}/> : 
                searcherState === 1 ? <SearchingPreloaderComponent/> : searcherState === 2 ? <SearchingResultsSection className="block-center">
                    {searchedResults.map((elem, ind) => ind < 4 ? <Suspense fallback={<></>}><SearchingMainResultComponent
                        title={elem["title"]}
                        publishedOn={elem["createdDate"]}
                        publisher={elem["creatorEmail"]}
                        animAlign={ind % 2 === 0 ? -10 : 10}
                        key={`search-result-${ind}`}/></Suspense> : <Suspense fallback={<></>}><SearchingSideResultComponent 
                        title={elem["title"]}
                        publishedOn={elem["createdDate"]}
                        publisher={elem["creatorEmail"]}
                        animAlign={ind % 2 === 0 ? -10 : 10}
                        key={`search-result-${ind}`}/></Suspense>)}
                    </SearchingResultsSection> : <SearcherFailureContainer className="block-center">
                            <SearcherFailureHeader className="block-center">
                                Niestety, coś poszło nie tak i połączenie z serwerem nie zakończyło się pomyślnie
                            </SearcherFailureHeader>
                            <SearcherFailureButton className="block-center"
                                onClick={() => {setSearcherState(0); setSearchedUniversity("");}}>
                                    Powrót do wyszukiwania
                            </SearcherFailureButton>
                        </SearcherFailureContainer>}
            </LandingSectionFilter>    
        </LandingSectionWrapper>
        <FooterComponent/>
    </MainContainer>
};

export default Searcher;