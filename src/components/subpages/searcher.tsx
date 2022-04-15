import React, {useState, useEffect} from "react";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import { AboutHeader } from "../../styled/subpages/about";
import { SearchingResultsSection, SearchingMainResult, SearchingResultHeader,
    SearchingResultSubInfo, SearchingResultTagsSection, SearchingResultTag } from "../../styled/subpages/searcher";

import SearchBarComponent from "../helperComponents/searcher/searchBarComponent";
import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";
import FooterComponent from "../helperComponents/welcome/footerComponent";

const BackgroundPattern = require("../../assets/pattern_background.webp");

const Searcher:React.FC = () => {

    const [searcherState, setSearcherState] = useState<number>(0); // 0 - nothing searched yet, 1 - search in progress, 2 - search results
    const [searchedUniversity, setSearchedUniversity] = useState<string>("");
    const [searchedFaculty, setSearchedFaculty] = useState<string>("");
    const [searchedProgramme, setSearchedProgramme] = useState<string>("");
    const [searchedCourse, setSearchedCourse] = useState<string>("");
    const [searchedPhrase, setSearchedPhrase] = useState<string>("");

    const submitTheQuery = () => {
        if(searchedPhrase.length > 0){
            setSearcherState(1);
        }
    }

    useEffect(() => searcherState === 1 ? setSearcherState(2) : () => {}, [searcherState]);

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
                    searchedCourse={searchedCourse} 
                    setSearchedCourse={setSearchedCourse}
                    searchedPhrase={searchedPhrase} 
                    setSearchedPhrase={setSearchedPhrase} 
                    submitCallback={submitTheQuery}/> : 
                searcherState === 1 ? <SearchingPreloaderComponent/> : <SearchingResultsSection className="block-center">
                    <SearchingMainResult className="block-center" animAlign={-10}>
                        <SearchingResultHeader>
                            Test header
                        </SearchingResultHeader>
                        <SearchingResultSubInfo>
                            Udostępnione dnia DD/MM/YYYY przez użytkownika testUser
                        </SearchingResultSubInfo>
                        <SearchingResultTagsSection className="block-center">
                            <SearchingResultTag>
                                Doktorologia
                            </SearchingResultTag>
                            <SearchingResultTag>
                                Doktorologia stosowana
                            </SearchingResultTag>
                            <SearchingResultTag>
                                Doktorologia
                            </SearchingResultTag>
                            <SearchingResultTag>
                                Doktorologia stosowana
                            </SearchingResultTag>
                            <SearchingResultTag>
                                Doktorologia
                            </SearchingResultTag>
                            <SearchingResultTag>
                                Doktorologia stosowana
                            </SearchingResultTag>
                            <SearchingResultTag>
                                Doktorologia
                            </SearchingResultTag>
                            <SearchingResultTag>
                                Doktorologia stosowana
                            </SearchingResultTag>
                        </SearchingResultTagsSection>
                    </SearchingMainResult>
                    </SearchingResultsSection>}
            </LandingSectionFilter>    
        </LandingSectionWrapper>
        <FooterComponent/>
    </MainContainer>
};

export default Searcher;