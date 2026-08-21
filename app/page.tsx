import About from "@/components/About";
import Contact from "@/components/Contact";
import Differentiators from "@/components/Differentiators";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import ImpactSnapshot from "@/components/ImpactSnapshot";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ImpactSnapshot />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Differentiators />
        <HowIWork />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
