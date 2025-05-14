import javascript from "../assets/languages/javascript.svg";
import typescript from "../assets/languages/typescript.svg";
import react from "../assets/languages/react.svg";
import java from "../assets/languages/java.svg";
import python from "../assets/languages/python.svg";
import nodejs from "../assets/languages/nodejs.svg";
import git from "../assets/languages/git.svg";
import figma from "../assets/languages/figma.svg";
import {Skill} from "./types/Skill.ts";

export const mainSkills: Skill[] = [
    { name: "javascript", path: javascript },
    { name: "typescript", path: typescript },
    { name: "react", path: react },
    { name: "java", path: java },
    { name: "python", path: python },
    { name: "nodejs", path: nodejs },
    { name: "git", path: git },
    { name: "figma", path: figma }
];

export default mainSkills;