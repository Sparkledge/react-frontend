import React, { Suspense } from "react";

import { MainContainer, Preloader } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";
import { AboutHeader, AboutDesc } from "src/styled/subpages/about";
import HeadTags from "src/components/subcomponents/headTags";

const TeamWidgetsSection = React.lazy(() => import("../helperComponents/about/TeamWidgetsSection"));
const SpecialThanksSection = React.lazy(() => import("../helperComponents/about/SpecialThanksSection"));
const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));
const BackgroundPattern = require("../../assets/pattern_background5.webp");

const About:React.FC = () => (
  <MainContainer className="block-center">
    <HeadTags areAdsOn={false} title="O nas - Sparkledge" description="" />
    <Suspense fallback={<Preloader className="block-center">Ładowanie...</Preloader>}>
      <LandingSectionWrapper
        className="block-center"
        source={BackgroundPattern}
        backgroundSize="initlal"
        backgroundRepeat="repeat"
      >
        <LandingSectionFilter>
          <AboutHeader className="block-center">
            O nas
          </AboutHeader>
          <AboutDesc className="block-center">
            Cześć! 
            <br />
            Bardzo miło nam, że korzystasz z naszej platformy. Mamy nadzieje, że ułatwia Ci ona studiowanie. 
            Oto kilka słow o nas, żebyś mógł/mogła nas lepiej poznać. 
            Cała nasza ekipa studiuje na kierunku Computer Science na wydziale MiNI PW. Tam tez się poznaliśmy.
          </AboutDesc>
          <TeamWidgetsSection />
          <SpecialThanksSection />
        </LandingSectionFilter>
      </LandingSectionWrapper>
      <FooterComponent />
    </Suspense>
  </MainContainer>
);

export default About;
