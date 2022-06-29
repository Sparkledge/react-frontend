/*
    In this file, all the logic regarding sending the comment is handled
    
    NOTE: currently it's a template, so it doesn't have the entire logic implemented
*/

import React, {useState, useEffect} from "react";
import SendIcon from '@mui/icons-material/Send';
import useMediaQuery from '@mui/material/useMediaQuery';

import { CommentingWrapper, CommentingFormTextarea, 
    CommentingFormButton } from "../../../styled/subpages/documentDisplayer/commentingSectionForm";

const CommentingForm: React.FC = () => {

    const [commentText, setCommentText] = useState<string>("");
    const isDeviceSmallerThanLaptop = useMediaQuery(`(min-width: 1024px)`);

    const SendTheComment = () : void => {
        /*
            TODO: implement the connection with the backend after backend is ready
        */
    }

    return <CommentingWrapper className="block-center">
        <CommentingFormTextarea placeholder="Napisz komentarz..." 
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCommentText(e.currentTarget.value)}
            onKeyPress={(e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === "Enter" && commentText.length > 0 && !isDeviceSmallerThanLaptop ? SendTheComment() : {}}
            value={commentText}></CommentingFormTextarea>
        <CommentingFormButton type="button" onClick={() => SendTheComment()}>
            <SendIcon style={{color: "inherit", fontSize: "inherit"}}/>
        </CommentingFormButton>
    </CommentingWrapper>;
};

export default CommentingForm;