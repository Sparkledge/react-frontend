import React from "react";

import { Preloader } from "src/styled/main";
import { AboutHeader, AboutDesc } from "src/styled/subpages/about";
import Template from "src/components/subcomponents/template";

const TeamWidgetsSection = React.lazy(() => import("../helperComponents/about/TeamWidgetsSection"));
const SpecialThanksSection = React.lazy(() => import("../helperComponents/about/SpecialThanksSection"));

const About:React.FC = () => (
  <Template headTagTitle="O nas - Sparkledge" fallbackComponent={<Preloader className="block-center">Ładowanie...</Preloader>}>
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
  </Template>
);

export default About;
