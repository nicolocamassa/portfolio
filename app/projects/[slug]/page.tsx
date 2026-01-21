import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import Stack from "@/app/components/layout/Stack";
import HeroSection from "@/app/components/sections/HeroSection";
import Badge from "@/app/components/ui/Badge";
import Toc from "@/app/components/ui/TableOfContents";
import { blogPages } from "@/app/content/blog-pages";
  

export default async function ProjectPage({ params }: { params: { slug: string } }) {

  /* Contenuto in base allo slug */
  const { slug } = await params;
  const index = blogPages.findIndex((p) => p.slug === slug);

  return (
    <>
      <HeroSection content={blogPages[index]}></HeroSection>
      <Container>
        <Section>
          <div className="flex flex-col gap-20 lg:flex-row xl:gap-40">
            <div className="w-full order-2 lg:order-1">
              {/* CONTENUTO DEL MAIN */}
              {/* TODO: Rendere dinamici i contenuti */}
              {/* TODO: Responsiveness tra TCO e Main */}
              <Stack className="items-start"> {/* TODO: Stack potrebbe essere item start di default? */}
                <Badge>Progetti</Badge>
                <Stack gap="sm">
                  <h2>Idea e obiettivi del progetto</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi quis, quas beatae maiores officia, sapiente libero, repudiandae dolorem esse debitis nesciunt soluta maxime voluptas fugit temporibus! Ullam, voluptas cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio modi earum alias esse veritatis, dolorum, commodi tenetur ab pariatur excepturi ducimus optio iusto quaerat? Quos adipisci dolorum corporis odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo omnis tempore debitis explicabo doloremque deserunt iusto, nostrum dicta sint beatae ratione quod corporis asperiores repellendus eaque maxime! Ab, sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ab quod saepe. Praesentium at et consequuntur quaerat incidunt itaque in dolorem quibusdam, nostrum voluptates est, fugiat quisquam repellat facilis laudantium.</p>
                </Stack>
                
              </Stack>
            </div>
            
            {/* TABLE OF CONTENT */}
            <Toc className="order-1 lg:order-2"/>
          </div>
        </Section>
      </Container>
    </>
  );

}
