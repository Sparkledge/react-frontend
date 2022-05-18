import SK_image from "../assets/test_team_image.webp";
import SzymonKupisz from "../assets/staff/Szymon_Kupisz.webp";
import OlaWieczorek from "../assets/staff/Ola_Wieczorek.webp";

export type TeamDataType = {name: string, position: string, describe: string, photo: any};

const TeamData:TeamDataType[] = [
    {
        name: "Szymon Kupisz",
        position: "Co-founder, Frontend Developer",
        describe: "Dzięki niemu Sparkledge wygląda tak dobrze. Interesuje się bronią i żeglarstwem. Pasjonat włoskiej kuchni i wina.",
        photo: SzymonKupisz
    },
    {
        name: "Wojciech Basiński",
        position: "Co-founder, Backend Developer",
        describe: "Odpowiedzialny za backend naszej platformy. Pasjonuje się szachami i pokerem. Lubi grać w piłkę nożną i pić kwasne drinki 🙂. ",
        photo: SK_image
    },
    {
        name: "Ola Kłos",
        position: "Graphic developer",
        describe: "Tworzy grafiki do naszej aplikacji. Gra na pianinie, Interesuje się fizyka kwantową, w szczególności komputerami kwantowymi. Lubi podróżować i czytać książki.  ",
        photo: SK_image
    },
    {
        name: "Ola Wieczorek",
        position: "Social media specialist",
        describe: "Odpowiedzialna za Social Media. Uwielbia tańczyć i podróżować. Lubi żeglować i chodzić po górach.",
        photo: OlaWieczorek
    },
];

export default TeamData;