/*
    getUniversitiesInfrastructure - a function that loads the list of universities from the backend and, 
    if the necessary data found,
    sets the value of the university to the localStorage value
*/

import axios from "axios";

const getUniversitiesInfrastructure = async (
  setUniversitiesList: (newData: any[]) => void,
  previouslySearchedUni: string, 
  previouslySearchedFac: string,
  setSearchedUniversity: (newUni: string) => void,
  setSearchedFaculty: (newFac: string) => void,
  setPreviouslySearchedFac: (newFac: string | undefined) => void,
  toggleIsLoaded: (newState: boolean) => void,
  setSearcherState: (newState: number) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/universities`)
    .then((res) => {
      setUniversitiesList(res.data);
      if (previouslySearchedUni.length > 0 && res.data.filter((elem: any) => elem.name === previouslySearchedUni).length > 0) {
        setSearchedUniversity(previouslySearchedUni);
        if (previouslySearchedFac.length > 0 && res.data.filter((elem: any) => elem.name === previouslySearchedUni)[0].faculties
          .filter((elem:any) => elem.name === previouslySearchedFac).length > 0) { setSearchedFaculty(previouslySearchedFac); } else setPreviouslySearchedFac(undefined);
      }
      toggleIsLoaded(true);
    })
    .catch(() => {
      setSearcherState(3);
    });
};

export default getUniversitiesInfrastructure;
