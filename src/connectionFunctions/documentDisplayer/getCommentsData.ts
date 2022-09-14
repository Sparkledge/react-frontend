/* 

    The getCommentsData function is used to retrive the document's comments from the DB

*/

import axios from "axios";

const getCommentData = async (
  docId: string,
  loginUserSelector: string,
  setCommentsList: (newComments: any[]) => void,
  toggleIsCommentsError: (newState: boolean) => void,
) => {
  await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/comments/get-comments/${docId}`, {
    headers: {
      Authorization: `Bearer ${loginUserSelector}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res.data);
      setCommentsList(res.data);
    })
    .catch((err) => {
      console.log(err);
      toggleIsCommentsError(true);
    });
};

export default getCommentData;
