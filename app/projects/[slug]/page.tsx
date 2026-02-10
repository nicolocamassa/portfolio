import { HeroSection } from "@/_components/sections";
import { ProjectArticle } from "@/_components/sections/ProjectArticle/ProjectArticle";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  let pageData;

  try {
    pageData = await import(`@/_content/projects/${slug}`);
  } catch {
    return <div>Articolo non trovato</div>;
  }
  
  const { heroSectionBlog } = pageData;

  return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <main>
      <HeroSection content={heroSectionBlog} slug={slug} />
      <ProjectArticle slug={slug}></ProjectArticle>
    </main>
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    <>
      <HeroSection content={heroSectionBlog} slug={slug} /* className="pt-[180px]! -mt-[80px]" */ />
      <Container>
        <Callout type="danger">
          Questa sezione di blogging è ancora in fase di sviluppo.
        </Callout>
        <ReadingInfoBanner content={readingInfo} />

        <Section>
          <div className="flex flex-col gap-10 xl:flex-row lg:gap-(--space-blog) relative">
            <div className="w-full min-w-0 order-2 xl:order-1">
              {blogContent.sections?.map((s: SectionType) => (
                <section
                  id={s.id}
                  key={s.id}
                  className="mb-(--section-sm) -mt-25 pt-20 flex flex-col gap-2 lg:grid lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-(--space-blog)"
                >
                  <div className="text-left mt-(--space-lg) lg:text-right lg:pt-2 lg:sticky lg:top-24 lg:self-start">
                    {s.badge ? <Badge size="md">{s.badge}</Badge> : null}
                  </div>
                  <div className="max-w-full border-b border-b-gray-100 pb-(--space-sm) lg:pb-(--space-md)">
                    <RenderBlocks blocks={s.blocks} />
                  </div>
                </section>
              ))}
            </div>
            <div className="order-1 xl:order-2 w-full xl:w-64 shrink-0">
              <div className="sticky top-24">
                <TocClient sections={sectionsForToc} />
              </div>
            </div>
          </div>
          <Changelog changelog={changelog} />
          <div className="flex gap-2">
            <Button className="mt-5 flex items-center gap-2" href=""><ArrowLeft size={20}/> Torna alla home</Button>
            <Button className="mt-5 flex items-center gap-2" href="" color="white"><Github size={20}/>Vedi su GitHub</Button>
          </div>
        </Section>
      </Container>
    </>
>>>>>>> Stashed changes
  );
}


