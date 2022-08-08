import LogoImage from "src/assets/sparkledge_logo.webp";

const footerData:{ type: string, addr: string, content: any }[][] = [
  [
    {
      type: "image",
      addr: "/",
      content: LogoImage,
    },
  ],
  [
    {
      type: "text",
      addr: "/",
      content: "Główna",
    },
    {
      type: "text",
      addr: "/searcher",
      content: "Wyszukiwarka",
    },
    {
      type: "text",
      addr: "/signin",
      content: "Zaloguj się",
    },
    {
      type: "text",
      addr: "/signup",
      content: "Zarejestruj się",
    },
  ],
  [
            
    {
      type: "text",
      addr: "/about",
      content: "O nas",
    },
    {
      type: "text",
      addr: "https://www.vecteezy.com/free-vector/education",
      content: "Education Vectors by Vecteezy",
    },
  ],
];

export default footerData;
