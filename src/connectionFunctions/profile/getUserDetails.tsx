/* 

    The getUserDetails function is meant to be used for getting the user's data from the DB in order to display it in the profile section

*/

import axios from "axios";

const getUserDetails = async (
  userId: string,
  route: string,
  setUserName: (newState: string) => void,
  setUserEmail: (newState: string) => void,
  setUserJoiningDate: (newState: string) => void,
  setDescription: (newState: string) => void,
  setFacebook: (newState: string) => void,
  setInstagram: (newState: string) => void,
  setLinkedin: (newState: string) => void,
  setPinterest: (newState: string) => void,
  setUserId?: (newState: string) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/getUserBy${route}WithoutDetails/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res.data);
      if (setUserId !== undefined) setUserId(res.data.id);
      setUserName(`${res.data.firstName} ${res.data.lastName}`);
      setUserEmail(res.data.email);
      setDescription(res.data.description);
      setFacebook(res.data.facebookUrl);
      setInstagram(res.data.instagramUrl);
      setLinkedin(res.data.linkedinUrl);
      setPinterest(res.data.pinterestUrl);
      const userJoiningDate:string = res.data.joinedAt.substring(0, 10).split("-").reverse().join(".");
      setUserJoiningDate(userJoiningDate);
    })
    .catch((err) => {
      setUserEmail("undefined");
    });
};

export default getUserDetails;
