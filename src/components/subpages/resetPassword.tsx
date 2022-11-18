import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import {
  ForgotPasswordContainer, ForgotPasswordHeader, ForgotPasswordDescription,
  ForgotPasswordEmailInput, 
  ForgotPasswordSubmitBtn,
  ForgotPasswordErrorHeader,
  ForgotPasswordSuccessDescription,
} from "src/styled/subpages/forgotPassword";

import { ForgotPasswordButton, ErrorLabel } from "src/styled/subpages/signing";

import Template from "src/components/subcomponents/template";
import resetPassword from "src/connectionFunctions/forgotPassword/resetPassword";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";

import checkIfPasswordIsStrong from "src/components/auxiliaryFunctions/forgotPassword/checkIfPasswordIsStrong";

const ResetPassword:React.FC = () => {
  const [passwd, setPasswd] = useState<string>("");
  const [passwdRep, setPasswdRep] = useState<string>("");
  const [resetState, setResetState] = useState<number>(0); // 0 - start, 1 - success, 2 - error

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");

  const { email, token } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (email === undefined || token === undefined) navigate("/signin");
    else if (memoryUserId !== undefined && memoryUserId.length > 0) navigate("/panel");
  }, []);

  useEffect(() => {
    if (resetState === 1) navigate("/signin");
  }, [resetState]);

  return (
    <Template headTagTitle="Reset hasła - Sparkledge" fallbackComponent={<SearchingPreloaderComponent />}>
      <ForgotPasswordContainer className="block-center">
        {resetState === 0 ? (
          <>
            <ForgotPasswordHeader className="block-center">
              Reset hasła
            </ForgotPasswordHeader>
            <ForgotPasswordEmailInput
              type="password"
              placeholder="Nowe hasło..."
              className="block-center"
              value={passwd}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswd(e.currentTarget.value)}
            />
            <ForgotPasswordEmailInput
              type="password"
              placeholder="Powtórz hasło..."
              className="block-center"
              value={passwdRep}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswdRep(e.currentTarget.value)}
              isSecondPhase
            />
            {passwd.length > 0 && passwdRep.length > 0 && checkIfPasswordIsStrong(passwd) && passwd === passwdRep ? (
              <ForgotPasswordSubmitBtn
                type="button"
                onClick={() => email !== undefined && token !== undefined 
                  ? resetPassword(email, token, passwd, setResetState) : {}}
              >
                Zmień hasło
              </ForgotPasswordSubmitBtn>
            ) : passwd.length > 0 && !checkIfPasswordIsStrong(passwd)
              ? (
                <ErrorLabel isUsedForReset className="block-center">
                  Hasło powinno mieć długość co najmniej 8 znaków, jedną małą i jedną wielką literę
                </ErrorLabel>
              ) : passwdRep.length > 0 && passwd !== passwdRep ? (
                <ErrorLabel isUsedForReset className="block-center">
                  Hasła nie są identyczne
                </ErrorLabel>
              ) : null}
          </>
        ) : (
          <ForgotPasswordErrorHeader className="block-center">
            {resetState === 1 ? "Hasło zostało zmienione. Przejdź do logowania" : "Coś poszło nie tak. Spróbuj ponownie później"}
          </ForgotPasswordErrorHeader>
        )}
      </ForgotPasswordContainer>

    </Template>
  );
};

export default ResetPassword;
