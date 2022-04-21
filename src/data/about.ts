import SK_image from "../assets/test_team_image.webp";

export type TeamDataType = {name: string, position: string, describe: string, photo: any};

const TeamData:TeamDataType[] = [
    {
        name: "Szymon Kupisz",
        position: "Co-founder, Frontend Developer",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam, voluptate obcaecati suscipit rem quo officiis non vitae hic nesciunt ipsam quae modi quisquam fugit! Eius modi quaerat necessitatibus ipsum.",
        photo: SK_image
    },
    {
        name: "Wojciech Basiński",
        position: "Co-founder, Backend Developer",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam, voluptate obcaecati suscipit rem quo officiis non vitae hic nesciunt ipsam quae modi quisquam fugit! Eius modi quaerat necessitatibus ipsum.",
        photo: SK_image
    },
    {
        name: "Aleksandra Kłos",
        position: "Graphic designer, UX/UI support",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam, voluptate obcaecati suscipit rem quo officiis non vitae hic nesciunt ipsam quae modi quisquam fugit! Eius modi quaerat necessitatibus ipsum.",
        photo: SK_image
    },
    {
        name: "Aleksandra Wieczorek",
        position: "Social Media",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam, voluptate obcaecati suscipit rem quo officiis non vitae hic nesciunt ipsam quae modi quisquam fugit! Eius modi quaerat necessitatibus ipsum.",
        photo: SK_image
    },
];

export default TeamData;