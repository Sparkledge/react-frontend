/* 

    The getUserDetails function is meant to be used for getting the user's data from the DB in order to display it in the profile section

*/

import axios from "axios";

const getUserDetails = async (
  userId: string,
  setUserName: (newState: string) => void,
  setUserEmail: (newState: string) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/getUserByIdWithoutDetails/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      setUserName(`${res.data.firstName} ${res.data.lastName}`);
      setUserEmail(res.data.email);
    })
    .catch((err) => {
      setUserEmail("undefined");
    });
};

export default getUserDetails;
