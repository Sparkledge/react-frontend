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
    const [userName, setUserName] = useState<string>("");
    const [userSurname, setUserSurname] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const [RepeatedPassword, setRepeatedPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const TriggerTheShot = () : void => {
        if((mode === 1 && Login.length !== 0 && Password.length !== 0) || 
        (mode === 2 && Login.length !== 0 && Password.length !== 0 && userName.length !== 0 && userSurname.length !== 0)){
            const objectToSend = mode === 1 ? {
                Login: Login,
                Passwd: Password
            } : {
                email: Login,
                firstName: userName,
                lastName: userSurname,
                password: Password
            };

            setError("");
            if(mode === 1){
                axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/auth`, objectToSend, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((res) => console.log(res))
                .catch(() => {
                    setError("Coś poszło nie tak. Spróbuj ponownie");
                })

            }
            else{

                axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/register`, objectToSend, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((res) => console.log(res))
                .catch(() => {
                    setError("Coś poszło nie tak. Spróbuj ponownie");
                })
            }
        }
    }

    return <MainContainer className="block-center">
        <Suspense fallback={<Preloader className="block-center">Ładowanie...</Preloader>}>
            <LandingSectionWrapper className="block-center" source={BackgroundPattern} backgroundSize="contain"
            bottomPadding={10}>
                <LandingSectionFilter>
                    <AboutHeader className="block-center">
                        {mode === 1 ? "Panel logowania" : "Panel rejestracji"}    
                    </AboutHeader>
                    <SigningPanelWrapper className="block-center">
                        <SigningPanelInput className="block-center" type={mode === 1 ? "text" : "email"} placeholder={mode === 1 ? "Login..." : "Email..."}
                            value={Login} onChange={(e) => setLogin(e.target.value)} required
                            marginBottom={mode === 2 ? 1 : 2}/>
                            {
                                mode === 2 ? <>
                                <SigningPanelInput className="block-center" type="text" placeholder="Imię..."
                                    marginBottom={1} value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                                <SigningPanelInput className="block-center" type="text" placeholder="Nazwisko..."
                                    marginBottom={1} value={userSurname} onChange={(e) => setUserSurname(e.target.value)} required/>
                                
                                </>: <></>
                            }
                        <SigningPanelInput className="block-center" type="password" placeholder="Hasło..."
                            marginBottom={mode === 1 ? 20 : 1} value={Password} onChange={(e) => setPassword(e.target.value)} required/>
                        {
                            
                            mode === 2 ? <SigningPanelInput className="block-center" type="password" placeholder="Powtórz hasło..."
                            marginBottom={10} value={RepeatedPassword} onChange={(e) => setRepeatedPassword(e.target.value)} required/> : <></>
                        }
                        <SigningPanelButton className="block-center" onClick={() => TriggerTheShot()}>
                            {mode === 1 ? "Zaloguj" : "Zarejestruj"} się    
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