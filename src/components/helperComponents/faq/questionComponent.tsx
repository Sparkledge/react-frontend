/* 

    The QuestionComponent component is meant to be used for rendering questions in FAQ section

*/

import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  QuestionWrapper, QuestionUpperPart, QuestionContent, QuestionArrow, 
  QuestionAnswerContent,
} from "src/styled/subpages/faq";

interface QuestionComponentInterface {
  header: string,
  children: JSX.Element | string
}

const QuestionComponent:React.FC<QuestionComponentInterface> = ({
  header,
  children,
} : QuestionComponentInterface) => {
  const [isOpened, toggleIsOpened] = useState<boolean>(false);

  return (
    <QuestionWrapper className="block-center">
      <QuestionUpperPart className="block-center" onClick={() => toggleIsOpened(!isOpened)}>
        <QuestionContent>
          {header}
        </QuestionContent>
        <QuestionArrow>
          {
                isOpened ? <ArrowDropUpIcon style={{ color: "inherit", fontSize: "inherit" }} />
                  : <ArrowDropDownIcon style={{ color: "inherit", fontSize: "inherit" }} />
            }
        </QuestionArrow>
      </QuestionUpperPart>
      <QuestionAnswerContent className="block-center" isOpened={isOpened}>
        {children}
      </QuestionAnswerContent>
    </QuestionWrapper>
  );
};

export default QuestionComponent;
