import React, {Suspense} from "react";

import { MainContainer, Preloader } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter  } from "../../styled/subpages/welcome";
import { AboutHeader } from "../../styled/subpages/about";
import { SigningPanelWrapper, SigningPanelInput, SigningPanelButton } from "../../styled/subpages/signing";

interface SigningInterface{
    mode: number
}

const BackgroundPattern = require("../../assets/pattern_background.webp");
const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"))

const SigningPanel:React.FC<SigningInterface> = ({mode}: SigningInterface) => {
    return <MainContainer className="block-center">
        <Suspense fallback={<Preloader className="block-center">Ładowanie...</Preloader>}>
            <LandingSectionWrapper className="block-center" source={BackgroundPattern} backgroundSize="contain">
                <LandingSectionFilter>
                    <AboutHeader className="block-center">
                        {mode === 1 ? "Panel logowania" : "Panel rejestracji"}    
                    </AboutHeader>
                    <SigningPanelWrapper className="block-center">
                        <SigningPanelInput className="block-center" type="text" placeholder="Login..."/>
                        <SigningPanelInput className="block-center" type="password" placeholder="Hasło..."
                            marginBottom={20}/>
                        <SigningPanelButton className="block-center">
                            Zaloguj się    
                        </SigningPanelButton>
                    </SigningPanelWrapper>
                </LandingSectionFilter>
            </LandingSectionWrapper>
            <FooterComponent/>
        </Suspense>
    </MainContainer>
};

export default SigningPanel;