import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import Stack from "@/app/components/layout/Stack";
import HeroSection from "@/app/components/sections/HeroSection";
import Badge from "@/app/components/ui/Badge";
import NavItem from "@/app/components/ui/NavItem";
import Toc from "@/app/components/ui/TableOfContents";
import { blogPages } from "@/app/content/blog-pages";
import type { ContentBlock } from "@/app/content/blog-pages";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  /* Contenuto in base allo slug */
  const { slug } = await params;
  const index = blogPages.findIndex((p) => p.slug === slug);

  console.log(blogPages[index]);

  return (
    <>
      <HeroSection content={blogPages[index].hero}></HeroSection>

      <Container>
        <Section>
          <div className="flex flex-col gap-20 lg:flex-row xl:gap-40">
            <div className="w-full order-2 lg:order-1">

              {/* RENDERING DEI BLOCCHI */}
              {blogPages[index].sections?.map((s) => (
                <>
                  {s.badge ? <Badge>{s.badge}</Badge> : null}
                  <RenderBlocks blocks={s.blocks} />
                </>
              ))}

              {/* CONTENUTO DEL MAIN */}
              <Stack className="items-start">
                {/* TODO: Stack potrebbe essere item start di default? */}
                {blogPages[index].sections?.length ? (
                  <Stack gap="xl">
                    {blogPages[index].sections.map((section) => (
                      <Stack className="items-start">
                        <div className="sticky bg-white top-15 md:top-3 md:z-100 py-2 w-full h-full">
                          <Badge className="bg-[#EBF3FF]">
                            {section.badge}
                          </Badge>
                        </div>

                        <Stack gap="sm">
                          <h2 className="md:max-w-full!">{section.title}</h2>{" "}
                          {/* TODO: Style titolo blog section diverso da titolo home section (w-full in blog) */}
                          <p>{section.description}</p>
                        </Stack>

                        <Stack gap="xs" className="items-start">
                          <h3 className="text-3xl font-bold">
                            Obiettivi misurabili
                          </h3>
                          <Badge type="list" size="sm">
                            Creazione sessione in meno di 20 secondi (utente non
                            loggato incluso)
                          </Badge>
                        </Stack>

                        <Stack gap="xs">
                          <h3 className="text-3xl font-bold">
                            Obiettivi misurabili
                          </h3>
                          <p>{section.description}</p>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                ) : null}
              </Stack>
            </div>

            {/* TABLE OF CONTENT */}
            <Toc className="order-1 lg:order-2">
              {blogPages[index].sections?.length ? (
                <Stack gap="xs">
                  {blogPages[index].sections.map((section) => (
                    <NavItem href={`#${section.badge}`}>
                      {section.badge}
                    </NavItem>
                  ))}
                </Stack>
              ) : null}
            </Toc>
          </div>
        </Section>
      </Container>
    </>
  );
}

function RenderBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "heading":
            return b.level === 2 ? (
              <h3 className="text-red-500 mb-(--space-xs)" key={i} id={b.id}>
                {b.text}
              </h3>
            ) : (
              <h2 className="text-blue-500" key={i} id={b.id}>
                {b.text}
              </h2>
            );

          case "paragraph":
            return <p>{b.text}</p>;
        }
      })}
    </>
  );
}
