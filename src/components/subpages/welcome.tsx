import React from "react";

import { MainContainer } from "../../styled/main";

import LandingComponent from "../helperComponents/welcome/landingComponent";
import DescribeComponent from "../helperComponents/welcome/describeComponents";
import FooterComponent from "../helperComponents/welcome/footerComponent";

const Welcome:React.FC = () => {
    return <MainContainer className="block-center">
        <LandingComponent/>
        <DescribeComponent/>
        <FooterComponent/>
    </MainContainer>
};

export default Welcome;