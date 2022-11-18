/* 
    The Template component is meant to be used to speed up creating 
    new pages in Sparkledge
*/

import React, { Suspense } from "react";
import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";

import HeadTags from "./headTags";

const BackgroundPattern = require("../../assets/pattern_background5.webp");

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

interface TemplateInterface {
  children: any,
  headTagTitle: string,
  headTagDesc?: string,
  bottomPadding?: number,
  fallbackComponent?: JSX.Element,
}

const Template:React.FC<TemplateInterface> = ({
  children,
  headTagTitle,
  headTagDesc,
  bottomPadding,
  fallbackComponent,
}:TemplateInterface) => (
  <MainContainer className="block-center">
    <HeadTags areAdsOn={false} title={headTagTitle} description={headTagDesc !== undefined ? headTagDesc : ""} />
    {fallbackComponent !== undefined ? (
      <Suspense fallback={fallbackComponent}>
        <LandingSectionWrapper
          className="block-center"
          source={BackgroundPattern}
          backgroundSize="initial"
          backgroundRepeat="repeat"
          bottomPadding={bottomPadding}
        >
          <LandingSectionFilter>
            {children}
          </LandingSectionFilter>
        </LandingSectionWrapper>
      </Suspense>
    ) : (
      <LandingSectionWrapper
        className="block-center"
        source={BackgroundPattern}
        backgroundSize="initial"
        backgroundRepeat="repeat"
        bottomPadding={bottomPadding}
      >
        <LandingSectionFilter>
          {children}
        </LandingSectionFilter>
      </LandingSectionWrapper>
    )}
    
    <Suspense fallback={null}>
      <FooterComponent />
    </Suspense>
  </MainContainer>
);

Template.defaultProps = {
  headTagDesc: "",
  bottomPadding: undefined,
  fallbackComponent: undefined,
};

export default Template;
