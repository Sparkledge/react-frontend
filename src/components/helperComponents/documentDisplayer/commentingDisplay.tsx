/*
    Here is the file where we handle displaying the comment section

    NOTE: currently it's a template, so it doesn't have the entire logic implemented
*/

import React from "react";
import { CommentingWrapper } from "src/styled/subpages/documentDisplayer/commentingSectionForm";
import { DescriptionDataHeader } from "src/styled/subpages/documentDisplayer";

import CommentComponent from "./commentComponent";

interface CommentingSectionDisplayInterface {
  docId: string | undefined,
  loginUserSelector: string,
  commentsList: any[],

}

const CommentingSectionDisplay:React.FC<CommentingSectionDisplayInterface> = ({ docId, loginUserSelector, commentsList }:CommentingSectionDisplayInterface) => (
  <CommentingWrapper className="block-center">
    {
        commentsList.length > 0 ? commentsList.map((elem: any, ind: number) => (
          <CommentComponent
            commentId={elem.id}
            author="test author"
            content={elem.content}
            documentLikesNumber={elem.likesNumber}
          />
        )) : (
          <DescriptionDataHeader className="block-center">
            Bądź pierwszym użytkownikiem, który doda komentarz
          </DescriptionDataHeader>
        )
      }
  </CommentingWrapper>
);

export default CommentingSectionDisplay;
