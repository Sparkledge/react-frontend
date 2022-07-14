import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  LandingSectionWrapper, LandingSectionFilter,
  LandingSectionHeader, LandingSectionSpan,
  LandingSectionDesc, LandingButtonWrapper, LandingSectionButton, 
} from "../../../styled/subpages/welcome";

const Background = require("../../../assets/academic_background_edited_2.webp");

const LandingComponent:React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [textPosition, setTextPosition] = useState<number>(100);
  const [buttonPosition, setButtonPosition] = useState<number>(100);

  useEffect(() => {
    setTimeout(() => {
      setHeaderHeight(2.5);
      setTimeout(() => {
        setTextPosition(0);
        setTimeout(() => setButtonPosition(0), 200);
      }, 200);
    }, 200);
  }, []);

  return (
    <LandingSectionWrapper className="block-center" source={Background}>
      <LandingSectionFilter>
        <LandingSectionHeader className="block-center" height={headerHeight}>
          <span className="block-center">Sparkledge</span>
          <LandingSectionSpan>Spark of your knowledge</LandingSectionSpan>
        </LandingSectionHeader>
        <LandingSectionDesc className="block-center" leftPos={textPosition}>
          Sparkledge to platforma łącząca studentów, dającą im możliwość rozwoju i osiągania lepszych wyników. 
          Sparklege to platforma stworzona przez studentów dla studentów. 
          Znajdziesz na niej notatki Twoich znajomych oraz absolwentów ocenione przez innych użytkowników. 
          Dzięki niej nauka do kolosów będzie przyjemniejsza.
          Jedyne co musisz zrobić aby dostać dostęp do skarbnicy wiedzy to załączyć swoje notataki
        </LandingSectionDesc>
        <LandingButtonWrapper className="block-center" rightPos={buttonPosition}>
          <Link to="/signup">
            <LandingSectionButton className="block-center">
              Dołącz do nas
            </LandingSectionButton>
          </Link>
        </LandingButtonWrapper>
      </LandingSectionFilter>
    </LandingSectionWrapper>
  );
};

export default LandingComponent;
