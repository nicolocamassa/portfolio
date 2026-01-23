import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import HeroSection from "@/app/components/sections/HeroSection";
import Badge from "@/app/components/ui/Badge";
import TocClient from "@/app/components/ui/TocClient";
import { blogPages } from "@/app/content/blog-pages";
import type { ContentBlock } from "@/app/content/blog-pages";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const index = blogPages.findIndex((p) => p.slug === slug);

  const sectionsForToc = blogPages[index].sections?.map((s) => ({
      id: s.id,
      label: s.badge ?? s.id,
    })) ?? [];

  return (
    <>
      <HeroSection content={blogPages[index].hero}></HeroSection>

      <Container>
        <Section>
          <div className="flex flex-col gap-10 xl:flex-row lg:gap-(--space-blog) relative">
            <div className="w-full min-w-0 order-2 xl:order-1">
              {blogPages[index].sections?.map((s) => (
                <section
                  id={s.id}
                  key={s.id}
                  className="mb-(--section-sm) flex flex-col gap-2 lg:grid lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-(--space-blog)"
                >

                  <div
                    className="
                    text-left mb-2 
                    lg:text-right lg:mb-0 lg:pt-2 lg:sticky lg:top-24 lg:self-start
                  "
                  >
                    {s.badge ? <Badge size="md">{s.badge}</Badge> : null}
                  </div>

                  {/* COLONNA CONTENUTO */}
                  <div className="max-w-full border-b border-b-gray-100 pb-8 lg:pb-3">
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
                className="text-xl md:text-2xl font-bold mb-(--space-xs) mt-2"
                key={i}
                id={b.id}
              >
                {b.text}
              </h3>
            ) : (
              // Responsive font size: text-3xl su mobile, text-5xl su desktop
              <h2
                className="mb-(--space-xs) text-3xl md:text-5xl font-bold leading-tight"
                key={i}
                id={b.id}
              >
                {b.text}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={i}
                className="mb-(--space-lg) text-(--text-secondary) leading-relaxed"
              >
                {b.text}
              </p>
            );

          case "image":
            return (
              <figure key={i} className="mb-(--space-md)">
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

          case "list":
            return (
              <div
                key={i}
                className="flex flex-wrap gap-2 mb-(--space-lg)"
              >
                {b.items.map((item, idx) => (
                  <Badge
                    key={idx}
                    type="list"
                    className="max-w-full truncate text-(--text-secondary)"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
