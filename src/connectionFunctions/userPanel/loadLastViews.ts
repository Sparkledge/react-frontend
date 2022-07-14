/* 
    getLastViews - the function that provides us with user lastly viewed documents
*/

import axios from "axios";

const getLastViews = async (
  currentToken: string, 
  setLastViewedList: (newData: any[]) => void,
  toggleIsWorking: (newState: boolean) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/viewedDocuments`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((res) => {
      console.log(res);
      setLastViewedList(res.data);
      toggleIsWorking(true);
    })
    .catch((err) => {
      toggleIsWorking(false);
    });
};

export default getLastViews;
