import {
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    framer,
    instagram,
    photoshop,
    recording03,
    roadmap3,
    slack,
    sliders04,
    telegram,
    twitter,
} from "../assets";

import web from "../assets/4-small.png";
import creator from "../assets/sliders-04.svg";
import coins from "../assets/roadmap/coins.png";

import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
} from "../assets";

const services = [{
        title: "Web Developer",
        icon: web,
    },

    {
        title: "Backend Developer",
        icon: roadmap3,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },

    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "React.js Developer",
        company_name: "unknown",
        icon: web,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Freelance Developer",
        company_name: "unknown",
        icon: web,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback for clients.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: roadmap3,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

// const projects = [{
//         name: "Shoping App",
//         description: "Web-based platform that allows users to purchase, book, and manage car rentals from various providers, providing a convenient and efficient solution for purchsing  needs.",
//         tags: [{
//                 name: "react",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "redux",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "tailwind",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: carrent,
//         source_code_link: "https://github.com/",
//     },
//     {
//         name: "landing page for UI designs ",
//         description: "Web page designs langing and mordern pages, with lot of designs for AI landing page   ",
//         tags: [{
//                 name: "react",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "tailwind",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "framer-motion",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: jobit,
//         source_code_link: "https://github.com/",
//     },

// ];

export const henryServices = ["mongodb", "threejs", "Seamless Integration"];

export const henryServicesIcons = [recording03, disc02, chromecast, sliders04];

export const collabText =
    "Learning more skills to enhance my experience and ways of thinking";

export const collabContent = [{
        id: "0",
        title: "Backend",
        text: collabText,
    },
    {
        id: "1",
        title: "React Native",
    },
    {
        id: "2",
        title: "Design",
    },
];

export const collabApps = [{
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "threejs",
        icon: threejs,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "nodejs",
        icon: nodejs,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "mongodb",
        icon: mongodb,
        width: 38,
        height: 32,
    },
];

export const socials = [{
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];

export { services, technologies, experiences };