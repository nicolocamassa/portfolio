import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import AboutSection from "./components/sections/AboutSection";
import { heroSection } from "./content/home";


export default function Page() {
  return (
    <main>
      <HeroSection content={heroSection} />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
