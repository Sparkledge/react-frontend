/*
    Here is the file where we handle displaying the comment section

    NOTE: currently it's a template, so it doesn't have the entire logic implemented
*/

import React, { useState, useEffect } from "react";

import { CommentingWrapper } from "../../../styled/subpages/documentDisplayer/commentingSectionForm";
import { CommentContainer, CommentContainerAuthor, 
    CommentContainerContent, CommentContainerInteractivePart, 
    CommentContainerInteractiveInfo, CommentContainerInteractiveInfoLabel,
    CommentContainerInteractiveCommentInput } from "../../../styled/subpages/documentDisplayer/commentingSectionDisplay";

import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';

const CommentingSectionDisplay:React.FC = () => {

    const [likesNumber, setLikesNumber] = useState<number>(192);
    const [isLiked, toggleIsLiked] = useState<boolean>(false);
    const [currentComment, setCurrentComment] = useState<string>("");

    const SendASubcomment = () => {

    }

    useEffect(() => {
        isLiked ? setLikesNumber(likesNumber+1) : setLikesNumber(likesNumber-1);
    }, [isLiked]);

    return <CommentingWrapper className="block-center">
        <CommentContainer className="block-center">
            <CommentContainerAuthor>
                Autor
            </CommentContainerAuthor>
            <CommentContainerContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laborum et laudantium, aliquid optio modi tempora accusamus quae enim, possimus blanditiis assumenda autem numquam repellendus. Voluptate, id laboriosam. Provident, recusandae?
            </CommentContainerContent>
            <CommentContainerInteractivePart>
                
                <CommentContainerInteractiveInfo>
                    <CommentContainerInteractiveInfoLabel onClick={() => toggleIsLiked(!isLiked)} isClickable={true}>
                        <ThumbUpIcon style={{color: "inherit", fontSize: "1.2em", verticalAlign: "center"}}/>
                    </CommentContainerInteractiveInfoLabel>
                    <CommentContainerInteractiveInfoLabel>{likesNumber}</CommentContainerInteractiveInfoLabel>
                </CommentContainerInteractiveInfo>

                <CommentContainerInteractiveCommentInput type="text" placeholder="Napisz komentarz..."
                    value={currentComment} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentComment(e.currentTarget.value)}
                    onKeyPress={(e : React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && currentComment.length > 0 ? SendASubcomment() : null}/>
                <CommentContainerInteractiveInfo isSendingButton={true}>
                    <CommentContainerInteractiveInfoLabel onClick={() => SendASubcomment()} isClickable={true}>
                        <SendIcon style={{color: "inherit", fontSize: "1.5em"}}/>
                    </CommentContainerInteractiveInfoLabel>
                </CommentContainerInteractiveInfo>
            </CommentContainerInteractivePart>
        </CommentContainer>
    </CommentingWrapper>;
};

export default CommentingSectionDisplay;