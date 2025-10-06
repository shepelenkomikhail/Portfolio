import Header from "../components/Header.tsx";
import ContactIcons from "../components/ContactIcons.tsx";
import Footer from "../components/Footer.tsx";
import mainSkills from "../storage/mainSkills.ts";
import {Skill} from "../storage/types/Skill.ts";
import sideSkills from "../storage/sideSkills.ts";
import languageSkills from "../storage/languageSkills.ts";
import education from "../storage/education.ts";
import work from "../storage/work.ts";
import certificates from "../storage/certificates.ts";
import {EducationWork} from "../storage/types/Education.ts";
import {LangSkill} from "../storage/types/LangSkill.ts";

export default function About() {
    return(
        <>
            <Header currentPage={"aboutme"}/>
            <main className={"grid grid-cols-12 mt-8"}>
                <div className="col-span-10 2xl:col-span-8 col-start-2 2xl:col-start-3 flex flex-col gap-44">
                    <div className="flex flex-col gap-24 md:gap-36">
                        <div>
                            <h1 className="text-titleYellow">about me.</h1>
                            <p className="text-md md:text-md w-full md:w-3/4 mt-4 mb-4">
                                I am a highly motivated and disciplined individual. Through my ability and understanding of programming in different languages, I am finishing my studies in B.Sc. Computer Science. I have a strong base that allowed me to complete my studies tasks on different technologies.
                                I have good analytical and communication skills. I can adapt to change easily and have the confidence to take challenges head on. Having been part of multiple sports teams as well as other academic groups containing people from very diverse backgrounds, I am a team player and can function on my own when needed.
                            </p>
                        </div>

                        {/*Skills*/}
                        <div className="flex flex-col gap-16 -mt-16">
                            <div className="flex flex-col gap-8">
                                <h3 className="text-3xl">Main Skills</h3>
                                <div className="flex flex-wrap gap-8 md:gap-10">
                                    {mainSkills.map((skill: Skill): React.ReactElement => (
                                        <img src={skill.path} alt={skill.name} key={skill.name} className="w-[45px] md:w-[90px]"/>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h3 className="text-3xl">Side Skills</h3>
                                <div className="flex flex-wrap gap-8 md:gap-10">
                                    {sideSkills.map((skill: Skill): React.ReactElement => (
                                        <img src={skill.path} alt={skill.name} key={skill.name} className="w-[45px] md:w-[90px]"/>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h3 className="text-3xl">Language Skills</h3>
                                <div className="flex flex-wrap gap-8 md:gap-10">
                                    {languageSkills.map((skill: LangSkill, index:number): React.ReactElement => (
                                        <figure className="flex flex-col items-center gap-3" key={index}>
                                            <img src={skill.path} alt={skill.name} key={skill.name} className="w-[45px] md:w-[90px]"/>
                                            <figcaption className="text-md font-medium">{skill.level}</figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/*Education*/}
                        <div className="flex flex-col">
                            <h3 className="text-3xl mb-8">Education</h3>
                            <div className="flex flex-col gap-8">
                                {education.map((school: EducationWork, index:number): React.ReactElement => (
                                    <div className="flex gap-4" key={index}>
                                        <p className="text-4xl md:text-5xl">•</p>
                                        <div className="flex flex-col gap-4 mt-2 md:mt-2.5">
                                            <div className="flex flex-col gap-3 md:gap-1">
                                                <p className="text-md md:text-md font-semibold">{school.period}</p>
                                                <p className="text-2xl md:text-3xl font-semibold">{school.name} - {school.place}</p>
                                            </div>
                                            <div className="flex flex-col gap-3 md:gap-1">
                                                <p className="text-xl md:text-2xl font-medium">{school.title}</p>
                                                <p className="text-[15px] md:text-md">{school.description}</p>
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
                                {work.map((work: EducationWork, index:number): React.ReactElement => (
                                    <div className="flex gap-4" key={index}>
                                        <p className="text-4xl md:text-5xl">•</p>
                                        <div className="flex flex-col gap-4 mt-2 md:mt-2.5">
                                            <div className="flex flex-col gap-3 md:gap-1">
                                                <p className="text-md md:text-md font-semibold">{work.period}</p>
                                                <p className="text-2xl md:text-3xl font-semibold">{work.name} - {work.place}</p>
                                            </div>
                                            <div className="flex flex-col gap-3 md:gap-1">
                                                <p className="text-xl md:text-2xl font-medium">{work.title}</p>
                                                <p className="text-[15px] md:text-md">{work.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/*Work Experience*/}
                        <div className="flex flex-col">
                            <h3 className="text-3xl mb-8">Certificates</h3>
                            <div className="flex flex-col gap-8">
                                {certificates.map((cert: EducationWork, index:number): React.ReactElement => (
                                    <div className="flex gap-4" key={index}>
                                        <p className="text-4xl md:text-5xl">•</p>
                                        <div className="flex flex-col gap-4 mt-2 md:mt-2.5">
                                            <div className="flex flex-col gap-3 md:gap-1">
                                                <p className="text-md md:text-md font-semibold">{cert.period}</p>
                                                <p className="text-2xl md:text-3xl font-semibold">{cert.name} - {cert.place}</p>
                                            </div>
                                            <div className="flex flex-col gap-3 md:gap-1">
                                                <p className="text-xl md:text-2xl font-medium">{cert.title}</p>
                                                <p className="text-[15px] md:text-md">{cert.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center w-full mb-4 -mt-6 md:-mt-16">
                            <ContactIcons/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}