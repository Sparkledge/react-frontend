import axios from "axios";

const verifyEmail = async (
  verifyToken: string, 
  toggleIsSuccess: (newState: number) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/authentication/${verifyToken}`)
    .then((res) => {
      toggleIsSuccess(1);
    })
    .catch((err) => {
      toggleIsSuccess(2);
    });
};

export default verifyEmail;
