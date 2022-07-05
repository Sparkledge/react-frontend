/*
    The sendFile function pushes the user's document to our backend and the further to the database
*/

import axios from "axios";

const sendFile = async(
    materialName: string,
    desc: string,
    programmesList: any[],
    searchedCourse: string,
    file: File,
    currentToken: string,
    setPhaseNumber: (newState: number) => void,
    setDocumentId: (newId: string) => void,
    toggleIsWorking: (newState: boolean) => void
) => {
    const formData = new FormData();
    formData.append("title",materialName);
    formData.append("description", desc);
    formData.append("courseId", programmesList.filter((elem:any) => elem.name === searchedCourse)[0]["_id"]);
    formData.append("file",file);
    await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents`, formData, {
        headers: {
            "Authorization": `Bearer ${currentToken}`,
            'Content-Type': 'multipart/form-data',
        }
    })
    .then((res) => {
        if(res.status === 201){
            setPhaseNumber(4);
            setDocumentId(res.data.id);
        }
    })
    .catch((err) => {
        toggleIsWorking(false);
    });
}

export default sendFile;