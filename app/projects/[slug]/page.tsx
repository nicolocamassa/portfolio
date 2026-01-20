import HeroSection from "@/app/components/sections/HeroSection";
import { demoApp } from "@/app/content/demo-app";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <HeroSection content={demoApp}>

    </HeroSection>
  );
}
