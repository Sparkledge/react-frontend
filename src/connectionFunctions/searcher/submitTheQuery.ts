/*
    The submitTheQuery function is meant for the final connection with the backend in order to get the 
    documents assigned to the chosen course
*/

import axios from "axios";

const submitTheQuery = async(
    searchedUniversity: string,
    searchedFaculty: string,
    searchedProgramme: string,
    searchedCourse: string,
    programmesList: any[],
    courseId: string,
    setSearcherState: (newState: number) => void,
    setSearchedResults: (newData: any[]) => void,
    setSearchedPhrase: (newPrase: string) => void
) => {
    if((searchedUniversity.length > 0 && searchedFaculty.length > 0 && searchedProgramme.length > 0 && 
        searchedCourse.length > 0 && programmesList.filter((elem:any) => elem.name === searchedCourse).length > 0) || (courseId !== undefined && courseId.length > 0)){
            setSearcherState(1);
        await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/course`,{
                courseId: courseId !== undefined ? courseId : programmesList.filter((elem:any) => elem.name === searchedCourse)[0]["_id"]
        })
            .then((res) => {
                setSearcherState(res.status === 200 ? 2 : 3);
                setSearchedResults(res.status === 200 ? res.data.documents.map((elem:any) => {elem["isDisplayed"] = 1; return elem;}) : []);
                setSearchedPhrase("");
            })
            .catch((err) => {
                setSearcherState(3);
            })
    }
};

export default submitTheQuery;