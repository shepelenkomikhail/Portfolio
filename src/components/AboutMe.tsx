import mainSkills from "../storage/mainSkills.ts";
import {Skill} from "../storage/types/Skill.ts";
import React from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";

export default function AboutMe() {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-titleYellow">about me.</h1>
            <p className="text-md lg:text-lg w-full lg:w-8/12 lg:-mt-8">
                I’m a Full-Stack Developer working with .NET, C#, React, and TypeScript. I build scalable web applications, clean APIs, and modern frontend interfaces. I focus on quality, performance, and maintainable engineering. Always learning, always building.
            </p>
            <div className="flex flex-col gap-10 mt-6">
                <h3 className="text-2xl lg:text-3xl">Main Skills</h3>
                <div className="flex flex-wrap gap-8 lg:gap-10">
                    {mainSkills.map((skill: Skill): React.ReactElement => (
                        <img src={skill.path} alt={skill.name} key={skill.name} className="w-[45px] lg:w-[90px]"/>
                    ))}
                </div>
            </div>
            <a onClick={() => {navigate("/aboutme")}}>
                <span className="underline">
                    See more information...
                </span>
            </a>
        </div>
    );
}