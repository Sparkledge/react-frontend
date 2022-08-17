/*
    In this file, all the logic regarding sending the comment is handled
    
    NOTE: currently it's a template, so it doesn't have the entire logic implemented
*/

import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  CommentingWrapper, CommentingFormTextarea, 
  CommentingFormButton, 
} from "src/styled/subpages/documentDisplayer/commentingSectionForm";

import addComment from "src/connectionFunctions/documentDisplayer/addComment";

interface CommentingFormInterface {
  docId: string | undefined,
  loginUserSelector: string,
  putCommentToTheList: (newComment: any) => void,
}

const CommentingForm: React.FC<CommentingFormInterface> = ({
  docId,
  loginUserSelector,
  putCommentToTheList,
}:CommentingFormInterface) => {
  const [commentText, setCommentText] = useState<string>("");
  const isDeviceSmallerThanLaptop = useMediaQuery("(min-width: 1024px)");

  const SendTheComment = () : void => {
    if (docId !== undefined) {
      addComment(docId, loginUserSelector, commentText, putCommentToTheList);
      setCommentText("");
    }
  };

  return (
    <CommentingWrapper className="block-center">
      <CommentingFormTextarea
        type="text"
        placeholder="Napisz komentarz..." 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCommentText(e.currentTarget.value)}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && commentText.length > 0 && isDeviceSmallerThanLaptop 
          ? SendTheComment() : {}}
        value={commentText}
      />
      <CommentingFormButton type="button" onClick={() => SendTheComment()}>
        <SendIcon style={{ color: "inherit", fontSize: "inherit" }} />
      </CommentingFormButton>
    </CommentingWrapper>
  );
};

export default CommentingForm;
