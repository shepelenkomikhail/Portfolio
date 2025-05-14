import { Project } from "./types/Project.ts";

import typescript from "../assets/languages/typescript.svg";
import react from "../assets/languages/react.svg";
import html from "../assets/languages/html.svg";
import css from "../assets/languages/css.svg";
import tailwind from "../assets/languages/tailwind.svg";
import nodejs from "../assets/languages/nodejs.svg";
import javascript from "../assets/languages/javascript.svg";
import java from "../assets/languages/java.svg";
import maven from "../assets/languages/maven.svg";
import mysql from "../assets/languages/mysql.svg";
import chakra from "../assets/languages/chakra.svg";

const projects: Project[] = [
    {
        id: 1,
        title: "YPS",
        description: "A web solution for handling structured and semi-structured internal data in a flexible and collaborative way. The platform allows data processing, role-based access, and efficient file management for organizations.",
        techStack: [
            { name: "TypeScript", path: typescript },
            { name: "React", path: react },
            { name: "Tailwind", path: tailwind },
            { name: "Node.js", path: nodejs }
        ],
        img: "./projlogos/yps.png",
        projectLink: "https://yps-front-production.up.railway.app/"

    },
    {
        id: 2,
        title: "Job Portal",
        description: "A dashboard for job portal. The functionality includes filtering, searching, and sorting available jobs; saving and applying for the vacancy; checking detailed job description.",
        techStack: [
            { name: "TypeScript", path: typescript },
            { name: "React", path: react },
            { name: "HTML", path: html },
            { name: "CSS", path: css },
            { name: "Tailwind", path: tailwind }
        ],
        img: "./projlogos/jobboard.png",
        github: "https://github.com/shepelenkomikhail/Job-Portal",
        projectLink: "https://job-portal-one-blush.vercel.app/"
    },
    {
        id: 3,
        title: "2D Board game",
        description: "A JS game built as a university project. A user can move the character across the board, dig the cells, and find some lost details. Besides, there is multiplayer included and limited moving steps.",
        techStack: [
            { name: "JavaScript", path: javascript },
            { name: "HTML", path: html },
            { name: "CSS", path: css },
            { name: "Tailwind", path: tailwind }
        ],
        img: "./projlogos/IKLogo.png",
        github: "https://github.com/shepelenkomikhail/IK-1",
        projectLink: "https://ik-1.vercel.app/"
    },
    {
        id: 4,
        title: "Car rental app",
        description: "An application built as a catalog of cars available to rent within the company. A user can book a car, fill a form which calculates the price, check the car description, and search for a specific one.",
        techStack: [
            { name: "TypeScript", path: typescript },
            { name: "React", path: react },
            { name: "HTML", path: html },
            { name: "CSS", path: css },
            { name: "Tailwind", path: tailwind },
            { name: "Node.js", path: nodejs }
        ],
        img: "./projlogos/carrental.png",
        github: "https://github.com/shepelenkomikhail/udemx-test",
        projectLink: "https://shepelenkomikhail.github.io/udemx-test/"
    },
    {
        id: 5,
        title: "Bomberman 2D",
        description: "Java 2D game built in group of 4 people as an university project. The application is built using pure Java. Multiplayer and competition modes are core functionalities. Players can interact with each other and monster characters and use many kinds of power-ups and curses.",
        techStack: [
            { name: "Java", path: java },
            { name: "Maven", path: maven }
        ],
        img: "./projlogos/bomberman.png",
        github: "https://github.com/shepelenkomikhail/Boombastic"
    },
    {
        id: 6,
        title: "Rick&Morty library",
        description: "This project is UI visualisation of all characters of Rick&Morty series. Data is taken from their official API.",
        techStack: [
            { name: "TypeScript", path: typescript },
            { name: "React", path: react },
            { name: "Tailwind", path: tailwind },
            { name: "Chakra", path: chakra }
        ],
        img: "./projlogos/rickmorty.png",
        github: "https://github.com/shepelenkomikhail/RickMorty",
        projectLink: "https://shepelenkomikhail.github.io/RickMorty/"
    },
    {
        id: 7,
        title: "Snake game",
        description: "Java 2D game built as an university project. The application gives opportunity to choose their names and color of the snakes. There is a database integrated and table shows top players of all times.",
        techStack: [
            { name: "Java", path: java },
            { name: "MySQL", path: mysql }
        ],
        img: "./projlogos/snake.png",
        github: "https://github.com/shepelenkomikhail/Tron-Game"
    },
    {
        id: 8,
        title: "Pebble game",
        description: "Java 2D game built as an university project. The application gives opportunity to choose the board size for players. Users play against each other until no more 'pebbles' left.",
        techStack: [
            { name: "Java", path: java }
        ],
        img: "./projlogos/pebble.png",
        github: "https://github.com/shepelenkomikhail/Pebble-Game"
    }
];


export default projects;
