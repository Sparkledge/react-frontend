/*
    The submitTheQuery function is meant for the final connection with the backend in order to get the 
    documents assigned to the chosen course
*/

import axios from "axios";

const submitTheQuery = async (
  searchedUniversity: string,
  searchedFaculty: string,
  searchedProgramme: string,
  searchedSemester: string,
  searchedCourse: string,
  searchedDegree: string,
  searchedType: string,
  searchingResultsSort: string,
  searchingResultsOrder: string,
  setSearchedResults: (newData: any[]) => void,
  toggleIsLoaded: (newState: boolean) => void,
) => {
  toggleIsLoaded(false);
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/filtered`, {
    params: {
      universityId: searchedUniversity,
      facultyId: searchedFaculty,
      programmeId: searchedProgramme,
      courseId: searchedCourse,
      sortPropety: searchingResultsSort,
      sortValue: searchingResultsOrder,
      semester: searchedSemester,
      degree: searchedDegree,
      courseType: searchedType,
      parameters: "",
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      const finalResult = res.data.map((elem:any) => { elem.isDisplayed = 1; return elem; });
      setSearchedResults(finalResult);
      toggleIsLoaded(true);
    })
    .catch((err) => {
      toggleIsLoaded(true);
    });
};

export default submitTheQuery;
