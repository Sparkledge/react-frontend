/* 
    getLastViews - the function that provides us with user lastly viewed documents or recently published materials
*/

import axios from "axios";

const getLastViews = async (
  currentToken: string, 
  route: string,
  setLastViewedList: (newData: any[]) => void,
  toggleIsWorking: (newState: boolean) => void,
  toggleLoading: (newState: boolean) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/${route}`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((res) => {
      setLastViewedList(res.data);
      toggleIsWorking(true);
      toggleLoading(false);
    })
    .catch((err) => {
      toggleIsWorking(false);
      toggleLoading(false);
    });
};

export default getLastViews;
