import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  LandingSectionWrapper, LandingSectionFilter,
  LandingSectionHeader, LandingSectionSpan,
  LandingSectionDesc, LandingButtonWrapper, LandingSectionButton, 
} from "src/styled/subpages/welcome";

import Background from "src/assets/academic_background3_1.webp";

const LandingComponent:React.FC = () => (
  <LandingSectionWrapper className="block-center" source={null}>
    <LandingSectionFilter>
      <LandingSectionHeader className="block-center">
            
        <motion.div
          layout
          animate={{ height: ["0", "2.5em"] }}
          transition={{
            duration: 0.2, delay: 0.2, type: "spring", stiffness: 100, 
          }}
        >
          <span className="block-center">Sparkledge</span>
          <LandingSectionSpan>Spark of your knowledge</LandingSectionSpan>

        </motion.div>
          
      </LandingSectionHeader>
      <motion.div 
        layout
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          duration: 0.3, delay: 0.4, type: "spring", stiffness: 100, 
        }}
      >
        <LandingSectionDesc className="block-center">
          Sparkledge to platforma łącząca studentów, dającą im możliwość rozwoju i osiągania lepszych wyników.
          Znajdziesz na niej notatki Twoich znajomych oraz absolwentów ocenione przez innych użytkowników. 
          Jedyne co musisz zrobić aby dostać dostęp do skarbnicy wiedzy to załączyć swoje notatki
        </LandingSectionDesc>
      </motion.div>
      <motion.div 
        layout
        animate={{ x: ["100%", "0%"] }}
        transition={{
          duration: 0.3, delay: 0.6, type: "spring", stiffness: 100, 
        }}
      >
        <LandingButtonWrapper className="block-center">
          <Link to="/signup">
            <LandingSectionButton className="block-center">
              Dołącz do nas
            </LandingSectionButton>
          </Link>
        </LandingButtonWrapper>

      </motion.div>
    </LandingSectionFilter>
  </LandingSectionWrapper>
);

export default LandingComponent;
