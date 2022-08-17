/* 
    The logout function signs user out of the application
*/

import axios from "axios";

const logout = async (
  currentToken: string,
  deleteToken: () => {},
  eraseTheMemory: (newState: string | any) => void,
  setRefreshUserId: (newState: string | any) => void,
  toggleIsOpened: (newState: boolean) => void,
) => {
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/users/logout`, {}, {
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((res) => {
      if (res.status === 200 || res.status === 204) {
        deleteToken();
        eraseTheMemory(undefined);
        setRefreshUserId(undefined);
        toggleIsOpened(false);
      }
    })
    .catch(() => { deleteToken(); });
};

export default logout;
