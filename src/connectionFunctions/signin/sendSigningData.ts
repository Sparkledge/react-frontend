import axios from "axios";

const TriggerTheShot = (
  mode: number,
  toggleIsSuccess: (newState: boolean) => void,
  Login: string,
  Password: string,
  userName: string,
  userSurname: string,
  setError: (newState: string) => void,
  setPassword: (newState: string) => void,
  setLogin: (newState: string) => void,
  changeTheToken: (newState: string) => void,
  setRefreshToken: (newState: string) => void,
  navigate: any,
) : void => {
  toggleIsSuccess(false);
  if ((mode === 1 && Login.length !== 0 && Password.length !== 0) 
    || (mode === 2 && Login.length !== 0 && Password.length !== 0 && userName.length !== 0 && userSurname.length !== 0)) {
    const objectToSend = mode === 1 ? {
      email: Login,
      password: Password,
    } : {
      email: Login,
      firstName: userName,
      lastName: userSurname,
      password: Password,
    };

    setError("");
    if (mode === 1) {
      axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/signin`, objectToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          setPassword("");
          setLogin("");
          setRefreshToken(res.data.refreshToken);
          changeTheToken(res.data.accessToken);
        } else {
          toggleIsSuccess(false); setPassword("Coś poszło nie tak");
        }
      })
        .catch((err) => {
          err.response.status !== undefined && err.response.status === 403 ? setError("Dokończ proces rejestracji") : setError("Coś poszło nie tak. Spróbuj ponownie");
        });
    } else {
      axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/signup`, objectToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 201) toggleIsSuccess(true); 
        else {
          toggleIsSuccess(false); setPassword("Coś poszło nie tak");
        }
      })
        .catch((err) => {
          // console.log(err);
          setError("Coś poszło nie tak. Spróbuj ponownie");
        });
    }
  }
};

export default TriggerTheShot;
