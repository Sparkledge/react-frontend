import React, { Suspense } from "react";

import { MainContainer, Preloader } from "src/styled/main";
import HeadTags from "src/components/subcomponents/headTags";

const LandingComponent = React.lazy(() => import("../helperComponents/welcome/landingComponent"));
const DescribeComponent = React.lazy(() => import("../helperComponents/welcome/describeComponents"));
const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));

const Welcome:React.FC = () => (
  <MainContainer className="block-center">
    <HeadTags areAdsOn={false} title="Sparkledge - The spark of your knowledge" description="" />
    <Suspense fallback={<Preloader className="block-center">Ładowanie...</Preloader>}>
      <LandingComponent />    
      <DescribeComponent />  
      <FooterComponent />
    </Suspense>
  </MainContainer>
);

export default Welcome;
