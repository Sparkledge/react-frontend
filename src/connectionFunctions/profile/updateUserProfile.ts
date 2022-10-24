/*

    The updateUserProfile function is meant to be used for updating the data for the user's profile

*/

import axios from "axios";
import jwtDecode from "jwt-decode";

const updateUserProfile = async (
  userToken: string,
  facebookUrl: string,
  instagramUrl: string,
  linkedinUrl: string,
  pinterestUrl: string,
  description: string,
  setUserDesc: (newState: string) => void,
  facebook: string,
  setUserFacebook: (newState: string) => void,
  instagram: string,
  setUserInstagram: (newState: string) => void,
  linkedin: string,
  setUserLinkedin: (newState: string) => void,
  pinterest: string,
  setUserPinterest: (newState: string) => void,
) => {
  const decodedToken:{
    email: string,
    exp: number,
    iat: number,
    id: string,
    isVerified: boolean,
  } = jwtDecode(userToken);

  const userId: string = decodedToken.id;

  await axios.put(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/updateUserData`, {
    userId,
    facebookUrl,
    instagramUrl,
    linkedinUrl,
    pinterestUrl,
    description,
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  })
    .then((res) => {
      setUserDesc(description);
      setUserFacebook(facebook);
      setUserInstagram(instagram);
      setUserLinkedin(linkedin);
      setUserPinterest(pinterest);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default updateUserProfile;
