/*

    The commentComponent is meant to be used for displaying a single comment under a document

*/

import React, { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SendIcon from "@mui/icons-material/Send";

import {
  CommentContainer, CommentContainerAuthor, 
  CommentContainerContent, CommentContainerInteractivePart, 
  CommentContainerInteractiveInfo, CommentContainerInteractiveInfoLabel,
  CommentContainerInteractiveCommentInput, 
} from "src/styled/subpages/documentDisplayer/commentingSectionDisplay";

interface CommentComponentInterface {
  author: string,
  content: string,
  commentId: number,
  documentLikesNumber: number,
}

const CommentComponent:React.FC<CommentComponentInterface> = ({
  author,
  content,
  commentId,
  documentLikesNumber,
} : CommentComponentInterface) => {
  const [isLiked, toggleIsLiked] = useState<boolean>(false);
  const [likesNumber, setLikesNumber] = useState<number>(documentLikesNumber + 1);
  const [currentComment, setCurrentComment] = useState<string>("");
    
  const SendASubcomment = () => {

  };
    
  useEffect(() => {
    isLiked ? setLikesNumber(likesNumber + 1) : setLikesNumber(likesNumber - 1);
  }, [isLiked]);

  return (
    <CommentContainer className="block-center">
      <CommentContainerAuthor>
        {author}
      </CommentContainerAuthor>
      <CommentContainerContent>
        {content}
      </CommentContainerContent>
      <CommentContainerInteractivePart>
            
        <CommentContainerInteractiveInfo>
          <CommentContainerInteractiveInfoLabel onClick={() => toggleIsLiked(!isLiked)} isClickable>
            <ThumbUpIcon style={{ color: "inherit", fontSize: "1.2em", verticalAlign: "center" }} />
          </CommentContainerInteractiveInfoLabel>
          <CommentContainerInteractiveInfoLabel>{likesNumber}</CommentContainerInteractiveInfoLabel>
        </CommentContainerInteractiveInfo>

        <CommentContainerInteractiveCommentInput
          type="text"
          placeholder="Napisz komentarz..."
          value={currentComment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentComment(e.currentTarget.value)}
          onKeyPress={(e : React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && currentComment.length > 0 ? SendASubcomment() : null}
        />
        <CommentContainerInteractiveInfo isSendingButton>
          <CommentContainerInteractiveInfoLabel onClick={() => SendASubcomment()} isClickable>
            <SendIcon style={{ color: "inherit", fontSize: "1.5em" }} />
          </CommentContainerInteractiveInfoLabel>
        </CommentContainerInteractiveInfo>
      </CommentContainerInteractivePart>
    </CommentContainer>
  );
};

export default CommentComponent;
