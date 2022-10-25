import WojtekBasinski from "../assets/staff/Wojtek_Basiński.webp";
import SzymonKupisz from "../assets/staff/Szymon_Kupisz.webp";
import OlaKlos from "../assets/staff/Ola_Kłos.webp";
import OlaWieczorek from "../assets/staff/Ola_Wieczorek.webp";
import OlekKlepka from "../assets/staff/Olek_Klepka.webp";

export type TeamDataType = { name: string, position: string, describe: string, photo: any };

const TeamData:TeamDataType[] = [
  {
    name: "Szymon Kupisz",
    position: "Co-founder, President of the project, Frontend Developer",
    describe: "Dzięki niemu Sparkledge wygląda tak dobrze. Interesuje się bronią i żeglarstwem. Pasjonat włoskiej kuchni i wina.",
    photo: SzymonKupisz,
  },
  {
    name: "Wojciech Basiński",
    position: "Co-founder, Vice-president of the project, Backend Developer",
    describe: "Odpowiedzialny za backend naszej platformy. Pasjonuje się szachami i pokerem. Lubi grać w piłkę nożną i pić kwasne drinki 🙂. ",
    photo: WojtekBasinski,
  },
  {
    name: "Ola Kłos",
    position: "Graphic designer",
    describe: `Tworzy grafiki do naszej aplikacji. Gra na pianinie, 
    Interesuje się fizyka kwantową, w szczególności komputerami kwantowymi. Lubi podróżować i czytać książki.`,
    photo: OlaKlos,
  },
  {
    name: "Ola Wieczorek",
    position: "Head of Social Media",
    describe: "Odpowiedzialna za Social Media. Uwielbia tańczyć i podróżować. Lubi żeglować i chodzić po górach.",
    photo: OlaWieczorek,
  },
  {
    name: "Olek Klepka",
    position: "Head of Marketing",
    describe: "Nasz spec od marketingu i promowania działań portalu. Amator boksu i dobrej zabawy.",
    photo: OlekKlepka,
  },
];

export default TeamData;
