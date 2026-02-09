"use client"
import { Badge } from "@/_components/ui";
import ProjectCard from "./ProjectCard";
import { Stack, Section, Container } from "@/_components/layout";
import { useGlobalAnimations } from "@/_utils/animation";

export function ProjectSection() {
  useGlobalAnimations();

  return (
    <Section id="projects">
      <Container className="px-4 sm:px-6">
        <Stack gap="sm" className="items-start">
          <Badge size="md">Progetti</Badge>

          <Stack gap="xl">
            <h2 className="reveal font-sans font-semibold tracking-tight text-balance
                            text-xl sm:text-xl md:text-5xl lg:text-6xl
                            max-w-3xl">
              Cerco di dare un valore reale ai miei progetti.
            </h2>
            
            <div className="reveal">
              <ProjectCard />
            </div>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}