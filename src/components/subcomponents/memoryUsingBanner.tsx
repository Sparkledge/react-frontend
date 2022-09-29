/* 

    The MemoryUsingBanner component is used to allow user to accept our therms of memory use

*/

import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import {
  MemoryUsingBannerContainer, MemoryUsingBannerHeader,
  MemoryUsingBannerContent, MemoryUsingBannerButton, 
} from "src/styled/subcomponents/memoryUsingBanner";

interface MemoryUsingBannerInterface {
  toggleIsUserConsent: (newState: boolean) => void,
}

const MemoryUsingBanner:React.FC<MemoryUsingBannerInterface> = ({ toggleIsUserConsent }:MemoryUsingBannerInterface) => {
  const location = useLocation();
  
  return location.pathname === "/terms" ? null : (
    <MemoryUsingBannerContainer className="block-center">
      <MemoryUsingBannerHeader className="block-center">
        Memory alert
      </MemoryUsingBannerHeader>
      <MemoryUsingBannerContent className="block-center">
        Pragniemy poinformować, że nasza strona używa local storage Twojego urządzenia celem zapisu preferencji wyszukiwania oraz danych logowania. 
        <br />
        W celu dokładniejszego zapoznania się z zasadzami obowiązującymi w serwisie Sparkledge, 
        {" "}
        <Link to="/terms"> Otwórz stronę z regulaminem </Link>
      </MemoryUsingBannerContent>
      <MemoryUsingBannerButton className="block-center" onClick={() => toggleIsUserConsent(true)}>
        Akceptuję warunki serwisu
      </MemoryUsingBannerButton>
    </MemoryUsingBannerContainer>
  );
};

export default MemoryUsingBanner;
