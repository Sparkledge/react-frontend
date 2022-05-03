import SK_image from "../assets/test_team_image.webp";

export type TeamDataType = {name: string, position: string, describe: string, photo: any};

const TeamData:TeamDataType[] = [
    {
        name: "Szymon Kupisz",
        position: "Co-founder, Frontend Developer",
        describe: "Lorem ipsum dolor sit amet",
        photo: SK_image
    },
    {
        name: "Wojciech Basiński",
        position: "Co-founder, Backend Developer",
        describe: "Lorem ipsum dolor sit amet",
        photo: SK_image
    },
];

export default TeamData;