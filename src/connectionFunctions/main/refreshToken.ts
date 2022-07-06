/* 
    The refreshToken function refreshes user's token
*/

import axios from "axios";

const refreshToken = async (
  userRefreshToken: string, 
  changeAccessToken: (newToken: string) => void,
  changeRefreshToken: (newToken: string) => void,
) => {
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/refresh`, {}, {
    headers: {
      Authorization: `Bearer ${userRefreshToken}`,
    },
  })
    .then((res) => {
      changeAccessToken(res.data.accessToken);
      changeRefreshToken(res.data.refreshToken);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default refreshToken;
