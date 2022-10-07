export type FAQQuestionType = { header: string, answer: string };

const FAQList:FAQQuestionType[] = [
  {
    header: "Czym jest Sparkledge?",
    answer: `
    Sparkledge jest portalem stworzonym do szybkiego wyszukiwania wiedzy akademickiej pośród materiałów udostępnianych na niej przez studentów
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
    header: "Jak wstawić nowy materiał?",
    answer: `
      Po pierwsze, musisz być zalogowany/a. Dalej, przejdź do zakładki "Opublikuj" w pasku nawigacyjnym. Następnie, wybierz tytuł swojego materiału i 
      przejdź dalej. Potem wybierz dane uczelni, wydziału i kierunku, do którego chcesz przypisać materiał. Kiedy już to zrobisz,
      załaduj materiał ze swojego urządzenia a także, jeśli masz na to ochotę, dodaj opcjonalny opis materiału. Po wszystkim kliknij 
      przycisk "Wyślij". Jeżeli materiał się załadował, na ekranie wyświetli się link do dokumentu oraz guzik pozwalający wrzucić kolejny
      materiał. Jeśli coś poszło niepomyślnie, poinformujemy Cię tym poprzez stosowny komunikat. 
    `,
  },
];

export default FAQList;
