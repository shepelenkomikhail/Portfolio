import Projects from "../storage/projects.ts";
import {Project} from "../storage/types/Project.ts";
import {ReactElement} from "react";
import {Skill} from "../storage/types/Skill.ts";
import LinkIcon from "../assets/link.svg";

interface ProjectCardProps {
    id: number;
}

export default function ProjectCard(id: ProjectCardProps) {
    const project: Project = Projects[id.id];

    return (
        <div className="flex gap-20 items-start">
            <img className="w-[380px] h-[380px] rounded-md object-cover" src={project.img} alt={project.title}></img>
            <div className="flex flex-col gap-10">
                <h3 className="text-5xl">{project.title}</h3>
                <div className="flex flex-wrap gap-7">
                    {project.techStack.map((skill: Skill): ReactElement => (
                        <img className="w-14 h-14" src={skill.path} alt={skill.name} key={skill.name} />
                    ))}
                </div>
                <p className="text-lg">{project.description}</p>
                <div className="flex justify-between w-1/3">
                    <a className="flex" href={project.github} target={"_blank"}>
                        <span className="hover:underline">GitHub</span>
                        <div className="translate-x-1 -translate-y-1 w-4">
                            <img src={LinkIcon} alt="link"/>
                        </div>
                    </a>
                    { project.projectLink &&
                        <a className="flex" href={project.projectLink} target={"_blank"}>
                            <span className="hover:underline">Project</span>
                            <div className="translate-x-1 -translate-y-1 w-4">
                                <img src={LinkIcon} alt="link"/>
                            </div>
                        </a>
                    }
                </div>
            </div>
        </div>
    );
}