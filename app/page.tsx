import HeroSection from "./components/_sections/HeroSection";
import ProjectSection from "./components/_sections/ProjectSection";
import AboutSection from "./components/_sections/AboutSection";
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
