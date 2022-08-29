/*
    Here is the file where we handle displaying the comment section

    NOTE: currently it's a template, so it doesn't have the entire logic implemented
*/

import React from "react";
import jwt_decode from "jwt-decode";

import { CommentingWrapper } from "src/styled/subpages/documentDisplayer/commentingSectionForm";
import { DescriptionDataHeader } from "src/styled/subpages/documentDisplayer";

import CommentComponent from "./commentComponent";

interface CommentingSectionDisplayInterface {
  loginUserSelector: string,
  commentsList: any[],
  isError: boolean,
  successCallback: (idToDelete: number) => void,
}

const CommentingSectionDisplay:React.FC<CommentingSectionDisplayInterface> = ({
  loginUserSelector, 
  commentsList, 
  isError, 
  successCallback,
}:CommentingSectionDisplayInterface) => {
  const userData:any = jwt_decode(loginUserSelector);

  return (
    <CommentingWrapper className="block-center">
      {
        commentsList.length > 0 ? commentsList.map((elem: any, ind: number) => (
          <CommentComponent
            commentId={elem.id}
            author={(`${elem.author.firstName} ${elem.author.lastName}`).length > 30 ? `${(`${elem.author.firstName} ${elem.author.lastName}`).substring(0, 27)}...` : (`${elem.author.firstName} ${elem.author.lastName}`)}
            content={elem.content}
            documentLikesNumber={elem.likesNumber}
            loginUserSelector={loginUserSelector}
            isUserTheAuthorOfComment={elem.userId === parseInt(userData.id, 10)}
            successCallback={successCallback}

          />
        )) : !isError ? (
          <DescriptionDataHeader className="block-center">
            Bądź pierwszym użytkownikiem, który doda komentarz
          </DescriptionDataHeader>
        ) : (
          <DescriptionDataHeader className="block-center">
            Coś poszło nie tak. Zajrzyj tu później
          </DescriptionDataHeader>
        )
      }
    </CommentingWrapper>
  );
};

export default CommentingSectionDisplay;
