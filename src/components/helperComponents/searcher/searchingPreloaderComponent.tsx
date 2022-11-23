import React from "react";

import { SearchingPreloader, SearchingPreloaderElem } from "src/styled/subpages/searcher";

const SearchingPreloaderComponent:React.FC = () => (
  <SearchingPreloader className="block-center">
    <SearchingPreloaderElem delay={0} />
    <SearchingPreloaderElem delay={0.1} />
    <SearchingPreloaderElem delay={0.2} />
    <SearchingPreloaderElem delay={0.3} />
    <SearchingPreloaderElem delay={0.4} />
  </SearchingPreloader>
);

export default SearchingPreloaderComponent;
