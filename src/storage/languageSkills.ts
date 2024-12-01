import england from "../assets/langs/england.svg";
import russia from "../assets/langs/russia.svg";
import ukraine from "../assets/langs/ukraine.svg";
import germany from "../assets/langs/germany.svg";
import italy from "../assets/langs/italy.svg";
import hungary from "../assets/langs/hungary.svg";
import { LangSkill } from "./types/LangSkill.ts";

export const languageSkills: LangSkill[] = [
    { name: "russia", path: russia, level: "Native" },
    { name: "ukraine", path: ukraine, level: "Native" },
    { name: "england", path: england, level: "C1" },
    { name: "germany", path: germany, level: "A2" },
    { name: "italy", path: italy, level: "A2" },
    { name: "hungary", path: hungary, level: "A2" }
];

export default languageSkills;
