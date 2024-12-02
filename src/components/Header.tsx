import {HeaderIcons} from "./HeaderIcons.tsx";
import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {CurrentPage} from "../storage/types/CurrentPage.ts";
import {useEffect, useState} from "react";
import { useMediaQuery } from "react-responsive";
import SidebarSvg from "../assets/SideBarSvg.tsx";
import CrossSvg from "../assets/CrossSvg.tsx";

export default function Header({currentPage}: {currentPage: CurrentPage}){
    const navigate: NavigateFunction = useNavigate();
    const location = useLocation();
    const isSmallScreen: boolean = useMediaQuery({ maxWidth: "925px" });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar: ()=>void = (): void => {setIsSidebarOpen(!isSidebarOpen);};

    useEffect((): void => {
        if (location.pathname === "/" && location.hash === "#contacts") {
            const element: HTMLElement | null = document.getElementById("contacts");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const handleContacts: ()=>void = (): void => {
        navigate("/#contacts");
    };

    return (
        <header className="col-span-12 grid grid-cols-12 shadow-gray-500 shadow-custom-blur">
            <div className="col-span-10 2xl:col-span-8 md:col-start-2 2xl:col-start-3 flex flex-row my-8 justify-between items-center">
                <h3 onClick={() => navigate("/")} className="cursor-pointer ml-4 md:ml-0">Shepelenko Mykhailo</h3>
                {isSmallScreen ? (
                    <div className="lg:hidden absolute right-0" role="dialog" aria-modal="true">
                        <button className="rounded-md p-2 focus:outline-none"
                                onClick={toggleSidebar}
                                role="button"
                                aria-label="Open filters"
                        >
                            <SidebarSvg/>
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-row gap-5 2xl:gap-8 items-baseline">
                            <a onClick={():void|Promise<void> => navigate("/aboutme")}
                               className={`font-medium ${currentPage === "aboutme" ? "underline" : ""}`}
                            >
                                About me
                            </a>
                            <a onClick={():void|Promise<void> => navigate("/projects")}
                               className={`font-medium ${currentPage === "projects" ? "underline" : ""}`}
                            >
                                Projects
                            </a>
                            <a onClick={handleContacts}
                               className={`font-medium ${currentPage === "contacts" ? "underline" : ""}`}
                            >
                                Contacts
                            </a>
                        </div>
                        <HeaderIcons />
                    </>
                )}
            </div>
            {isSmallScreen && (
                <div
                    className={`fixed left-0 inset-0 z-50 flex bg-black bg-opacity-50 transition-transform duration-500 ease-in 
                    ${isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"} md:hidden`}
                    onClick={toggleSidebar}
                    role="dialog"
                    aria-label="Mobile filter sidebar"
                >
                    <div
                        className={`relative h-64 w-full transform overflow-y-auto bg-[#FBF8CC] p-4 shadow-md 
                                    transition-transform duration-300 ease-in
                                    ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
                        onClick={(e: React.MouseEvent): void => e.stopPropagation()}
                        aria-labelledby="filter-sidebar-title"
                    >
                        <button className="absolute right-4 top-4 text-gray-600"
                                onClick={toggleSidebar}
                                role="button"
                                aria-label="Close filters"
                        >
                            <CrossSvg/>
                        </button>
                        <div className="flex flex-col gap-5 2xl:gap-8 items-baseline">
                            <a onClick={():void|Promise<void> => navigate("/aboutme")}
                               className={`font-medium ${currentPage === "aboutme" ? "underline" : ""}`}
                            >
                                About me
                            </a>
                            <a onClick={():void|Promise<void> => navigate("/projects")}
                               className={`font-medium ${currentPage === "projects" ? "underline" : ""}`}
                            >
                                Projects
                            </a>
                            <a onClick={handleContacts}
                               className={`font-medium mb-6 ${currentPage === "contacts" ? "underline" : ""}`}
                            >
                                Contacts
                            </a>
                            <HeaderIcons />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}