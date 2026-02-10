import { ArrowLeft, Github } from "lucide-react";

import type { Sections } from "@/_types/projectArticle";

import { Container, Section, Stack } from "@/_components/layout";

import { Button, Callout } from "@/_components/ui";
import { TocClient, Changelog } from "@/_components/features/blog";
import ReadingInfoBanner from "@/_components/features/blog/ReadingInfoBanner";
import { BlockRenderer } from "./BlockRenderer";
import { SectionWrapper } from "./SectionWrapper";


export async function ProjectArticle({ slug }: { slug: string }) {
  let pageData;

  try {
    pageData = await import(`@/_content/projects/${slug}`);
  } catch {
    return <div>Articolo non trovato</div>;
  }
  
  const { readingInfo, projectArticle, changelog } = pageData;

  /* TODO: Il recupero delle section si potrebbe fare nel componente client della TOC (o più efficiente così?)*/
  const sectionsForToc =
    projectArticle.sections?.map((s: Sections) => ({
      id: s.id,
      label: s.badge ?? s.id,
    })) ?? [];

  return (
    /* TODO: React.memo() ? */
    <Container>
        {/* Informazioni della pagina */}
        <ReadingInfoBanner content={readingInfo} />
        <Callout type="danger">
            Questa sezione di blogging è ancora in fase di sviluppo.
        </Callout>
        
        {/* Lettura, badge e TOC */}
        <Section className="flex flex-col gap-10 xl:flex-row lg:gap-(--space-blog) relative">
            <div className="w-full min-w-0 order-2 xl:order-1">
                {projectArticle.sections?.map((s: Sections) => (
                <SectionWrapper key={s.id} section={s}>
                    <BlockRenderer blocks={s.blocks}></BlockRenderer>
                </SectionWrapper>
                ))}
            </div>
            <TocClient sections={sectionsForToc} />
        </Section>

        {/* Fine articolo con changelog e pulsanti */}
        <Changelog changelog={changelog} />
        <Stack direction="flex-row" className="mt-5" gap="xs">
            <Button href="/"><ArrowLeft size={20}/> Torna alla home</Button>
            <Button target="_blank" rel="noopener noreferrer" href={changelog.linkGithub} color="white"><Github size={20}/>Vedi su GitHub</Button>
        </Stack>
    </Container>
    )
}

