import About from "@/components/about/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/Skills/Skills";
import React from "react";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
