import React, {useState} from "react";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import { AboutHeader } from "../../styled/subpages/about";

import SearchBarComponent from "../helperComponents/searcher/searchBarComponent";
import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

const BackgroundPattern = require("../../assets/pattern_background.webp");

const Searcher:React.FC = () => {

    const [searcherState, setSearcherState] = useState<number>(0); // 0 - nothing searched yet, 1 - search in progress, 2 - search results
    const [searchedPhrase, setSearchedPhrase] = useState<string>("");

    const submitTheQuery = () => {
        if(searchedPhrase.length > 0){
            setSearcherState(1);
        }
    }

    return <MainContainer className="block-center">
        <LandingSectionWrapper className="block-center" source={BackgroundPattern} backgroundSize="contain">
            <LandingSectionFilter>
                <AboutHeader className="block-center">
                    {searcherState === 2 ? "Wyniki wyszukiwania" : searcherState === 1 ? "Ładowanie..." : "Wyszukiwarka"}    
                </AboutHeader>
                {searcherState === 0 ? <SearchBarComponent 
                    searchedPhrase={searchedPhrase} 
                    setSearchedPhrase={setSearchedPhrase} 
                    submitCallback={submitTheQuery}/> : 
                searcherState === 1 ? <SearchingPreloaderComponent/> : <></>}
            </LandingSectionFilter>    
        </LandingSectionWrapper>
    </MainContainer>
};

export default Searcher;