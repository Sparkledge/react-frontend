import React, { useState, useEffect, Suspense } from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";
import {
  ForgotPasswordContainer, ForgotPasswordHeader, ForgotPasswordDescription,
  ForgotPasswordEmailInput, 
  ForgotPasswordSubmitBtn,
} from "src/styled/subpages/forgotPassword";

import BackgroundPattern from "src/assets/pattern_background4_1.webp";
import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

const ForgotPassword:React.FC = () => {
  const [currentEmail, setCurrentEmail] = useState<string>("");

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");

  const navigate = useNavigate();

  const validateIfEmail = ():boolean => {
    const regexValue:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return regexValue.test(String(currentEmail).toLowerCase());
  };

  useEffect(() => {
    if (memoryUserId !== undefined && memoryUserId.length > 0) navigate("/panel");
  }, []);

  return (
    <MainContainer className="block-center">
      <Suspense fallback={<SearchingPreloaderComponent />}>
        <LandingSectionWrapper
          className="block-center"
          backgroundSize="initial"
          source={BackgroundPattern}
          backgroundRepeat="repeat"
        >
          <LandingSectionFilter>
            <ForgotPasswordContainer className="block-center">
              <ForgotPasswordHeader className="block-center">
                Reset hasła
              </ForgotPasswordHeader>
              <ForgotPasswordDescription className="block-center">
                Podaj email Twojego konta w naszym serwisie
              </ForgotPasswordDescription>
              <ForgotPasswordEmailInput
                type="email"
                placeholder="Adres e-mail..."
                className="block-center"
                value={currentEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentEmail(e.currentTarget.value)}
              />
              {currentEmail.length > 0 && validateIfEmail() ? (
                <ForgotPasswordSubmitBtn type="button">
                  Wyślij
                </ForgotPasswordSubmitBtn>
              ) : null}
            </ForgotPasswordContainer>
          </LandingSectionFilter>
        </LandingSectionWrapper>
        <FooterComponent />
      </Suspense>
    </MainContainer>
  );
};

export default ForgotPassword;
