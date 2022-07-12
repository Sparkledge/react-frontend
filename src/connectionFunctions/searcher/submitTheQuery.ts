/*
    The submitTheQuery function is meant for the final connection with the backend in order to get the 
    documents assigned to the chosen course
*/

import axios from "axios";

const submitTheQuery = async (
  loginUserToken: string,
  searchedUniversity: string,
  searchedFaculty: string,
  searchedProgramme: string,
  searchedSemester: string,
  searchedCourse: string,
  searchingResultsSort: string,
  searchingResultsOrder: string,
  setSearchedResults: (newData: any[]) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/filtered`, {
    params: {
      universityId: searchedUniversity,
      facultyId: searchedFaculty,
      programmeId: searchedProgramme,
      courseId: searchedCourse,
      sortPropety: searchingResultsSort,
      sortValue: searchingResultsOrder,
      semester: searchedSemester,
      parameters: "",
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginUserToken}`,
    },
  })
    .then((res) => {
      console.log(res.data);
      setSearchedResults(res.data.map((elem:any) => { elem.isDisplayed = 1; return elem; }));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default submitTheQuery;
