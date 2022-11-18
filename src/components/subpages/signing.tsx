import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "use-local-storage";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useMediaQuery } from "@mui/material";

import { AboutHeader } from "src/styled/subpages/about";
import {
  SigningPanelWrapper, SigningPanelInput, SigningPanelButton,
  ErrorLabel, 
  ForgotPasswordButton,
  TermsAndConditionsSection,
  TermsAndConditionsCheckBox,
  TermsAndConditionsLabel,
  SigningGoogleButtonWrapper,
} from "src/styled/subpages/signing";

import Template from "src/components//subcomponents/template";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";

import TriggerTheShot from "src/connectionFunctions/signin/sendSigningData";
import VerifyByGoogleData from "src/connectionFunctions/signin/verifyByGoogleData";

import { setNewToken } from "src/redux/actions/generalActions";
import { RootState } from "src/redux/mainReducer";

interface SigningInterface {
  mode: number
}

const SigningPanel:React.FC<SigningInterface> = ({ mode }: SigningInterface) => {
  const [Login, setLogin] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userSurname, setUserSurname] = useState<string>("");
  const [isSuccess, toggleIsSuccess] = useState<boolean>(false);
  // const [isVerificationSuccessful, toggleIsVerificationSuccessful] = useState<number>(0); // 0 - status unknown, 1 - verified, 2 - verification failed
  const [Password, setPassword] = useState<string>("");
  const [RepeatedPassword, setRepeatedPassword] = useState<string>("");
  const [isLoading, toggleIsLoading] = useState<boolean>(false);
  const [rulesAccepted, toggleRulesAccepted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");
  const [refreshUserId, setRefreshUserId] = useLocalStorage<string>("u_r", "");
  const currentToken:string = useSelector((state:RootState) => state.generalData.currentToken);
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
    
  const useQuery:any = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  const graphicalMode: number = useSelector(
    (state: RootState) => state.generalData.graphicalMode,
  );

  const isVerySmallDevice = useMediaQuery("(min-width: 320px)");

  const sendTheData = () => {
    toggleIsLoading(true);
    TriggerTheShot(
      mode, 
      toggleIsSuccess, 
      Login, 
      Password, 
      userName, 
      userSurname,
      setError, 
      setPassword, 
      setLogin, 
      (newToken: string) => {
        setMemoryUserId(newToken);
        dispatch(setNewToken(newToken));
      }, 
      setRefreshUserId, 
      toggleIsLoading,
    );
  };

  useEffect(() => {
    // toggleIsVerificationSuccessful(0);
    toggleIsSuccess(false);
    if (currentToken !== undefined && memoryUserId !== undefined && currentToken.length > 0 && memoryUserId.length > 0) navigate("/panel");
    // const verifyCode:string = query.get("verifyemail");
    // if (verifyCode !== null && verifyCode.length > 0) toggleIsVerificationSuccessful(1);// verifyEmail(verifyCode, toggleIsVerificationSuccessful, toggleIsSuccess);
  }, [currentToken, memoryUserId]);

  return (
    <Template headTagTitle={`${mode === 1 ? "Logowanie - " : "Rejestracja - "}Sparkledge`}>
      <AboutHeader className="block-center">
        { mode === 1 
          ? "Panel logowania" : isSuccess === false 
            ? "Panel rejestracji" : "Potwierdź rejestrację klikając w link wysłany na podany adres e-mail"}    
      </AboutHeader>
      {
              (mode === 2 && isSuccess) ? null : (
                <SigningPanelWrapper className="block-center">
                  <SigningPanelInput
                    className="block-center"
                    type={mode === 1 ? "text" : "email"}
                    placeholder={mode === 1 ? "Login..." : "Email..."}
                    value={Login}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
                    required
                    marginBottom={mode === 2 ? 1 : 2}
                  />
                  {
                      mode === 2 ? (
                        <>
                          <SigningPanelInput
                            className="block-center"
                            type="text"
                            placeholder="Imię..."
                            marginBottom={1}
                            value={userName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.currentTarget.value)}
                            required
                          />
                          <SigningPanelInput
                            className="block-center"
                            type="text"
                            placeholder="Nazwisko..."
                            marginBottom={1}
                            value={userSurname}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserSurname(e.currentTarget.value)}
                            required
                          />
                      
                        </>
                      ) : null
                  }
                  <SigningPanelInput
                    className="block-center"
                    type="password"
                    placeholder="Hasło..."
                    marginBottom={mode === 1 ? 8 : 1}
                    value={Password} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} 
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && mode === 1 ? sendTheData() : null}
                    required
                  />
                  {
                  
                  mode === 2 ? (
                    <>
                      <SigningPanelInput
                        className="block-center"
                        type="password"
                        placeholder="Powtórz hasło..."
                        marginBottom={4}
                        value={RepeatedPassword} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatedPassword(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && mode === 2 ? sendTheData() : null}
                        required
                      />
                      <TermsAndConditionsSection className="block-center">
                        <TermsAndConditionsCheckBox type="checkbox" checked={rulesAccepted} onClick={() => toggleRulesAccepted(!rulesAccepted)} />
                        <TermsAndConditionsLabel>
                          Akceptuję 
                          {" "}
                          <Link to="/terms">regulamin serwisu</Link>
                        </TermsAndConditionsLabel>
                      </TermsAndConditionsSection>
                    </>
                  ) : null
              }
                  {
                isLoading ? <SearchingPreloaderComponent /> : (
                  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                    <SigningGoogleButtonWrapper className="block-center">
                      <GoogleLogin
                        onSuccess={(credentialResponse: any) => {
                          toggleIsLoading(true);
                          VerifyByGoogleData(
                            credentialResponse.credential, 
                            toggleIsSuccess,
                            (newToken: string) => {
                              setMemoryUserId(newToken);
                              dispatch(setNewToken(newToken));
                            }, 
                            (newToken: string) => setRefreshUserId(newToken), 
                            setError,
                          );
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          setError("Coś poszło nie tak. Spróbuj ponownie");
                        }}
                        useOneTap
                        theme={graphicalMode === 0 ? "filled_blue" : "filled_black"}
                        size={isVerySmallDevice ? "large" : "small"}
                        logo_alignment="center"
                      />
                    </SigningGoogleButtonWrapper>
                  </GoogleOAuthProvider>
                )
              }
                  {isLoading || (mode === 2 && (Login.length === 0 || Password.length === 0 || RepeatedPassword.length === 0 
                  || userName.length === 0 || userSurname.length === 0 || !rulesAccepted)) ? null : (
                    <SigningPanelButton className="block-center" onClick={() => sendTheData()}>
                      {mode === 1 ? "Zaloguj" : "Zarejestruj"}
                      {" "}
                      się    
                    </SigningPanelButton>
                    )}
                  {
                    mode === 1 ? (
                      <Link to="/forgotPassword">
                        <ForgotPasswordButton className="block-center">
                          Nie pamiętam hasła
                        </ForgotPasswordButton>
                      </Link>
                    ) : null
                  }
                  {
                  error.length > 0 ? (
                    <ErrorLabel className="block-center">
                      {error}
                    </ErrorLabel>
                  ) : null
              }
                </SigningPanelWrapper>
              )
          }

    </Template>
  );
};

export default SigningPanel;
