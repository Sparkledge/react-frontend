/*
    The verifyByGoogleData function is meant to be used for passing data from google to our backend
    in order to sign the user in
*/

import axios from "axios";

const VerifyByGoogleData = async (
  googleToken: string,
  toggleIsSuccess: (newState: boolean) => void,
  setAccessToken: (newToken: string) => void,
  setRefreshToken: (newToken: string) => void,
  setError: (newError: string) => void,
) => {
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/authentication/google`, {
    token: googleToken,
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      toggleIsSuccess(true);
    })
    .catch((err) => {
      setError("Coś poszło nie tak. Spróbuj ponownie");
    });
};

export default VerifyByGoogleData;
