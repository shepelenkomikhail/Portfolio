import {HeaderIcons} from "./HeaderIcons.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";

export default function Header(){
    const navigate: NavigateFunction = useNavigate();

    const handleContacts: ()=> void|Promise<void> = ():void|Promise<void> => {
        setTimeout(() => {
            navigate("/");
            const element: HTMLElement | null = document.getElementById("contacts");
            if(element) element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
    }

    return (
        <header className="col-span-12 grid grid-cols-12 shadow-gray-500 shadow-custom-blur">
            <div className="lg:col-span-10 2xl:col-span-8 lg:col-start-2 2xl:col-start-3 flex flex-row my-8 justify-between items-center">
                <h3 onClick={() => navigate("/")} className="cursor-pointer">Shepelenko Mykhailo</h3>
                <div className="flex flex-row gap-5 2xl:gap-8 items-baseline">
                    <a onClick={():void|Promise<void> => navigate("/aboutme")}>About me</a>
                    <a onClick={():void|Promise<void> => navigate("/projects")}>Projects</a>
                    <a onClick={handleContacts}>Contacts</a>
                </div>
                <HeaderIcons />
            </div>
        </header>
    );
}