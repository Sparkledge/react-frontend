import React, { Suspense } from "react";
import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";
import {
  TermsAndConditionsHeader, TermsAndConditionsParagraphsContainer, 
  TermsAndConditionsParagraph, 
} from "src/styled/subpages/termsAndConditions";

import BackgroundPattern from "src/assets/pattern_background5.webp";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

const TermsAndConditions:React.FC = () => (
  <MainContainer className="block-center">
    <LandingSectionWrapper
      className="block-center"
      source={BackgroundPattern}
      backgroundSize="initial"
      backgroundRepeat="repeat"
      bottomPadding={60}
    >
      <LandingSectionFilter>
        <TermsAndConditionsHeader className="block-center">
          Regulamin
        </TermsAndConditionsHeader>
        <TermsAndConditionsParagraphsContainer className="block-center">
          <TermsAndConditionsParagraph className="block-center">
            §1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores exercitationem rem iusto molestias aut doloremque magni eveniet facere at commodi, laborum delectus consectetur voluptatum eum voluptas, enim, unde necessitatibus.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            §2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores exercitationem rem iusto molestias aut doloremque magni eveniet facere at commodi, laborum delectus consectetur voluptatum eum voluptas, enim, unde necessitatibus.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            §3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores exercitationem rem iusto molestias aut doloremque magni eveniet facere at commodi, laborum delectus consectetur voluptatum eum voluptas, enim, unde necessitatibus.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            §4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores exercitationem rem iusto molestias aut doloremque magni eveniet facere at commodi, laborum delectus consectetur voluptatum eum voluptas, enim, unde necessitatibus.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            §5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores exercitationem rem iusto molestias aut doloremque magni eveniet facere at commodi, laborum delectus consectetur voluptatum eum voluptas, enim, unde necessitatibus.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            §6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores exercitationem rem iusto molestias aut doloremque magni eveniet facere at commodi, laborum delectus consectetur voluptatum eum voluptas, enim, unde necessitatibus.
          </TermsAndConditionsParagraph>
        </TermsAndConditionsParagraphsContainer>
      </LandingSectionFilter>
    </LandingSectionWrapper>
    <Suspense fallback={null}>
      <FooterComponent />
    </Suspense>

  </MainContainer>
);

export default TermsAndConditions;
