import React, {Suspense, useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import useLocalStorage from "use-local-storage";

import { MainContainer, Preloader } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter  } from "../../styled/subpages/welcome";
import { AboutHeader } from "../../styled/subpages/about";
import { SigningPanelWrapper, SigningPanelInput, SigningPanelButton,
    ErrorLabel } from "../../styled/subpages/signing";

import { setNewToken } from "../../redux/actions/generalActions";
import { RootState } from "../../redux/mainReducer";

interface SigningInterface{
    mode: number
}

const BackgroundPattern = require("../../assets/pattern_background4_1.webp");
const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"))

const SigningPanel:React.FC<SigningInterface> = ({mode}: SigningInterface) => {

    const [Login, setLogin] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [userSurname, setUserSurname] = useState<string>("");
    const [isSuccess, toggleIsSuccess] = useState<boolean>(false);
    const [isVerificationSuccessful, toggleIsVerificationSuccessful] = useState<number>(0); // 0 - status unknown, 1 - verified, 2 - verification failed
    const [Password, setPassword] = useState<string>("");
    const [RepeatedPassword, setRepeatedPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u","");
    const currentToken:string = useSelector((state:RootState) => state.generalData.currentToken);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const useQuery:any = () => new URLSearchParams(useLocation().search);
    const query = useQuery();

    const TriggerTheShot = () : void => {
        toggleIsSuccess(false);
        if((mode === 1 && Login.length !== 0 && Password.length !== 0) || 
        (mode === 2 && Login.length !== 0 && Password.length !== 0 && userName.length !== 0 && userSurname.length !== 0)){
            const objectToSend = mode === 1 ? {
                email: Login,
                password: Password
            } : {
                email: Login,
                firstName: userName,
                lastName: userSurname,
                password: Password
            };

            setError("");
            if(mode === 1){
                axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/auth/`, objectToSend, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((res) => {
                    if(res.status === 200) {
                        setPassword("");
                        setLogin("");
                        dispatch(setNewToken(res.data.accessToken));
                        setMemoryUserId(res.data.accessToken);
                        navigate("/panel");
                    }
                    else {
                        toggleIsSuccess(false); setPassword("Coś poszło nie tak");
                    }
                })
                .catch((err) => {
                    err.response.status === 403 ? setError("Dokończ proces rejestracji") : setError("Coś poszło nie tak. Spróbuj ponownie");
                })

            }
            else{

                axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/register/`, objectToSend, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((res) => {
                    if(res.status === 201) 
                        toggleIsSuccess(true) 
                    else {
                        toggleIsSuccess(false); setPassword("Coś poszło nie tak");
                    }
                })
                .catch(() => {
                    setError("Coś poszło nie tak. Spróbuj ponownie");
                })
            }
        }
    }

    const verifyEmail = async(verifyCode: string) => {
        await axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/register/verify/${verifyCode}`)
        .then((res) => {
            toggleIsVerificationSuccessful(1);
        })
        .catch((err) => {
            toggleIsVerificationSuccessful(2);
            toggleIsSuccess(true);
            
        })
    }

    useEffect(() => {
        toggleIsVerificationSuccessful(0);
        toggleIsSuccess(false);
        if(currentToken.length > 0) navigate("/panel");
        const verifyCode:string = query.get("verifyemail");
        if(verifyCode !== null && verifyCode.length > 0) verifyEmail(verifyCode);
    }, [])

    return <MainContainer className="block-center">
        <Suspense fallback={<Preloader className="block-center">Ładowanie...</Preloader>}>
            <LandingSectionWrapper className="block-center" source={BackgroundPattern} backgroundSize="initial"
            bottomPadding={10} backgroundRepeat="repeat">
                <LandingSectionFilter>
                    <AboutHeader className="block-center">
                        {isVerificationSuccessful === 2 ? "Błąd weryfikacji. Spróbuj ponownie." :
                        isVerificationSuccessful === 1 ? "Profil zweryfikowany. Zaloguj się" : mode === 1 ? "Panel logowania" : isSuccess === false ? "Panel rejestracji" :  "Potwierdź rejestrację klikając w link wysłany na podany adres e-mail"}    
                    </AboutHeader>
                    {
                        (mode === 2 && isSuccess) || isVerificationSuccessful === 2 ? <></> : <SigningPanelWrapper className="block-center">
                        <SigningPanelInput className="block-center" type={mode === 1 ? "text" : "email"} placeholder={mode === 1 ? "Login..." : "Email..."}
                            value={Login} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} required
                            marginBottom={mode === 2 ? 1 : 2}/>
                            {
                                mode === 2 ? <>
                                <SigningPanelInput className="block-center" type="text" placeholder="Imię..."
                                    marginBottom={1} value={userName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.currentTarget.value)} required/>
                                <SigningPanelInput className="block-center" type="text" placeholder="Nazwisko..."
                                    marginBottom={1} value={userSurname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserSurname(e.currentTarget.value)} required/>
                                
                                </>: <></>
                            }
                        <SigningPanelInput className="block-center" type="password" placeholder="Hasło..."
                            marginBottom={mode === 1 ? 20 : 1} value={Password} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} 
                            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && mode === 1 ? TriggerTheShot() : null} required/>
                        {
                            
                            mode === 2 ? <SigningPanelInput className="block-center" type="password" placeholder="Powtórz hasło..."
                            marginBottom={10} value={RepeatedPassword} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatedPassword(e.target.value)}
                            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && mode === 2 ? TriggerTheShot() : null} required/> : <></>
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
                    }
                </LandingSectionFilter>
            </LandingSectionWrapper>
            <FooterComponent/>
        </Suspense>
    </MainContainer>
};

export default SigningPanel;