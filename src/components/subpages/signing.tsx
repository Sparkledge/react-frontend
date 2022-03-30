import React, {Suspense, useState} from "react";
import axios from "axios";

import { MainContainer, Preloader } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter  } from "../../styled/subpages/welcome";
import { AboutHeader } from "../../styled/subpages/about";
import { SigningPanelWrapper, SigningPanelInput, SigningPanelButton,
    ErrorLabel } from "../../styled/subpages/signing";

interface SigningInterface{
    mode: number
}

const BackgroundPattern = require("../../assets/pattern_background.webp");
const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"))

const SigningPanel:React.FC<SigningInterface> = ({mode}: SigningInterface) => {

    const [Login, setLogin] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const TriggerTheShot = () : void => {
        if(Login.length !== 0 || Password.length !== 0){
            const objectToSend = {
                Login: Login,
                Passwd: Password
            };

            setError("");

            axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/auth`, objectToSend, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => console.log(res))
            .catch(() => {
                setError("Coś poszło nie tak. Spróbuj ponownie");
            })
        }
    }

    return <MainContainer className="block-center">
        <Suspense fallback={<Preloader className="block-center">Ładowanie...</Preloader>}>
            <LandingSectionWrapper className="block-center" source={BackgroundPattern} backgroundSize="contain">
                <LandingSectionFilter>
                    <AboutHeader className="block-center">
                        {mode === 1 ? "Panel logowania" : "Panel rejestracji"}    
                    </AboutHeader>
                    <SigningPanelWrapper className="block-center">
                        <SigningPanelInput className="block-center" type="text" placeholder="Login..."
                            value={Login} onChange={(e) => setLogin(e.target.value)} required/>
                        <SigningPanelInput className="block-center" type="password" placeholder="Hasło..."
                            marginBottom={20} value={Password} onChange={(e) => setPassword(e.target.value)} required/>
                        <SigningPanelButton className="block-center" onClick={() => TriggerTheShot()}>
                            Zaloguj się    
                        </SigningPanelButton>
                        {
                            error.length > 0 ? <ErrorLabel className="block-center">
                                {error}
                            </ErrorLabel> : <></>
                        }
                    </SigningPanelWrapper>
                </LandingSectionFilter>
            </LandingSectionWrapper>
            <FooterComponent/>
        </Suspense>
    </MainContainer>
};

export default SigningPanel;