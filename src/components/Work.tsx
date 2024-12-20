import ProjectCard from "./ProjectCard.tsx";
import {ReactElement} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";

export default function Work() {
    const navigate: NavigateFunction = useNavigate();
    const handleProjClick: ()=>void = ():void => {
        navigate("/projects");
    }

    return (
        <div className="flex flex-col gap-16 lg:gap-24">
            <div>
                <h1 className="text-titleYellow">work.</h1>
                <p className="text-md lg:text-lg w-full lg:w-8/12 mt-4">There are some featured projects I’ve done describing my skills.</p>
            </div>
            <div className="flex flex-wrap gap-24">
                {
                    Array.from({length: 3}, (_:unknown, i: number): ReactElement => (
                        <ProjectCard key={i} id={i}/>
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