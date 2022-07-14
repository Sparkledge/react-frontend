import axios from "axios";

const checkIfLiked = async (
  docId: string | undefined,
  loginUserSelector: string,
  toggleIsLiked: (newState: boolean) => void,
) => {
  if (docId !== undefined && loginUserSelector.length > 0) {
    console.log(loginUserSelector);
    console.log(docId);
    await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/check-if-liked/${docId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginUserSelector}`,
      },
    })
      .then((res) => {
        toggleIsLiked(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }  
};

export default checkIfLiked;
