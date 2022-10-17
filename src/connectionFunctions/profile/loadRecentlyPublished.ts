/* 

   The loadRecentlyPublished function is meant to be used for loading the recently published materials of a user identified by a 
   given ID 

*/

import axios from "axios";

const loadRecentlyPublished = async (
  userId: string,
  setLastViewedList: (newState: any[]) => void,
  toggleIsWorking: (newState: boolean) => void,
  toggleLoading: (newState: boolean) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/getPublishedDocumentsByUserId/${userId}`, {
    headers: {
      "Content-Type": "application/json",
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

export default loadRecentlyPublished;
