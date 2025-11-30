import javascript from "../assets/languages/javascript.svg";
import typescript from "../assets/languages/typescript.svg";
import react from "../assets/languages/react.svg";
import java from "../assets/languages/java.svg";
import python from "../assets/languages/python.svg";
import nodejs from "../assets/languages/nodejs.svg";
import dotnet from "../assets/languages/dotnet.svg";
import {Skill} from "./types/Skill.ts";
import csharp from "../assets/languages/csharp.svg";

export const mainSkills: Skill[] = [
    { name: "javascript", path: javascript },
    { name: "typescript", path: typescript },
    { name: "react", path: react },
    { name: "java", path: java },
    { name: 'C#', path: csharp},
    { name: "python", path: python },
    { name: "nodejs", path: nodejs },
    { name: "dotnet", path: dotnet }
];

export default mainSkills;