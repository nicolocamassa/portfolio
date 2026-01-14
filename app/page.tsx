import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import AboutSection from "./components/sections/AboutSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
