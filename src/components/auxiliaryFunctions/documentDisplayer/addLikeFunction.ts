import axios from "axios";

const addLike = async(docId: string|undefined, loginUserSelector:string, isLiked: boolean, likesNumber: number,
            setLikesNumber: (newState: number) => void,
    toggleIsLiked: (newState: boolean) => void) => {
        if(docId !== undefined){
            await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/likes`, {
                    documentId: docId
            }, {
                headers: {
                     "Content-Type": "application/json",
                     "Authorization": `Bearer ${loginUserSelector}`,
                } 
            })
            .then((res) => {
                setLikesNumber(isLiked ? likesNumber-1 : likesNumber+1);
                toggleIsLiked(!isLiked);
            })
            .catch((err) => {
                console.log(err);
            })

        }
}

export default addLike;