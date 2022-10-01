/*
    The resetPassword function is used for reseting user's password
*/

import axios from "axios";

const resetPassword = async (email: string, token: string, newPassword: string, callbackState: (newState: number) => void) => {
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/resetPassword/${email}/${token}`, {
    newPassword,
  })
    .then((res) => {
      // console.log(res);
      callbackState(1);
    })
    .catch((err) => {
      // console.log(err);
      callbackState(2);
    });
};

export default resetPassword;
