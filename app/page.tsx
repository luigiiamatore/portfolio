import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col px-6">
      <Intro />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
