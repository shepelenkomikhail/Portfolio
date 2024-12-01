import mainSkills from "../storage/mainSkills.ts";
import {Skill} from "../storage/types/Skill.ts";
import React from "react";

export default function AboutMe() {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-titleYellow">about me.</h1>
            <p className="text-lg w-8/12 -mt-8">I am a goal-oriented individual originally from Sumy, Ukraine. As a CS student
                at ELTE University, I am currently pursuing a Bachelor's degree. I have hands-on experience in front
                -end and back-end development.
            </p>
            <div className="flex flex-col gap-10">
                <h3 className="text-3xl">Main Skills</h3>
                <div className="flex flex-wrap gap-10">
                    {mainSkills.map((skill: Skill): React.ReactElement => (
                        <img src={skill.path} alt={skill.name} key={skill.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}