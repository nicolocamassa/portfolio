import Badge from "../ui/Badge";
import ProjectCard from "../ui/ProjectCard";
import Container from "../layout/Container";
import Section from "../layout/Section";


export default function ProjectSection() {
  return (
    <Section>
      <Container className="px-4 sm:px-6">

        {/* Heading */}
        <div className="text-container">
          <Badge size="md">Progetti</Badge>
          <h2 className="mt-3 font-sans font-semibold tracking-tight text-balance
                         text-xl sm:text-xl md:text-5xl lg:text-6xl
                         max-w-3xl">
            Cerco di dare un valore reale ai miei progetti.
          </h2>
        </div>
        <ProjectCard></ProjectCard>
      </Container>
    </Section>
  );
}
