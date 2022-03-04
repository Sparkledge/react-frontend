import React from "react";

import { MainContainer } from "../../styled/main";
import { AboutHeader } from "../../styled/subpages/about";

const About:React.FC = () => {
    return <MainContainer className="block-center">
        <AboutHeader className="block-center">
            O nas
        </AboutHeader>
    </MainContainer>
};

export default About;