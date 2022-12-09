import React from "react";
import { Link } from "react-router-dom";
import { Preloader } from "src/styled/main";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  NotFound404, NotFoundContainer, NotFoundDescription, NotfoundPanelButton, NotFoundWrapper, 
} from "src/styled/subpages/notfound";
import Template from "../subcomponents/template";

const Notfound: React.FC = () => (
  <Template headTagTitle="Error 404 - Sparkledge" fallbackComponent={<Preloader className="block-center">Ładowanie...</Preloader>}>
    <NotFoundWrapper>
      <NotFoundContainer>
        <NotFound404>#404</NotFound404>
        <NotFoundDescription>
          Ups... Wygląda na to że strona do której próbowałeś się dostać nie istnieje 
        </NotFoundDescription>
        <Link to="/">
          <NotfoundPanelButton className="block-center">
            <ArrowBackIcon fontSize="medium" />
            Główna
          </NotfoundPanelButton>
        </Link>
      </NotFoundContainer>
    </NotFoundWrapper>
  </Template>
);

export default Notfound;
