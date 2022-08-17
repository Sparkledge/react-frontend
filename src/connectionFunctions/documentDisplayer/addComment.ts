/* 

    The addComment function is meant to be used for adding a comment to a precised document

*/

import axios from "axios";

const addComment = async (
  docId: string,
  loginUserSelector: string,
  commentContent: string,
  putCommentToTheList: (newComment: any) => void,
) => {
  await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/comments/add-comment`, {
    documentId: docId,
    content: commentContent,
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginUserSelector}`,
    },
  })
    .then((res) => {
      console.log(res);
      putCommentToTheList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default addComment;
