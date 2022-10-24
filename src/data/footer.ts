import LogoImage from "src/assets/sparkledge_logo.webp";

const footerData:{ type: string, addr: string, content: any, displayIfSignedIn: boolean, }[][] = [
  [
    {
      type: "image",
      addr: "/",
      content: LogoImage,
      displayIfSignedIn: true,
    },
  ],
  [
    {
      type: "text",
      addr: "/",
      content: "Główna",
      displayIfSignedIn: true,
    },
    {
      type: "text",
      addr: "/searcher",
      content: "Wyszukiwarka",
      displayIfSignedIn: true,
    },
    {
      type: "text",
      addr: "/signin",
      content: "Zaloguj się",
      displayIfSignedIn: true,
    },
    {
      type: "text",
      addr: "/signup",
      content: "Zarejestruj się",
      displayIfSignedIn: true,
    },
    {
      type: "text",
      addr: "/profile",
      content: "Profil",
      displayIfSignedIn: false,
    },
    {
      type: "text",
      addr: "/settings",
      content: "Ustawienia",
      displayIfSignedIn: false,
    },
  ],
  [
            
    {
      type: "text",
      addr: "/about",
      content: "O nas",
      displayIfSignedIn: true,
    },
  ],
];

export default footerData;
