import React, { Suspense } from "react";
import { MainContainer, Preloader } from "../../styled/main";
import { Link } from "react-router-dom";
import {
  NotfoundPanelButton,
  NotfoundWrapper,
  NotfoundHeader1,
  NotfoundHeader2,
} from "../../styled/subpages/notfound";
import {
  LandingSectionWrapper,
  LandingSectionFilter,
} from "../../styled/subpages/welcome";
const BackgroundImage = require("../../assets/notfound_background.jpg");
const FooterComponent = React.lazy(
  () => import("../helperComponents/welcome/footerComponent")
);

const Notfound: React.FC = () => {
  return (
    <MainContainer className="block-center">
      <Suspense
        fallback={<Preloader className="block-center">Ładowanie...</Preloader>}
      >
        <LandingSectionWrapper>
          <NotfoundWrapper>
            <NotfoundHeader1 className="block-center">#404</NotfoundHeader1>
            <NotfoundHeader2 className="block-center">
              Ups... Nie znaleziono strony
            </NotfoundHeader2>
            <Link to="/">
              <NotfoundPanelButton className="block-center">
                Powrót
              </NotfoundPanelButton>
            </Link>
          </NotfoundWrapper>
        </LandingSectionWrapper>
        <FooterComponent />
      </Suspense>
    </MainContainer>
  );
};

export default Notfound;
