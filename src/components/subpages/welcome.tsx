import React, {Suspense} from "react";

import { MainContainer, Preloader } from "../../styled/main";

//import LandingComponent from "../helperComponents/welcome/landingComponent";
//import DescribeComponent from "../helperComponents/welcome/describeComponents";
//import FooterComponent from "../helperComponents/welcome/footerComponent";

const LandingComponent = React.lazy(() => import("../helperComponents/welcome/landingComponent"))
const DescribeComponent = React.lazy(() => import("../helperComponents/welcome/describeComponents"));
const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));

const Welcome:React.FC = () => {
    return <MainContainer className="block-center">
        <Suspense fallback={<Preloader className="block-center">Ładowanie...</Preloader>}>
            <LandingComponent/>    
            <DescribeComponent/>  
            <FooterComponent/>
        </Suspense>
    </MainContainer>
};

export default Welcome;