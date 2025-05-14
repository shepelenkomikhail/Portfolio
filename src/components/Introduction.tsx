import {useMediaQuery} from "react-responsive";

export default function Introduction() {
    const isSmallScreen: boolean = useMediaQuery({ maxWidth: 1025 });

    return (
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            {isSmallScreen && (
                <img src={"./myphoto.jpeg"} style={{width: "362px", height: "244px", marginBottom: "54px"}}
                     alt={"Photo of Mike"} className="col-start-10 rounded-2xl">
                </img>
            )}
            <div className="flex flex-col items-start">
                <span>
                    <h2 className="mb-2 lg:mb-3">Hello, I'm Mike,</h2>
                    <h4 className="leading-none">
                        Software {!isSmallScreen && (<br/>)} Engineer
                    </h4>
                    <h2 className="mt-2 lg:mt-6">based in Hungary.</h2>
                </span>
                <div className="relative w-40 h-14 group mt-8">
                    <div className="absolute translate-x-1.5 translate-y-1.5 bg-buttonYellow
                                           transition-transform rounded-lg opacity-90 w-full h-full
                                           group-hover:translate-x-0 group-hover:translate-y-0">
                    </div>
                    <a href="./CV-Shepelenko-Mykhailo.pdf" download="Shepelenko_Mykhailo_CV.pdf">
                        <button className="absolute w-full h-full border border-[#474306] rounded-lg text-gray-900">
                            <span className="relative z-10 text-[#474306]">Resume</span>
                        </button>
                    </a>
                </div>
            </div>

            {!isSmallScreen && (
                <img src={"./myphoto.jpeg"} style={{width: "455px", height: "375px"}}
                     alt={"Photo of Mike"} className="col-start-10 rounded-extra">
                </img>
            )}
        </div>
    );
}