import LogoImage from "src/assets/sparkledge_logo.webp";

const footerData:{ type: string, addr: string, content: any, displayIfSignedIn?: boolean, }[][] = [
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
  ],
  [
            
    {
      type: "text",
      addr: "/about",
      content: "O nas",
    },
  ],
];

export default footerData;
