import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll helper
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of our navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  // Scroll spy to update active section in the sticky header automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "services", "about", "contact"];
      const scrollPosition = window.scrollY + 120; // adding threshold offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-neutral-800 selection:text-white scroll-smooth antialiased">
      {/* Sticky Header */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* Home / Hero Section */}
        <Hero onCtaclick={handleNavClick} />

        {/* Projects Section */}
        <Projects onContactClick={() => handleNavClick("contact")} />

        {/* Services Section */}
        <Services onContactClick={() => handleNavClick("contact")} />

        {/* About Section */}
        <About />

        {/* Contact Us Form & Service Locations */}
        <ContactForm />
      </main>

      {/* Footer Section */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}
