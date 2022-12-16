/* 

    The changePersonalData function sends to the backend a request for changes in the user's personal data (Name and Surname)
    and returns a callback

*/

import axios from "axios";

const changePersonalData = async (
  memoryUserId: string,
  newName: string,
  newSurname: string,
  messageCallback: (newMessage: string) => void,
  clearTheInputs: () => void,
) => {
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/changeNameSurname`, {
    firstName: newName,
    lastName: newSurname,
  }, {
    headers: {
      Authorization: `Bearer ${memoryUserId}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      clearTheInputs();
      messageCallback("Dane zaktualizowane");
    })
    .catch((err) => {
      messageCallback("Coś poszło nie tak. Spróbuj ponownie");
    });
};

export default changePersonalData;
