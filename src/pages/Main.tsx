import Header from "../components/Header.tsx";
import Introduction from "../components/Introduction.tsx";

export default function Main() {
    return(
        <>
            <Header />
            <main className={"grid grid-cols-12 mt-24"}>
                <Introduction />
            </main>
        </>
    );
}