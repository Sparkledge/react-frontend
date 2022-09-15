import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { MainContainer, Preloader } from "src/styled/main";
import {
  NotfoundPanelButton,
  NotfoundWrapper,
  NotfoundHeader1,
  NotfoundHeader2,
} from "src/styled/subpages/notfound";
import {
  LandingSectionWrapper,
  LandingSectionFilter,
} from "src/styled/subpages/welcome";
import HeadTags from "src/components/subcomponents/headTags";

const BackgroundImage = require("../../assets/notfound_background.jpg");

const FooterComponent = React.lazy(
  () => import("../helperComponents/welcome/footerComponent"),
);

const Notfound: React.FC = () => (
  <MainContainer className="block-center">
    <HeadTags areAdsOn={false} title="Error 404 - Sparkledge" description="" />
    <Suspense
      fallback={<Preloader className="block-center">Ładowanie...</Preloader>}
    >
      <LandingSectionWrapper>
        <NotfoundWrapper source={BackgroundImage}>
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

export default Notfound;
