import React from "react";
import SearchIcon from '@mui/icons-material/Search';

import { SearcherBar, SearcherInput, SearcherButton } from "../../../styled/subpages/searcher";

interface SearchBarComponentInterface{
    searchedPhrase: string,
    setSearchedPhrase: (newPhrase: string) => void,
    submitCallback: () => void
}

const SearchBarComponent:React.FC<SearchBarComponentInterface> = 
    ({searchedPhrase, submitCallback, setSearchedPhrase}:SearchBarComponentInterface) => {
    return <SearcherBar className="block-center">
        <SearcherInput type="text" placeholder="Czego szukamy?" value={searchedPhrase} 
            onChange={(e) => setSearchedPhrase(e.target.value)}/>   
        <SearcherButton type="button" onClick={() => submitCallback()}>
            <SearchIcon style={{color: "inherit", fontSize: "1.9em"}}/>    
        </SearcherButton>
    </SearcherBar>
}

export default SearchBarComponent;