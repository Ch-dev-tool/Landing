import About from "../components/utils/About.component"
import Hero from "../components/utils/Hero.component"
import Navbar from "../components/utils/Nav.component"

function HomePage() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
        </main>
    )
}

export default HomePage