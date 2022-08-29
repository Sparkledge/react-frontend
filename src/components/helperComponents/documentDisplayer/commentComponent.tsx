/*

    The commentComponent is meant to be used for displaying a single comment under a document

*/

import React, { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import {
  CommentContainer, CommentContainerAuthor, 
  CommentContainerContent, CommentContainerInteractivePart, 
  CommentContainerInteractiveInfo, CommentContainerInteractiveInfoLabel,
} from "src/styled/subpages/documentDisplayer/commentingSectionDisplay";

import deleteComment from "src/connectionFunctions/documentDisplayer/deleteComment";

interface CommentComponentInterface {
  author: string,
  content: string,
  commentId: number,
  documentLikesNumber: number,
  loginUserSelector: string,
  isUserTheAuthorOfComment: boolean,
  successCallback: (idToDelete: number) => void,
}

const CommentComponent:React.FC<CommentComponentInterface> = ({
  author,
  content,
  commentId,
  documentLikesNumber,
  loginUserSelector,
  isUserTheAuthorOfComment,
  successCallback,
} : CommentComponentInterface) => {
  const [isLiked, toggleIsLiked] = useState<boolean>(false);
  const [isDeleteingFailing, toggleIsDeletingFailing] = useState<boolean>(false);
  const [likesNumber, setLikesNumber] = useState<number>(documentLikesNumber + 1);
    
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
        {isUserTheAuthorOfComment ? (
          <CommentContainerInteractiveInfo>
            <CommentContainerInteractiveInfoLabel onClick={() => deleteComment(commentId, loginUserSelector, successCallback, toggleIsDeletingFailing)} isClickable>
              <DeleteForeverIcon style={{ color: !isDeleteingFailing ? "inherit" : "red", fontSize: "1.5em" }} />
            </CommentContainerInteractiveInfoLabel>
          </CommentContainerInteractiveInfo>
        ) : null}
      </CommentContainerInteractivePart>
    </CommentContainer>
  );
};

/* 

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

*/

export default CommentComponent;
