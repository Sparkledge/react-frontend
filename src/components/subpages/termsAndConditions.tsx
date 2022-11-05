import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";
import {
  TermsAndConditionsHeader, TermsAndConditionsParagraphsContainer, 
  TermsAndConditionsParagraph, 
} from "src/styled/subpages/termsAndConditions";

import BackgroundPattern from "src/assets/pattern_background5.webp";
import HeadTags from "src/components/subcomponents/headTags";
import RodoSection from "src/components/helperComponents/termsAndConditions/rodo";
import LicenceSection from "src/components/helperComponents/termsAndConditions/licence";
import LawsAndResponsibilities from "src/components/helperComponents/termsAndConditions/lawsAndResponsibilities";
import LinksSection from "src/components/helperComponents/termsAndConditions/links";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

const TermsAndConditions:React.FC = () => (
  <MainContainer className="block-center">
    <HeadTags areAdsOn={false} title="Regulamin - Sparkledge" description="" />
    <LandingSectionWrapper
      className="block-center"
      source={BackgroundPattern}
      backgroundSize="initial"
      backgroundRepeat="repeat"
      bottomPadding={60}
    >
      <LandingSectionFilter>
        <TermsAndConditionsHeader className="block-center">
          Regulamin
        </TermsAndConditionsHeader>
        <TermsAndConditionsParagraphsContainer className="block-center">
          <TermsAndConditionsParagraph className="block-center" isHeader>
            Witamy w Sparkledge!
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Niniejszy regulamin określa zasady korzystania ze Strony internetowej Sparkledge, dostępnej pod adresem  
            <Link to="/" style={{ marginLeft: "0.1em" }}>
              https://sparkledge.pl
            </Link>
            . Użytkownik wchodząc na Stronę internetową, akceptuje niniejsze warunki. W przypadku braku akceptacji niniejszych warunków Użytkownik powinien opuścić Stronę Sparkledge.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center" isHeader>
            Pliki cookie
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Na tej Stronie internetowej wykorzystujemy pliki cookie, aby spersonalizować doświadczenia online naszych odbiorców. Wchodząc na Stronę Sparkledge, wyrażasz zgodę na używanie wymaganych plików cookie.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Plik cookie to plik tekstowy, który jest umieszczany przez serwer strony internetowej na dysku twardym komputera Użytkownika. Pliki cookie nie mogą być wykorzystywane do uruchamiania programów lub przenoszenia wirusów na komputer Użytkownika. Pliki cookie są ściśle przypisane do danego użytkownika i mogą być odczytane tylko przez serwer internetowy w domenie, która wygenerowała plik cookie.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Pliki cookie mogą być wykorzystywane do zbierania, przechowywania i śledzenia informacji w celach statystycznych lub marketingowych związanych z prowadzeniem naszej Strony internetowej. Użytkownik ma prawo zaakceptować lub odmówić zaakceptowania opcjonalnych plików cookie. Niektóre pliki cookie są wymagane i niezbędne do prawidłowego funkcjonowania Strony internetowej. Takie pliki cookie nie wymagają zgody, ponieważ są aktywne przez cały czas. Pamiętaj , że akceptując wymagane pliki cookie, akceptujesz również pliki cookie stron trzecich, które mogą być wykorzystywane przez inne podmioty podczas korzystania z usług świadczonych przez te podmioty.
          </TermsAndConditionsParagraph>
          <RodoSection />
          <LicenceSection />
          <LinksSection />
          <LawsAndResponsibilities />
        </TermsAndConditionsParagraphsContainer>
      </LandingSectionFilter>
    </LandingSectionWrapper>
    <Suspense fallback={null}>
      <FooterComponent />
    </Suspense>

  </MainContainer>
);

export default TermsAndConditions;
