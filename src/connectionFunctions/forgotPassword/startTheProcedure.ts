/*

    The startTheProcedure function is meant to be used for initializing the process of setting up new password

*/

import axios from "axios";

const startTheProcedure = async (userEmail: string, changeTheReseterState: (newState: number) => void) => {
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/sendForgotPasswordLink`, {
    email: userEmail,
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      changeTheReseterState(1);
    })
    .catch((err) => {
      console.log(err);
      changeTheReseterState(2);
    });
};

export default startTheProcedure;
