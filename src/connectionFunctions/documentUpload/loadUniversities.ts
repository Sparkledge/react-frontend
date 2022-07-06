/* 
    The loadUniversities function gets the list of universities served on Sparkledge from the backend
*/

import axios from "axios";

const loadUniversities = async (
  setUniversitiesList: (newData: any[]) => void,
  toggleIsWorking: (newState: boolean) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/universities`)
    .then((res) => {
      setUniversitiesList(res.data);
    })
    .catch(() => {
      toggleIsWorking(false);
    });
};

export default loadUniversities;
