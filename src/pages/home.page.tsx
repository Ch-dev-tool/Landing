import ServiceGallery from "../components/utils/Service.component"
import About from "../components/utils/About.component"
import Hero from "../components/utils/Hero.component"
import Navbar from "../components/utils/Nav.component"
import ProjectsGallery from "../components/utils/Projects.component";
import Contact from "../components/utils/Contact.component";
import Footer from "../components/utils/Footer.component";

function HomePage() {
    return (
        <main className="w-full">
            <Navbar />
            <Hero />
            <About />
            <ServiceGallery />
            <ProjectsGallery />
            <Contact />
            <Footer />
        </main>
    )
}

export default HomePage