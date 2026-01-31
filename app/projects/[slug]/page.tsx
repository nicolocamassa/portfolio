import { ArrowLeft, Github } from "lucide-react";
import Markdown from 'react-markdown';
import { HeroSection } from "@/_components/sections";

/* Tipi */
import type { ContentBlock, Sections } from "@/_types/blogPages";

/* Componenti di layout */
import { Container, Section } from "@/_components/layout";

/* Componenti */
import { Badge, Button, Callout } from "@/_components/ui";
import { TocClient, CodeBlock, Changelog, ReadingInfoBanner } from "@/_components/features/blog";


export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  let pageData;

  try {
    pageData = await import(`@/_content/projects/${slug}`);
  } catch {
    return <div>Articolo non trovato</div>;
  }
  
  const { heroSectionBlog, readingInfo, blogContent, changelog } = pageData;

  const sectionsForToc =
    blogContent.sections?.map((s: Sections) => ({
      id: s.id,
      label: s.badge ?? s.id,
    })) ?? [];

  return (
    <>
      <HeroSection content={heroSectionBlog} />
      <Container>
        <ReadingInfoBanner content={readingInfo} />
        <Callout type="danger">
          Questa sezione di blogging è ancora in fase di sviluppo.
        </Callout>
        <Section>
          <div className="flex flex-col gap-10 xl:flex-row lg:gap-(--space-blog) relative">
            <div className="w-full min-w-0 order-2 xl:order-1">
              {blogContent.sections?.map((s: Sections) => (
                <section
                  id={s.id}
                  key={s.id}
                  className="mb-(--section-sm) -mt-25 pt-20 flex flex-col gap-2 lg:grid lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-(--space-blog)"
                >
                  <div className="text-left mb-2 lg:text-right lg:mb-0 lg:pt-2 lg:sticky lg:top-24 lg:self-start">
                    {s.badge ? <Badge size="md">{s.badge}</Badge> : null}
                  </div>
                  <div className="max-w-full border-b border-b-gray-100 pb-(--space-sm) lg:pb-(--space-md)">
                    <RenderBlocks blocks={s.blocks} />
                  </div>
                </section>
              ))}
            </div>
            <div className="order-1 xl:order-2 w-64 shrink-0">
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
  );
}

/* TODO: Aggiungere il <Markdown> a tutti i blocchi */
function RenderBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "heading": {
            if (b.level === 1) {
              return (
                <h2
                  key={b.id ?? i}
                  id={b.id}
                  className="mt-(--space-xs) text-2xl md:text-4xl!"
                >
                  {b.text}
                </h2>
              );
            }

            if (b.level === 2) {
              return (
                <h3
                  key={b.id ?? i}
                  id={b.id}
                  className="text-xl md:text-2xl font-bold mt-(--space-md) -mb-1"
                >
                  {b.text}
                </h3>
              );
            }

            return (
              <h4
                key={b.id ?? i}
                id={b.id}
                className="text-lg md:text-xl font-semibold mt-(--space-sm) -mb-2"
              >
                {b.text}
              </h4>
            );
          }

          case "paragraph":
            return (
              <Markdown
              key={i}
                components={{
                  p: ({ children }) => (
                    <p className="mt-(--space-xs) text-(--text-secondary) leading-relaxed [&_code]:text-red-600">
                      {children}
                    </p>
                  ),
                }}
              >
                {b.text}
              </Markdown>
            );

          case "image":
            return (
              <figure key={i} className="mt-(--space-md)">
                <img
                  className="w-full h-auto rounded-md border border-gray-100"
                  src={b.src}
                  alt={b.alt}
                />
                {b.caption && (
                  <figcaption className="text-sm text-(--text-secondary) mt-2 italic">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "list": {
            if (b.listType === "bullet") {
              return (
                <ul
                  key={i}
                  className="list-disc pl-8 mt-(--space-md) space-y-3 text-(--text-secondary)"
                >
                  {b.items.map((item, idx) => (
                    <Markdown
                      key={idx}
                        components={{
                          li: ({ children }) => (
                            <li>
                              {children}
                            </li>
                          ),
                        }}
                      >
                        {item}
                      </Markdown>
                  ))}
                </ul>
              );
            }

            if (b.listType === "numbered") {
              return (
                <ol
                  key={i}
                  className="list-decimal pl-12 mt-(--space-md) space-y-3 text-(--text-secondary)"
                >
                  {b.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              );
            }

            return (
              <div key={i} className="flex flex-wrap gap-2 mt-(--space-xs)">
                {b.items.map((item, idx) => (
                  <Badge
                    key={idx}
                    type="list"
                    size="listBase"
                    className="max-w-full truncate text-(--text-secondary)"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            );
          }

          case "code": 
            return <CodeBlock key={i} text={b.text} language={b.language} />;

          case "callout": {
              return (
                <Callout key={b.title} type={b.variant} title={b.title}>{ b.text }</Callout>
              )
            
          }
          
          default:
            return null;
        }
      })}
    </>
  );
}
