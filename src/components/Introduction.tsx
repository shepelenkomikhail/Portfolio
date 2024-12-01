export default function Introduction() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
                <span>
                    <h2 className="mb-3">Hello, I'm Mike,</h2>
                    <h1 className="leading-none">
                        Software <br/> Engineer
                    </h1>
                    <h2 className="mt-6">based in Hungary.</h2>
                </span>
                <div className="relative w-40 h-14 group mt-8">
                    <div className="absolute translate-x-1.5 translate-y-1.5 bg-buttonYellow
                                           transition-transform rounded-md opacity-90 w-full h-full
                                           group-hover:translate-x-0 group-hover:translate-y-0">
                    </div>
                    <a href="./CV.pdf" download="Shepelenko_Mykhailo_CV.pdf">
                        <button className="absolute w-full h-full border border-[#474306] rounded-md text-gray-900">
                            <span className="relative z-10 text-[#474306]">Resume</span>
                        </button>
                    </a>
                </div>
            </div>

            <img src={"./myphoto.jpeg"} style={{width: "455px", height: "375px"}}
                 alt={"Photo of Mike"} className="col-start-10 rounded-extra">
            </img>
        </div>
    );
}