import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/project/Project";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>

      <section>
        <Services />
      </section>
     
      <section id="">
        <Parallax type="portfolio" />
      </section>

      <section id="Portfolio">
     <Portfolio />
     </section>

      <section id="Portfolio">
        <Projects />
      </section>
     
      <section id="Experience">
      <Experience />
      </section>

      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
