import ServiceGallery from "../components/utils/Service.component"
import About from "../components/utils/About.component"
import Hero from "../components/utils/Hero.component"
import Navbar from "../components/utils/Nav.component"
import ProjectsGallery from "../components/utils/Projects.component";

function HomePage() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <ServiceGallery />
            <ProjectsGallery />
        </main>
    )
}

export default HomePage