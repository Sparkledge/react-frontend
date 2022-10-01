const checkIfFound = (elem: any, searchedPhrase: string) :boolean => {
  // console.log(searchedPhrase.toLowerCase().split(" ").filter((toAnalyze: string) => elem.title.search(toAnalyze) !== -1).length > 0);
  const sanitizedPhrase = searchedPhrase.replace(/[#-}]/g, "\\$&");
  return elem.title.toLowerCase().search(sanitizedPhrase.toLowerCase()) !== -1 ? true
    : elem.user.firstName.toLowerCase().search(sanitizedPhrase.toLowerCase()) !== -1 ? true
      : elem.user.lastName.toLowerCase().search(sanitizedPhrase.toLowerCase()) !== -1 ? true
        : elem.description.toLowerCase().search(sanitizedPhrase.toLowerCase()) !== -1 ? true 
          : sanitizedPhrase.toLowerCase().split(" ").filter((toAnalyze: string) => elem.title.search(toAnalyze) !== -1).length > 0;
};

export default checkIfFound;
