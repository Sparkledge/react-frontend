/*

    The reportMaterial function is meant to sent reports to the application's backend

*/

import axios from "axios";

export enum ReportType {
  MINECOPYRIGHTSVIOLATION = "MINECOPYRIGHTSVIOLATION",
  SOMEONESCOPYRIGHTSVIOLATION = "SOMEONESCOPYRIGHTSVIOLATION",
  HATEFULCONTENT = "HATEFULCONTENT",
  INAPPROPRIATECONTENT = "INAPPROPRIATECONTENT",
  SEXUALCONTENT = "SEXUALCONTENT",
  OTHER = "OTHER",
  DEFAULT = "DEFAULT",
}

const reportMaterial = async (
  documentId: string,
  loginUserSelector: string,
  reportType: ReportType,
  content: string,
  setRequestResult: (newState: number) => void,
) => {
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/report/add-report`, {
    documentId,
    reportType,
    content,
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginUserSelector}`,
    }, 
  })
    .then(() => {
      setRequestResult(1);
    })
    .catch(() => {
      setRequestResult(2);
    });
};

export default reportMaterial;
