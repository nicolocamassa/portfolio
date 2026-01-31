import Badge from "../_ui/Badge";
import ProjectCard from "../_ui/ProjectCard";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Stack from "../layout/Stack";


export default function ProjectSection() {
  return (
    <Section id="projects">
      <Container className="px-4 sm:px-6">

        {/* Heading */}
          <Stack gap="sm" className="items-start">
            <Badge size="md">Progetti</Badge>

            <Stack gap="xl">
              <h2 className="font-sans font-semibold tracking-tight text-balance
                            text-xl sm:text-xl md:text-5xl lg:text-6xl
                            max-w-3xl">
                Cerco di dare un valore reale ai miei progetti.
              </h2>
              <ProjectCard></ProjectCard>
            </Stack>
          </Stack>
      </Container>
    </Section>
  );
}
