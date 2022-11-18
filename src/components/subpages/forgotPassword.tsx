import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

import {
  ForgotPasswordContainer, ForgotPasswordHeader, ForgotPasswordDescription,
  ForgotPasswordEmailInput, 
  ForgotPasswordSubmitBtn,
  ForgotPasswordErrorHeader,
  ForgotPasswordSuccessDescription,
} from "src/styled/subpages/forgotPassword";

import Template from "src/components/subcomponents/template";
import startTheProcedure from "src/connectionFunctions/forgotPassword/startTheProcedure";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";

import validateIfEmail from "src/components/auxiliaryFunctions/forgotPassword/validateIfEmail";

const ForgotPassword:React.FC = () => {
  const [currentEmail, setCurrentEmail] = useState<string>("");
  const [pageStatus, setPageStatus] = useState<number>(0); // 0 - normal, 1 - request sent, 2 - connection error

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");

  const navigate = useNavigate();

  useEffect(() => {
    if (memoryUserId !== undefined && memoryUserId.length > 0) navigate("/panel");
  }, []);

  return (
    <Template headTagTitle="Reset hasła - Sparkledge" fallbackComponent={<SearchingPreloaderComponent />}>
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
    </Template>
  );
};

export default ForgotPassword;
