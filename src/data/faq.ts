export type FAQQuestionType = { header: string, answer: string };

const FAQList:FAQQuestionType[] = [
  {
    header: "Czym jest Sparkledge?",
    answer: `
    Sparkledge jest portalem stworzonym do szybkiego wyszukiwania wiedzy akademickiej pośród materiałów udostępnianych na niej przez studentów
    `,
  },
  {
    header: "Czy mogę pobrać aplikację na moje urządzenie?",
    answer: `
      Dzięki używanej przez nas technologii PWA pobieranie Sparkledge na telefony, tablety i komputery jest jak najbardziej możliwe.
      Aby to zrobić, wejdź na naszą stronę i poczekaj, aż wyświetli się opcja zainstalowania aplikacji na Twoim urządzeniu (możliwości
        instalacyjne mogą się różnić w zależności od specyfikacji sprzętu, systemów operacyjnych itp.). 
    `,
  },
  {
    header: "Jak mogę się zarejestrować?",
    answer: `
      Aby w pełni korzystać z naszego serwisu, kliknij "Zarejestruj się" w pasku nawigacyjnym, wypełnij formularz i postępuj zgodnie z instrukcjami, 
      które przekażemy na podany przez Ciebie adres e-mail. Jeśli posiadasz konto google, możesz również zalogować się przy jego użyciu zarówno przez
      rejestrację, jak i logowanie.
    `,
  },
  {
    header: "Czy mogę się zalogować innym kontem?",
    answer: `
      Nasza platforma udostępnia aktualnie możliwość logowania się do Sparkledge przez konto Google. Aby w ten sposób się zalogować,
      przejdź do logowania lub rejestracji i kliknij na przycisk "Zaloguj się przez Google", a autoryzacja Google poprowadzi Cię do zalogowania.
    `,
  },
  {
    header: "Jak wstawić nowy materiał?",
    answer: `
      Po pierwsze, musisz być zalogowany/a. Dalej, przejdź do zakładki "Opublikuj" w pasku nawigacyjnym. Następnie, wybierz tytuł swojego materiału i 
      przejdź dalej. Potem wybierz dane uczelni, wydziału i kierunku, do którego chcesz przypisać materiał. Kiedy już to zrobisz,
      załaduj materiał ze swojego urządzenia a także, jeśli masz na to ochotę, dodaj opcjonalny opis materiału. Po wszystkim kliknij 
      przycisk "Wyślij". Jeżeli materiał się załadował, na ekranie wyświetli się link do dokumentu oraz guzik pozwalający wrzucić kolejny
      materiał. Jeśli coś poszło niepomyślnie, poinformujemy Cię tym poprzez stosowny komunikat. 
    `,
  },
  {
    header: "Jak wyszukać pożądany materiał?",
    answer: `
      To akurat jest dosyć proste. Wchodzisz w zakładkę "Wyszukiwarka", która jest dostępna niezależnie od tego czy jesteś zalogowany/a czy nie.
      Następnie, wybierasz kolejno uczelnię oraz wydział, z materiałów którego chcesz wybrać potrzebny dla Ciebie. 
      Jeśli wszystko pójdzie pomyślnie, Sparkledge otworzy panel wyszukiwania i wyświetli wszystkie dostępne materiały z danego wydziału.
      Możesz doprecyzować wyszukiwanie poprzez ustawienie odpowiednich filtrów, które na urządzeniach mobilnych włączane są za pomocą
      przycisku "filtry", a na większych urządzeniach są wyświetlane po lewej stronie ekranu.
    `,
  },
];

export default FAQList;
