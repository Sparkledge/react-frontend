/* 

    The SearcherPagingComponent is meant to be used for displaying the results paging in searcher

*/

import React, { useState, useEffect } from "react";

import { SearcherPagingContainer, SearcherPagingNumber } from "src/styled/subpages/searcher/searcherPaging";

interface SearcherPagingComponentInterface {
  currentPage: number,
  maxPagesNumber: number,
  changeCurrentPage: (newState: number) => void,
}

const SearcherPagingComponent:React.FC<SearcherPagingComponentInterface> = ({
  currentPage,
  maxPagesNumber,
  changeCurrentPage,
} : SearcherPagingComponentInterface) => {
  const [pagesNumbers, setPagesNumbers] = useState<number[]>([]);

  useEffect(() => {
    const newPagesNumbers:number[] = [];
    if (currentPage - 3 < 0) {
      for (let i = 0; i < currentPage; i++) newPagesNumbers.push(i);
    } else {
      for (let i = currentPage - 3; i < currentPage; i++) newPagesNumbers.push(i);
    }
    newPagesNumbers.push(currentPage);
    let tempI = currentPage + 1;
    while (newPagesNumbers.length < 7 && tempI < maxPagesNumber) {
      newPagesNumbers.push(tempI);
      tempI++;
    }
    setPagesNumbers(newPagesNumbers);
  }, [currentPage]);

  return (
    <SearcherPagingContainer className="block-center">
      {pagesNumbers.map((elem: number, ind: number) => (
        <SearcherPagingNumber onClick={() => changeCurrentPage(elem)} isSelected={elem === currentPage}>
          {elem}
        </SearcherPagingNumber>
      ))}
    </SearcherPagingContainer>
  );
};

export default SearcherPagingComponent;
