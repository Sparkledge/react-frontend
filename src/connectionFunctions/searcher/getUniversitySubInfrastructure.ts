/* 
    The getUniversitySubInfrastructure is a function that we can use for getting info
    about faculty, programmes or courses available at the university (the logic is pretty the same, so that is the
        reason why we have only 1 function to handle both of these cases)
*/

import axios from "axios";

const getUniversitySubInfrastructure = async (
  infrastructureList: any[],
  setInfrastructureList: (newData: any[]) => void,
  searchedInfrastructure: string,
  destination: string,
  setSearcherState: (newState: any) => void,
  oldInfrastructure?: string,
  isSearcherBoolean?: boolean,
) => {
  setInfrastructureList([]);
    
  let infrastructureId:string = "";

  const uniData: { id: string, name: string } = infrastructureList.filter((elem: { id: string, name: string }) => elem.id === oldInfrastructure)[0];

  if (destination === "faculties" && oldInfrastructure !== undefined && uniData.name.length > 0) {
    infrastructureId = uniData.id;
  } else {
    infrastructureId = uniData.id;
  }

  const path = `${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/${destination}/${uniData.id}`;

  await axios.get(path, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      setInfrastructureList(res.data);
    })
    .catch((err) => {
      setSearcherState(isSearcherBoolean ? false : 3);
    });    
};

export default getUniversitySubInfrastructure;
