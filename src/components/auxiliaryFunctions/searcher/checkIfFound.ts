const checkIfFound = (elem: any, searchedPhrase: string) :boolean => elem.title.toLowerCase().search(searchedPhrase.toLowerCase()) !== -1 ? true
  : elem.user.firstName.toLowerCase().search(searchedPhrase.toLowerCase()) !== -1 ? true
    : elem.user.lastName.toLowerCase().search(searchedPhrase.toLowerCase()) !== -1 ? true
      : elem.description.toLowerCase().search(searchedPhrase.toLowerCase()) !== -1 ? true 
        : searchedPhrase.toLowerCase().split(" ").filter((toAnalyze: string) => elem.title.search(toAnalyze) !== -1).length > 0;

export default checkIfFound;
