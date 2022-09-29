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
          <TermsAndConditionsParagraph className="block-center" isHeader>
            Licencja
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            O ile nie stwierdzono inaczej, Sparkledge lub jej licencjodawcy są właścicielami praw własności intelektualnej wszystkich materiałów zamieszczonych na Stronie Sparkledge. Wszelkie prawa własności intelektualnej zostały zastrzeżone. Użytkownicy mogą uzyskać dostęp materiałów dostępnych na Stronie Sparkledge na własny użytek, z zastrzeżeniem ograniczeń określonych w niniejszym regulaminie.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Zabrania się:
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            1) Kopiowania lub ponownego publikowania materiałów umieszczonych na Stronie Sparkledge
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            2) Sprzedaży, wypożyczania lub udzielania sublicencji na materiały umieszczone na Stronie Sparkledge
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            3) Odtwarzania, powielania lub kopiowania materiałów zamieszczonych na Stronie Sparkledge
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            4) Ponownego rozpowszechniania treści zamieszczonych na Stronie Sparkledge
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Niniejsza umowa zaczyna obowiązywać w dniu jej sporządzenia.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Użytkownicy mają możliwość zamieszczania i wymiany opinii oraz informacji w niektórych częściach niniejszej Strony internetowej. Sparkledge nie filtruje, nie edytuje, nie publikuje ani nie sprawdza komentarzy przed ich umieszczeniem na Stronie. Komentarze nie odzwierciedlają poglądów i opinii Sparkledge, jej przedstawicieli ani podmiotów stowarzyszonych. Zamieszczone komentarze odzwierciedlają poglądy i opinie osoby, która je zamieściła. W zakresie przewidzianym przez obowiązujące prawo Sparkledge nie odpowiada za komentarze ani nie ponosi odpowiedzialności za jakiekolwiek zobowiązania, szkody lub wydatki spowodowane lub poniesione w wyniku wykorzystania, zamieszczenia lub pojawienia się komentarzy na niniejszej Stronie.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Sparkledge zastrzega sobie prawo do monitorowania wszystkich komentarzy i usuwania tych, które można uznać za nieodpowiednie, obraźliwe lub naruszające niniejsze warunki.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Użytkownik zapewnia i oświadcza, że:
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            1) Jest uprawniony do zamieszczania Komentarzy na naszej Stronie internetowej i posiada wszelkie niezbędne licencje i zgody, aby to robić;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            2) Komentarze nie naruszają praw własności intelektualnej, w tym między innymi praw autorskich, patentów lub znaków towarowych stron trzecich;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            3) Komentarze nie zawierają treści o charakterze oszczerczym, zniesławiającym, obraźliwym, nieprzyzwoitym lub w inny sposób niezgodnym z prawem, stanowiącym naruszenie prywatności.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            4) Komentarze nie będą wykorzystywane do pozyskiwania lub promowania działalności biznesowej lub zwyczajów, ani do prezentowania działań komercyjnych lub niezgodnych z prawem.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Niniejszym Użytkownik udziela Sparkledge niewyłącznej licencji na wykorzystywanie, powielanie, edytowanie i upoważnianie innych osób do wykorzystywania, powielania i edytowania jego komentarzy w dowolnej formie i we wszystkich formatach lub mediach.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center" isHeader>
            Zamieszczanie odnośników do naszych treści
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Następujące podmioty mogą umieszczać odnośniki do naszych treści bez uprzedniej pisemnej zgody:
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            1) Organy rządowe;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            2) Wyszukiwarki internetowe;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            3) Organizacje prasowe;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            4) Podmioty zajmujące się rozpowszechnianiem katalogów online mogą zamieszczać linki do naszej Strony w taki sam sposób, w jaki zamieszczają hiperłącza do stron internetowych innych wymienionych podmiotów; oraz
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            5) Akredytowane przez system działalności, z wyjątkiem organizacji non-profit, punktów handlowych dla organizacji charytatywnych oraz grup zbierających fundusze na cele charytatywne, które nie mogą zamieszczać hiperłączy do naszej Strony internetowej.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Organizacje te mogą zamieszczać odnośniki do naszej strony głównej, publikacji lub innych materiałów zamieszczonych na Stronie pod warunkiem, że odnośnik ten (a) nie wprowadza w błąd; (b) nie sugeruje, że jest sponsorowany, promowany lub uznany przez stronę linkującą oraz jej produkty i/lub usługi, jeśli nie jest to zgodne z prawdą ; oraz (c) pasuje do kontekstu strony linkującej.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Dopuszczamy możliwość rozważenia i zatwierdzenia innych próśb o link od następujących typów organizacji:
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            1) powszechnie znanych źródeł informacji dla konsumentów lub podmiotów gospodarczych;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            2) działalności internetowych typu dot-com;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            3) stowarzyszeń lub innych podmiotów reprezentujących organizacje charytatywne;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            4) dystrybutorów katalogów internetowych;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            5) portali internetowych;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            6) firm księgowych, prawniczych i konsultingowych; oraz
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            7) instytucji edukacyjnych i stowarzyszeń handlowych.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Zaakceptujemy prośby o link od tych podmiotów, jeśli uznamy, że: (a) link nie będzie nas stawiał w niekorzystnym świetle względem nas samych lub naszych akredytowanych działalności; (b) nie odnotowano u nas żadnych negatywnych zapisów związanych z daną organizacją; (c) korzyść dla nas wynikająca z widoczności hiperłącza rekompensuje brak nazwy Sparkledge; oraz (d) link występuje w kontekście informacji ogólnych zasobów.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Podmioty te mogą zamieszczać linki do naszej strony głównej pod warunkiem, że link ten (a) nie wprowadza w błąd; (b) fałszywie nie sugeruje sponsorowania, promowania lub zaakceptowania witryny linkującej i jej produktów lub usług; oraz (c) wpisuje się w kontekst witryny linkującej.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Jeśli należysz do organizacji wymienionych w punkcie 2 powyżej i jesteś zainteresowany umieszczeniem linku do naszej Strony internetowej, zgłoś nam to wysyłając e-mail na adres Sparkledge. W e-mailu należy podać swoje imię i nazwisko, nazwę organizacji / podmiotu, informacje kontaktowe oraz adres URL swojej witryny, listę adresów URL, z których zamierzasz linkować do naszej Strony, a także listę adresów URL naszej witryny, do których chcesz linkować. Nasz czas odpowiedzi wynosi od 2 do 3 tygodni.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Zatwierdzone podmioty mogą zamieszczać odnośniki do naszej Strony w następujący sposób:
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            1) Używając naszej nazwy (firmy); lub
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            2) Poprzez zastosowanie ujednoliconego identyfikatora zasobów, do którego prowadzi odnośnik; lub
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            3) Stosowanie innych opisów naszej Strony internetowej, do której kieruje link, uzasadnionych z punktu widzenia kontekstu i formatu treści strony linkującej.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Nie wyrażamy zgody na wykorzystanie logo lub innych elementów graficznych Sparkledge w celu umieszczenia linku bez umowy licencyjnej na wykorzystanie znaku towarowego.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center" isHeader>
            Odpowiedzialność za treść:
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Nie ponosimy odpowiedzialności za jakiekolwiek treści, które pojawiają się na innych stronach internetowych. Zobowiązujesz się do zapewnienia nam ochrony przed wszelkimi roszczeniami, które zostaną postawione wobec Twojej Strony. Link(i) nie powinny być umieszczane na Stronie, która może być postrzegana jako oszczercza, nieprzyzwoita lub niezgodna z prawem, lub która w inny sposób łamie, lub zachęca do łamania, prawa osób trzecich.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center" isHeader>
            Zastrzeżenia praw:
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Zastrzegamy sobie prawo do zażądania usunięcia wszystkich lub wybranych linków kierujących do naszej Strony. Podmioty linkujące zobowiązują się do natychmiastowego usunięcia wszystkich linków prowadzących do naszej Strony w przypadku otrzymania takiego żądania z naszej strony. Zastrzegamy sobie również prawo do zmiany niniejszych warunków i zasad linkowania w dowolnym momencie. Umieszczanie linków do naszej Strony oznacza akceptację i zobowiązanie do przestrzegania niniejszych zasad i warunków.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center" isHeader>
            Usuwanie linków z naszej Strony
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Jeśli zauważysz na naszej Stronie link, który z jakichkolwiek powodów jest obraźliwy, skontaktuj się z nami i poinformuj nas o tym w dowolnym momencie. Rozpatrzymy prośbę o usunięcie linku. Nie zobowiązujemy się jednak do usunięcia takiego linku, ani do udzielenia bezpośredniej odpowiedzi osobie zgłaszającej.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Nie gwarantujemy, że informacje zawarte na tej stronie są poprawne. Nie zapewniamy ich kompletności ani dokładności, ani nie zobowiązujemy się do utrzymania dostępności strony lub aktualizacji materiałów na niej zawartych.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center" isHeader>
            Wyłączenie odpowiedzialności:
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            W maksymalnym zakresie dozwolonym przez obowiązujące prawo, nie udzielamy żadnych poręczeń, gwarancji i innych zobowiązań względem naszej strony internetowej i sposobu jej wykorzystywania. Żadne z postanowień niniejszej klauzuli wyłączenia odpowiedzialności nie będzie:
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            1) ograniczać lub wyłączać naszej lub Twojej odpowiedzialności za śmierć lub odniesione obrażenia ciała;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            2) ograniczać lub wyłączać naszej lub Twojej odpowiedzialność za oszustwa lub świadome wprowadzanie w błąd;
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            3) ograniczać odpowiedzialności naszej lub Twojej w jakikolwiek sposób, który nie jest zgodny z obowiązującym prawem; lub
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            4) wyłączać odpowiedzialności naszej lub Twojej, która nie może zostać wyłączona na mocy obowiązującego prawa.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Ograniczenia i wyłączenia odpowiedzialności zawarte w tym ustępie oraz w innych miejscach tego wyłączenia odpowiedzialności: (a) nie naruszają postanowień poprzedniego ustępu; oraz (b) regulują wszystkie zobowiązania wynikające z tego wyłączenia odpowiedzialności, w tym zobowiązania wynikające z umowy, z czynu niedozwolonego oraz z tytułu naruszenia obowiązków ustawowych.
          </TermsAndConditionsParagraph>
          <TermsAndConditionsParagraph className="block-center">
            Pod warunkiem, że strona internetowa oraz informacje i usługi na niej zawarte są udostępniane nieodpłatnie, nie ponosimy odpowiedzialności za powstanie jakichkolwiek strat lub szkód o dowolnym charakterze.
          </TermsAndConditionsParagraph>
        </TermsAndConditionsParagraphsContainer>
      </LandingSectionFilter>
    </LandingSectionWrapper>
    <Suspense fallback={null}>
      <FooterComponent />
    </Suspense>

  </MainContainer>
);

export default TermsAndConditions;
