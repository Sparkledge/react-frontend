/*
    The sendFile function pushes the user's document to our backend and the further to the database
*/

import axios from "axios";

const sendFile = async (
  materialName: string,
  desc: string,
  universitiesList: any[],
  facultiesList: any[],
  programmesList: any[],
  searchedUniversity: string,
  searchedFaculty: string,
  searchedProgramme: string,
  searchedCourse: string,
  file: File,
  currentToken: string,
  setPhaseNumber: (newState: number) => void,
  setDocumentId: (newId: string) => void,
  toggleIsWorking: (newState: boolean) => void,
) => {
  const formData = new FormData();
  formData.append("title", materialName);
  formData.append("description", desc);
  /* formData.append("universityId", universitiesList.filter((elem:any) => elem.name === searchedUniversity)[0]["_id"]);
    formData.append("facultyId", universitiesList.filter((elem:any) => elem["name"] !== undefined && elem["name"] === searchedUniversity)[0]["faculties"]
    .filter((elem: any) => elem["name"] !== undefined && elem["name"] === searchedFaculty)[0]["_id"]);
    formData.append("programmeId", facultiesList.filter((elem:any) => elem["name"] !== undefined && elem["name"] === searchedProgramme)[0]["_id"]);
    formData.append("courseId", programmesList.filter((elem:any) => elem.name === searchedCourse)[0]["_id"]); */
  formData.append("universityId", "1");
  formData.append("facultyId", "1");
  formData.append("programmeId", "1");
  formData.append("courseId", "1");
  formData.append("file", file);
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents`, formData, {
    headers: {
      Authorization: `Bearer ${currentToken}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201 || res.status === 204) {
        setPhaseNumber(4);
        console.log(res.data.document.fileId);
        setDocumentId(res.data.document.fileId.toString());
      }
    })
    .catch((err) => {
      console.log(err);
      toggleIsWorking(false);
    });
};

export default sendFile;
