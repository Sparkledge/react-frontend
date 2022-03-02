import React from "react";

import { MainContainer } from "../../styled/main";

import LandingComponent from "../helperComponents/welcome/landingComponent";

const Welcome:React.FC = () => {
    return <MainContainer className="block-center">
        <LandingComponent/>
    </MainContainer>
};

export default Welcome;