import Catalogue from "./Catalogue.jsx";

function MainContent() {
    return (
        <main>
            <header className="flex justify-center my-8 bg-red-600 p-4 rounded-lg">
                <h1 className="site-title">NUESTRA CARTA AMIGO</h1>
            </header>
            <Catalogue />
        </main>
    )
}

export default MainContent;