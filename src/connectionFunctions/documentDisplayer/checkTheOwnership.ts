/* 

    The checkTheOwnership function is for checking if the user owns the given material

*/

import axios from "axios";

const checkTheOwnership = async (
  loginUserToken: string,
  documentId: string,
  failToCheckCallback: (newState: boolean) => void,
  successCallback: (newState: boolean) => void,
) => {
  await axios.post(
    `${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/isPermittedToDeleteDocument/${documentId}`, 
    { },
    {
      headers: {
        Authorization: `Bearer ${loginUserToken}`,
        "Content-Type": "application/json",
      },
    },
  )
    .then((res) => {
      if (res.data.isPermitted !== undefined) successCallback(res.data.isPermitted);
      else successCallback(false);
    })
    .catch((err) => {
      failToCheckCallback(false);
    });
};

export default checkTheOwnership;
