import axios from "axios";

const verifyEmail = async (
  verifyCode: string, 
  toggleIsVerificationSuccessful: (newState: number) => void,
  toggleIsSuccess: (newState: boolean) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/register/verify/${verifyCode}`)
    .then((res) => {
      toggleIsVerificationSuccessful(1);
    })
    .catch((err) => {
      toggleIsVerificationSuccessful(2);
      toggleIsSuccess(true);
    });
};

export default verifyEmail;
