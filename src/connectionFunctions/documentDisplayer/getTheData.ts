import axios from "axios";
import jwt from "jwt-decode";

import base64ArrayBuffer from "../../components/auxiliaryFunctions/documentDisplayer/decodingToBase64";

export const getTheData = async (
  loginUserSelector: string, 
  toggleIsFile: (newState: boolean) => void,
  docId: string, 
  setTitle: (newState: string) => void, 
  setLikesNumber: (newState: number) => void, 
  toggleIsLiked: (newState: boolean) => void,
  setViewsNumber: (newState: number) => void, 
  setFileAuthor: (newState: string) => void, 
  setFileAuthorEmail: (newState: string) => void,
  setDescriptionOfFile: (newState: string) => void, 
  toggleIsError: (newState: boolean) => void, 
  setFileSrc: (newState: any) => void, 
  smallDevicesWidthChecker: boolean, 
  setFileId: (newState: string) => void,
  setFileCourse: (newState: string) => void,
) => {
  if (loginUserSelector.length > 0) {
    toggleIsFile(false);
    await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/${docId}`, {
      headers: {
        Authorization: `Bearer ${loginUserSelector}`,
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        let id:any = jwt(loginUserSelector);
        setTitle(res.data.title);
        setLikesNumber(res.data.likesNumber);
        toggleIsLiked(res.data.likesList.find((elem: string) => elem === id.id) !== undefined);
        setViewsNumber(res.data.viewsNumber);
        setFileAuthor(`${res.data.user.firstName} ${res.data.user.lastName}`);
        setFileAuthorEmail(res.data.user.email);
        setDescriptionOfFile(res.data.description);
        setFileId(res.data.fileId);
        setFileCourse(`${res.data.faculty.name}, ${res.data.course.name}` || "");
        id = null;
      })
      .catch((err) => {
        toggleIsError(true);
      });
  }
};

export const loadTheDownloadLink = async (
  loginUserSelector: string,
  fileId: string | undefined,
  toggleIsError: (newState: boolean) => void,
  setFileSrc: (newState: any) => void, 
  toggleIsFileRequested: (newState: boolean) => void,
) => {
  if (fileId !== undefined) {
    toggleIsFileRequested(true);
    await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/files/url/${fileId}`, {
      headers: {
        Authorization: `Bearer ${loginUserSelector}`,
        Accept: "application/pdf",
      },
    }).then((res) => {
      setFileSrc(res.data);
      /* const tmp_path = (window.URL ? URL : webkitURL).createObjectURL(new Blob([res.data], {
                type: "application/pdf",
            }))
            setFileSrc(tmp_path)
            if(!smallDevicesWidthChecker){
                const pdfWindow = window.open();
                if(pdfWindow !== null){
                    pdfWindow.location.href = tmp_path;
                }
            }
            URL.revokeObjectURL(tmp_path); */
    })
      .catch((err) => {
        toggleIsError(true);
      });
  }
};

export const loadTheFile = async (
  loginUserSelector: string,
  fileId: string | undefined,
  toggleIsFile: (newState: boolean) => void,
  toggleIsError: (newState: boolean) => void,
  setFile: (newState: any) => void,
) => {
  if (fileId !== undefined) {
    await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/files/stream/${fileId}`, {
      headers: {
        Authorization: `Bearer ${loginUserSelector}`,
        Accept: "application/pdf",
      },
      responseType: "arraybuffer",
    }).then((res) => {
      toggleIsFile(true);
      setFile(base64ArrayBuffer(res.data)); 
      /* const tmp_path = (window.URL ? URL : webkitURL).createObjectURL(new Blob([res.data], {
                type: "application/pdf",
            }))
            setFileSrc(tmp_path)
            if(!smallDevicesWidthChecker){
                const pdfWindow = window.open();
                if(pdfWindow !== null){
                    pdfWindow.location.href = tmp_path;
                }
            }
            URL.revokeObjectURL(tmp_path); */
    })
      .catch((err) => {
        toggleIsFile(false);
        toggleIsError(true);
      });
  }
};
