import React from "react";

import { Preloader } from "src/styled/main";
import Template from "../subcomponents/template";

const LandingComponent = React.lazy(() => import("../helperComponents/welcome/landingComponent"));
const DescribeComponent = React.lazy(() => import("../helperComponents/welcome/describeComponents"));
const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));

const Welcome:React.FC = () => (
  <Template
    headTagTitle="Sparkledge - The spark of your knowledge"
    fallbackComponent={<Preloader className="block-center">Ładowanie...</Preloader>}
  >
    <LandingComponent />    
    <DescribeComponent />  
    <FooterComponent />
  </Template>
);

export default Welcome;
