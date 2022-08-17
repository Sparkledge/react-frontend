/* 

    The deleteComment function is used for deleting a specified comment from a given document

*/

import axios from "axios";

const deleteComment = async (
  commentId: number,
  loginUserSelector: string,
  successCallback: (commentToRemove: number) => void,
  failureCallback: (newState: boolean) => void,
) => {
  await axios.delete(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/comments/delete-comment/${commentId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginUserSelector}`,
    },
  })
    .then((res) => {
      successCallback(commentId);
    })
    .catch((err) => {
      failureCallback(true);
    });
};

export default deleteComment;
