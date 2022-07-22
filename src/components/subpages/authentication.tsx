import React, { useEffect, useState, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

import verifyEmail from "src/connectionFunctions/signin/verifyEmail";
import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

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
          </LandingSectionFilter>
        </LandingSectionWrapper>
        <FooterComponent />
      </Suspense>
    </MainContainer>
  );
};

export default AuthenticationPanel;
