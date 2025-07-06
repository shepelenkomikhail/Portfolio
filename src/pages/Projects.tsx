import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {ReactElement} from "react";
import ProjectCard from "../components/ProjectCard.tsx";
import ContactIcons from "../components/ContactIcons.tsx";

export default function Projects() {
    return (
        <>
            <Header currentPage={"projects"}/>
            <main className={"grid grid-cols-12 mt-8"}>
                <div className="col-span-10 2xl:col-span-8 col-start-2 2xl:col-start-3 flex flex-col gap-44">
                    <div className="flex flex-col gap-12">
                        <div>
                            <h1 className="text-titleYellow">projects.</h1>
                        </div>
                        <div className="flex flex-wrap gap-20 lg:gap-24">
                            {
                                Array.from({length: 11}, (_: unknown, i: number): ReactElement => (
                                    <ProjectCard key={i} id={i}/>
                                ))
                            }
                        </div>
                        <a className="self-center" href={"https://github.com/shepelenkomikhail"}
                           target={"_blank"}>
                            <span className="underline">
                                See more on GitHub...
                            </span>
                        </a>
                        <div className="flex justify-center w-full my-4">
                            <ContactIcons />
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}