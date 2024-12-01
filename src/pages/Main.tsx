import Header from "../components/Header.tsx";
import Introduction from "../components/Introduction.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Work from "../components/Work.tsx";
import Contacts from "../components/Contacts.tsx";
import Footer from "../components/Footer.tsx";


export default function Main() {
    return(
        <>
            <Header currentPage={"contacts"}/>
            <main className={"grid grid-cols-12 mt-24"}>
                <div className="lg:col-span-10 2xl:col-span-8 lg:col-start-2 2xl:col-start-3 flex flex-col gap-44">
                    <Introduction />
                    <AboutMe />
                    <Work />
                    <Contacts />
                </div>
            </main>
            <Footer />
        </>
    );
}