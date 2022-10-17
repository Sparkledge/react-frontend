/* 

    The getNumberOfPublishedMaterials function is meant to be used for retriving the number of published materials of
    a user specified by the given ID from the database

*/

import axios from "axios";

const getNumberOfPublishedMaterials = async (
  userId: string,
  successCallback: (newState: number) => void,
  errorCallback: (newState: boolean) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/getNumOfPublishedDocuments/${userId}`)
    .then((res) => {
      successCallback(res.data.numOfDocumentsPublished);
    })
    .catch((err) => {
      errorCallback(false);
    });
};

export default getNumberOfPublishedMaterials;
