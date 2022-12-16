/* 

    The checkTheTypeOfAccount function is used to check whether the currently signed-in user has an account fully set up in Sparkledge
    or their do log in via google account

*/

import axios from "axios";

const checkTheTypeOfAccount = async (
  memoryUserId: string,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/getMe`, {
    headers: {
      Authorization: `Bearer ${memoryUserId}`,
    },
  }).then((res) => {
    console.log(res.data);
  })
    .catch((err) => {
      console.log(err);
    });
};

export default checkTheTypeOfAccount;
