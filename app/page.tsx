import { AboutSection, ProjectSection, HeroSection } from "@/_components/sections/index"
import { heroSection } from "@/_content/home";


export default function Page() {
  return (
    <main>
      <HeroSection content={heroSection} />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
