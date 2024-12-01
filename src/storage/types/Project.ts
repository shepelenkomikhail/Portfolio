import {Skill} from "./Skill.ts";

export interface Project {
    id: number;
    title: string;
    techStack: Skill[];
    description: string;
    github: string;
    projectLink?: string;
    img: string;
}