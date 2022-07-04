import axios from "axios";
import jwt from 'jwt-decode';

const getTheData = async(loginUserSelector: string, toggleIsFile: (newState: boolean) => void,
    docId: string, setTitle: (newState: string) => void, setLikesNumber: (newState: number) => void, toggleIsLiked: (newState: boolean) => void,
    setViewsNumber: (newState: number) => void, setFileAuthor: (newState: string) => void, 
    setDescriptionOfFile: (newState: string) => void, toggleIsError: (newState: boolean) => void, 
    setFileSrc: (newState: any) => void, smallDevicesWidthChecker: boolean ) => {
    if(loginUserSelector.length > 0 ){
        toggleIsFile(false);
        await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/getDocument/${docId}`,{
            headers: {
                "Authorization": `Bearer ${loginUserSelector}`,
                'Content-Type': 'application/json',
            }
        })
        .then(async(res) => {
            let id:any = jwt(loginUserSelector);
            setTitle(res.data.title);
            setLikesNumber(res.data.likesNum);
            toggleIsLiked(res.data.likes.find((elem: string) => elem === id.UserInfo.id) === undefined ? false : true);
            setViewsNumber(res.data.viewsNum);
            setFileAuthor(res.data.creatorEmail);
            setDescriptionOfFile(res.data.description);
            id = null;
            await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents/${res.data.fileKey}`, {
                headers: {
                    "Authorization": `Bearer ${loginUserSelector}`,
                    'Accept': 'application/pdf'
                },
                responseType: 'arraybuffer',
            }).then((res) => {
                toggleIsFile(true);
                //setFile(res.data);
                const tmp_path = (window.URL ? URL : webkitURL).createObjectURL(new Blob([res.data], {
                    type: "application/pdf",
                }))
                setFileSrc(tmp_path)
                if(!smallDevicesWidthChecker){
                    const pdfWindow = window.open();
                    if(pdfWindow !== null){
                        pdfWindow.location.href = tmp_path;
                    }
                }
                URL.revokeObjectURL(tmp_path);

            })
            .catch((err) => {
                toggleIsFile(false);
                toggleIsError(true);
            });
        })
        .catch((err) => {
            console.log(err);
            toggleIsError(true);
        });
    }
};

export default getTheData;