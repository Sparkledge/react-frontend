/*
    The sendFile function pushes the user's document to our backend and the further to the database
*/

import axios from "axios";

const sendFile = async (
  materialName: string,
  desc: string,
  searchedUniversity: string,
  searchedFaculty: string,
  searchedProgramme: string,
  searchedCourse: string,
  file: File,
  currentToken: string,
  setPhaseNumber: (newState: number) => void,
  setDocumentId: (newId: string) => void,
  toggleIsWorking: (newState: boolean) => void,
  toggleIsSending: (newState: boolean) => void,
) => {
  toggleIsSending(true);
  const formData = new FormData();
  formData.append("title", materialName);
  formData.append("description", desc);
  formData.append("universityId", searchedUniversity.toString());
  formData.append("facultyId", searchedFaculty.toString());
  formData.append("programmeId", searchedProgramme.toString());
  formData.append("courseId", searchedCourse.toString());
  formData.append("file", file);
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents`, formData, {
    headers: {
      Authorization: `Bearer ${currentToken}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      // console.log(res);
      if (res.status === 200 || res.status === 201 || res.status === 204) {
        setPhaseNumber(4);
        // console.log(res.data.id);
        setDocumentId(res.data.id.toString());
        toggleIsSending(false);
      }
    })
    .catch((err) => {
      // console.log(err);
      toggleIsWorking(false);
      toggleIsSending(false);
    });
};

export default sendFile;
