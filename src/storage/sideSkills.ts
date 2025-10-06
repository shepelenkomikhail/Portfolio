import php from "../assets/languages/php.svg";
import cpp from "../assets/languages/cpp.svg";
import mongodb from "../assets/languages/mongodb.svg";
import bootstrap from "../assets/languages/bootstrap.svg";
import tailwind from "../assets/languages/tailwind.svg";
import chakra from "../assets/languages/chakra.svg";
import oraclesql from "../assets/languages/oraclesql.svg";
import figma from "../assets/languages/figma.svg"
import sql from "../assets/languages/sqlite.svg"
import mui from "../assets/languages/mui.svg"
import { Skill } from "./types/Skill.ts";

export const sideSkills: Skill[] = [
    { name: "php", path: php },
    { name: "cpp", path: cpp },
    { name: "mongodb", path: mongodb },
    { name: "bootstrap", path: bootstrap },
    { name: "tailwind", path: tailwind },
    { name: "chakra", path: chakra },
    { name: "oraclesql", path: oraclesql },
    { name: "sql", path: sql },
    { name: "mui", path: mui },
    { name: "figma", path: figma }
];

export default sideSkills;
