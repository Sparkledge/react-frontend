/* 
    The getProgrammeOrFacultyInfrastructure is a function that we can use both for getting info
    about faculty or programmes available at the university (the logic is pretty the same, so that is the
        reason why we have only 1 function to handle both of these cases)
*/

import axios from "axios";

const getProgrammeOrFacultyInfrastructure = async (
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

  if (destination === "faculties" && oldInfrastructure !== undefined && oldInfrastructure.length > 0) {
    infrastructureId = infrastructureList.filter((elem:any) => elem.name !== undefined && elem.name === oldInfrastructure)[0].faculties
      .filter((elem: any) => elem.name !== undefined && elem.name === searchedInfrastructure)[0]._id;
  } else {
    infrastructureId = infrastructureList.filter((elem:any) => elem.name !== undefined && elem.name === searchedInfrastructure)[0]._id;
  }

  let requestBody:Object = {};
  if (destination === "faculties") {
    requestBody = {
      ...requestBody,
      university: infrastructureId,
    };
  } else {
    requestBody = {
      ...requestBody,
      programmeId: infrastructureId,
    };
  }

  const path = `${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/${destination}&${destination === "faculties" ? "universityId" : "facultyId"}=${oldInfrastructure}`;

  await axios.post(path, requestBody, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      setInfrastructureList(destination === "faculties" ? res.data.programmes : res.data.courses);
    })
    .catch((err) => {
      console.log(err);
      setSearcherState(isSearcherBoolean ? false : 3);
    });    
};

export default getProgrammeOrFacultyInfrastructure;
