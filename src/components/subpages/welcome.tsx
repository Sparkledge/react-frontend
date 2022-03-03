import React from "react";

import { MainContainer } from "../../styled/main";

import LandingComponent from "../helperComponents/welcome/landingComponent";
import DescribeComponent from "../helperComponents/welcome/describeComponents";

const Welcome:React.FC = () => {
    return <MainContainer className="block-center">
        <LandingComponent/>
        <DescribeComponent/>
    </MainContainer>
};

export default Welcome;