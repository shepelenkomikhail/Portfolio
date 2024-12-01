import ProjectCard from "./ProjectCard.tsx";
import {ReactElement} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";

export default function Work() {
    const navigate: NavigateFunction = useNavigate();
    const handleProjClick: ()=>void = ():void => {
        navigate("/projects");
    }

    return (
        <div className="flex flex-col gap-24">
            <div>
                <h1 className="text-titleYellow">work.</h1>
                <p className="text-lg w-8/12">There are some featured projects I’ve done describing my skills.</p>
            </div>
            <div className="flex flex-wrap gap-24">
                {
                    Array.from({length: 3}, (_:unknown, i: number): ReactElement => (
                        <ProjectCard key={i + 1} id={i + 1}/>
                    ))
                }
            </div>
            <a className="self-center -mt-8" onClick={handleProjClick}>
                <span className="underline">
                    See more projects...
                </span>
            </a>
        </div>
    );
}