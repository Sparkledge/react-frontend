import React, { Suspense } from "react";
import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";
import { FAQHeader, FAQDescription, QuestionsContainer } from "src/styled/subpages/faq";
import BackgroundPattern from "src/assets/pattern_background5.webp";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";
import HeadTags from "src/components/subcomponents/headTags";

import QuestionComponent from "src/components/helperComponents/faq/questionComponent";

import FAQList, { FAQQuestionType } from "src/data/faq";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

const FAQ:React.FC = () => (
  <MainContainer className="block-center">
    <HeadTags areAdsOn={false} title="FAQ - Sparkledge" description="Tutaj możesz dowiedzieć się co nieco o naszej aplikacji" />
    <Suspense fallback={<SearchingPreloaderComponent />}>
      <LandingSectionWrapper
        className="block-center"
        backgroundSize="initial"
        source={BackgroundPattern}
        backgroundRepeat="repeat"
      >
        <LandingSectionFilter>
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
        </LandingSectionFilter>
      </LandingSectionWrapper>
    </Suspense>
    <Suspense fallback={null}>
      <FooterComponent />
    </Suspense>
  </MainContainer>
);

export default FAQ;
