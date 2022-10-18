/* 
    The deleteMaterial function is meant to be used for deleting materials from the database
*/

import axios from "axios";

export type LastPublishedItemType = {
  id: string,
  title: string,
  publishedOn: string,
  likes: number,
  views: number,
  createdAt: string,
  viewsNumber?: number,
  likesNumber?: number,
};

const deleteMaterial = async (
  userToken: string, 
  id: string | undefined,
  dataToTransform?: LastPublishedItemType[],
  transformUserData?: (newState: LastPublishedItemType[]) => void,
  booleanCallback?: (newState: boolean) => void,
) => {
  await axios.delete(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/${id}`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  })
    .then((res) => {
      if (dataToTransform !== undefined && transformUserData !== undefined) {
        const operand = [...dataToTransform];
        transformUserData(operand.filter((elem: LastPublishedItemType) => elem.id !== id));
      }
      if (booleanCallback !== undefined) {
        booleanCallback(true);
      }
    })
    .catch((err) => {
    
    });
};

export default deleteMaterial;
