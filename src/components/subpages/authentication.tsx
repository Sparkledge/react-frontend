import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  ForgotPasswordContainer,
  ForgotPasswordErrorHeader,
} from "src/styled/subpages/forgotPassword";

import verifyEmail from "src/connectionFunctions/signin/verifyEmail";
import Template from "src/components/subcomponents/template";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";

const AuthenticationPanel:React.FC = () => {
  const [verificationState, setVerificationState] = useState<number>(0); // 0 - nothing yet, 1 - verified, 2 - failed to verify

  const { token } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (token === undefined || token.length === 0) navigate("/");
    else {
      verifyEmail(token, setVerificationState);
    }
  }, []);

  useEffect(() => {
    if (verificationState === 1) navigate("/signin");
  }, [verificationState]);

  return (
    <Template headTagTitle="Weryfikacja - Sparkledge" fallbackComponent={<SearchingPreloaderComponent />}>
      <ForgotPasswordContainer className="block-center">
        {
                    verificationState === 2 ? (
                      <ForgotPasswordErrorHeader className="block-center">
                        Coś poszło nie tak. Spróbuj ponownie
                      </ForgotPasswordErrorHeader>
                    ) : verificationState === 1 ? (
                      <ForgotPasswordErrorHeader className="block-center">
                        Weryfikacja skończona. Przejdź do panelu logowania
                      </ForgotPasswordErrorHeader>
                    ) : <SearchingPreloaderComponent />
                }
      </ForgotPasswordContainer>
    </Template>
  );
};

export default AuthenticationPanel;
