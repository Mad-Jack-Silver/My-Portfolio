import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedProject from "./components/FeaturedProject";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbientBackground from "./components/AmbientBackground";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-warm font-body">
      <AmbientBackground />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Stats />
          <FeaturedProject />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
