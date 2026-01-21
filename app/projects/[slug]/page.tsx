import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import Stack from "@/app/components/layout/Stack";
import HeroSection from "@/app/components/sections/HeroSection";
import Badge from "@/app/components/ui/Badge";
import Toc from "@/app/components/ui/TableOfContents";
import { blogPages } from "@/app/content/blog-pages";

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
              {/* CONTENUTO DEL MAIN */}
              <Stack className="items-start">
                
                {/* TODO: Stack potrebbe essere item start di default? */}
                {blogPages[index].sections?.length ? (
                  <Stack gap="xl">
                    {blogPages[index].sections.map((section) => (

                        <Stack className="items-start">
                          <Badge>{ section.badge }</Badge>
                        
                          <Stack gap="sm">
                            <h2 className="md:max-w-full!">{ section.title }</h2> {/* TODO: Style titolo blog section diverso da titolo home section (w-full in blog) */}
                          <p>{ section.description }</p>
                          </Stack>
                        </Stack>
                    ))}
                  </Stack>
                ) : null}
              </Stack>
            </div>

            {/* TABLE OF CONTENT */}
            <Toc className="order-1 lg:order-2" />
          </div>
        </Section>
      </Container>
    </>
  );
}
