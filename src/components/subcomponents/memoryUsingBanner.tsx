/* 

    The MemoryUsingBanner component is used to allow user to accept our therms of memory use

*/

import React from "react";

import {
  MemoryUsingBannerContainer, MemoryUsingBannerHeader,
  MemoryUsingBannerContent, MemoryUsingBannerButton, 
} from "src/styled/subcomponents/memoryUsingBanner";

interface MemoryUsingBannerInterface {
  toggleIsUserConsent: (newState: boolean) => void,
}

const MemoryUsingBanner:React.FC<MemoryUsingBannerInterface> = ({ toggleIsUserConsent }:MemoryUsingBannerInterface) => (
  <MemoryUsingBannerContainer className="block-center">
    <MemoryUsingBannerHeader className="block-center">
      Memory alert
    </MemoryUsingBannerHeader>
    <MemoryUsingBannerContent className="block-center">
      Pragniemy poinformować, że nasza strona używa local storage Twojego urządzenia celem zapisu preferencji wyszukiwania oraz danych logowania.
    </MemoryUsingBannerContent>
    <MemoryUsingBannerButton className="block-center" onClick={() => toggleIsUserConsent(true)}>
      Akceptuję warunki serwisu
    </MemoryUsingBannerButton>
  </MemoryUsingBannerContainer>
);

export default MemoryUsingBanner;
