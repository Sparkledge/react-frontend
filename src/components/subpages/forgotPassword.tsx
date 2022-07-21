import React, { useState, useEffect, Suspense } from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";
import {
  ForgotPasswordContainer, ForgotPasswordHeader, ForgotPasswordDescription,
  ForgotPasswordEmailInput, 
  ForgotPasswordSubmitBtn,
  ForgotPasswordErrorHeader,
  ForgotPasswordSuccessDescription,
} from "src/styled/subpages/forgotPassword";

import BackgroundPattern from "src/assets/pattern_background4_1.webp";
import startTheProcedure from "src/connectionFunctions/forgotPassword/startTheProcedure";
import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

import validateIfEmail from "../auxiliaryFunctions/forgotPassword/validateIfEmail";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

const ForgotPassword:React.FC = () => {
  const [currentEmail, setCurrentEmail] = useState<string>("");
  const [pageStatus, setPageStatus] = useState<number>(0); // 0 - normal, 1 - request sent, 2 - connection error

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");

  const navigate = useNavigate();

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
              {
                pageStatus === 0 ? (
                  <>
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
                    {currentEmail.length > 0 && validateIfEmail(currentEmail) ? (
                      <ForgotPasswordSubmitBtn type="button" onClick={() => startTheProcedure(currentEmail, setPageStatus)}>
                        Wyślij
                      </ForgotPasswordSubmitBtn>
                    ) : null}
                  </>
                ) : pageStatus === 1 ? (
                  <>
                    <ForgotPasswordErrorHeader className="block-center">
                      Link został wysłany
                    </ForgotPasswordErrorHeader>
                    <ForgotPasswordSuccessDescription className="block-center">
                      Otwórz treść maila, aby dokończyć zmianę hasła
                    </ForgotPasswordSuccessDescription>
                  </>
                ) : (
                  <ForgotPasswordErrorHeader className="block-center">
                    Coś poszło nie tak. Spróbuj ponownie później
                  </ForgotPasswordErrorHeader>
                )
              }
              
            </ForgotPasswordContainer>
          </LandingSectionFilter>
        </LandingSectionWrapper>
        <FooterComponent />
      </Suspense>
    </MainContainer>
  );
};

export default ForgotPassword;
