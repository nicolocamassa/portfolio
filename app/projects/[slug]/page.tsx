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
                <section
                  key={s.id}
                  className="mb-[var(--space-xl)] grid grid-cols-[140px_minmax(0,1fr)] gap-[var(--space-xl)]"
                >
                  {/* COLONNA SINISTRA */}
                  <div className="pt-2 text-right sticky top-3 z-100 pb-30 md:top-3 md:z-100 py-2 self-start">
                    {s.badge ? <Badge size="md">{s.badge}</Badge> : null}
                  </div>

                  {/* COLONNA DESTRA */}
                  <div className="max-w-3xl">
                    <RenderBlocks blocks={s.blocks} />
                  </div>
                </section>
              ))}
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
              <h3
                className="text-2xl font-bold mb-(--space-xs)"
                key={i}
                id={b.id}
              >
                {b.text}
              </h3>
            ) : (
              <h2 className="mb-(--space-xs) text-5xl!" key={i} id={b.id}>
                {b.text}
              </h2>
            );

          case "paragraph":
            return <p className="mb-(--space-md) text-(--text-secondary)">{b.text}</p>;
        }
      })}
    </>
  );
}
