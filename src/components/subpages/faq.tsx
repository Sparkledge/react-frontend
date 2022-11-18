import React from "react";
import { FAQHeader, FAQDescription, QuestionsContainer } from "src/styled/subpages/faq";

import Template from "src/components/subcomponents/template";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";

import QuestionComponent from "src/components/helperComponents/faq/questionComponent";

import FAQList, { FAQQuestionType } from "src/data/faq";

const FAQ:React.FC = () => (
  <Template headTagTitle="FAQ - Sparkledge" headTagDesc="Tutaj możesz dowiedzieć się co nieco o naszej aplikacji" fallbackComponent={<SearchingPreloaderComponent />}>
    <FAQHeader className="block-center">FAQ section</FAQHeader>
    <FAQDescription className="block-center">
      Kliknij na pytanie by wyświetlić odpowiedź
    </FAQDescription>
    <QuestionsContainer className="block-center">
      {FAQList.map((elem: FAQQuestionType) => (
        <QuestionComponent header={elem.header}>
          {elem.answer}
        </QuestionComponent>
      ))}
    </QuestionsContainer>
  </Template>
);

export default FAQ;
