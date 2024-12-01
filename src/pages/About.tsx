import Header from "../components/Header.tsx";
import ContactIcons from "../components/ContactIcons.tsx";
import Footer from "../components/Footer.tsx";
import mainSkills from "../storage/mainSkills.ts";
import {Skill} from "../storage/types/Skill.ts";
import sideSkills from "../storage/sideSkills.ts";
import languageSkills from "../storage/languageSkills.ts";
import education from "../storage/education.ts";
import work from "../storage/work.ts";
import {EducationWork} from "../storage/types/Education.ts";
import {LangSkill} from "../storage/types/LangSkill.tsx";

export default function About() {
    return(
        <>
            <Header currentPage={"aboutme"}/>
            <main className={"grid grid-cols-12 mt-8"}>
                <div className="lg:col-span-10 2xl:col-span-8 lg:col-start-2 2xl:col-start-3 flex flex-col gap-44">
                    <div className="flex flex-col gap-36">
                        <div>
                            <h1 className="text-titleYellow">about me.</h1>
                            <p className="text-lg w-3/4">I am a goal-oriented individual originally from Sumy, Ukraine.
                                As a CS student at
                                ELTE University, I am currently pursuing a Bachelor's degree. I have hands-on
                                experience in front-end and back-end development.
                            </p>
                        </div>

                        {/*Skills*/}
                        <div className="flex flex-col gap-16 -mt-16">
                            <div className="flex flex-col gap-8">
                                <h3 className="text-3xl">Main Skills</h3>
                                <div className="flex flex-wrap gap-10">
                                    {mainSkills.map((skill: Skill): React.ReactElement => (
                                        <img src={skill.path} alt={skill.name} key={skill.name}/>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h3 className="text-3xl">Side Skills</h3>
                                <div className="flex flex-wrap gap-10">
                                    {sideSkills.map((skill: Skill): React.ReactElement => (
                                        <img src={skill.path} alt={skill.name} key={skill.name}/>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h3 className="text-3xl">Language Skills</h3>
                                <div className="flex flex-wrap gap-10">
                                    {languageSkills.map((skill: LangSkill): React.ReactElement => (
                                        <figure className="flex flex-col items-center gap-3">
                                            <img src={skill.path} alt={skill.name} key={skill.name}/>
                                            <figcaption className="text-lg font-medium">{skill.level}</figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/*Education*/}
                        <div className="flex flex-col">
                            <h3 className="text-3xl mb-8">Education</h3>
                            <div className="flex flex-col gap-8">
                                {education.map((school: EducationWork): React.ReactElement => (
                                    <div className="flex gap-4">
                                        <p className="text-5xl">•</p>
                                        <div className="flex flex-col gap-4 mt-2.5">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-lg font-semibold">{school.period}</p>
                                                <p className="text-3xl font-semibold">{school.name} - {school.place}</p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-2xl font-medium">{school.title}</p>
                                                <p className="text-md">{school.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/*Work Experience*/}
                        <div className="flex flex-col">
                            <h3 className="text-3xl mb-8">Work</h3>
                            <div className="flex flex-col gap-8">
                                {work.map((work: EducationWork): React.ReactElement => (
                                    <div className="flex gap-4">
                                        <p className="text-5xl">•</p>
                                        <div className="flex flex-col gap-4 mt-2.5">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-lg font-semibold">{work.period}</p>
                                                <p className="text-3xl font-semibold">{work.name} - {work.place}</p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-2xl font-medium">{work.title}</p>
                                                <p className="text-md">{work.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center w-full mb-4 -mt-16">
                            <ContactIcons/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}