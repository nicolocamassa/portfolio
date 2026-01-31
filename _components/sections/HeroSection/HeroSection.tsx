import { BadgeProps } from "@/_components/ui/Badge";
import { Badge, Button, HeroBanner } from "@/_components/ui";
import { Stack, Section, Container } from "@/_components/layout";
import BlogImage from "@/_components/features/blog/BlogImage";

/* TODO: Rimuovere  */
type HeroCta = { label: string; href: string; color?: "black" | "white"; size?: "md" | "lg" };

export type HeroContent = {
  badge: BadgeProps;
  title: string;
  description: string;
  ctas?: HeroCta[];
  heroBanner?: boolean;
  image?: HeroImage;
}

type HeroImage = {
  src: string,
  alt: string
}

export function HeroSection({ slug, content }: { slug: string, content: HeroContent }) {
  const { badge, title, description, ctas, heroBanner } = content;

  return (
    <Section>
      <Container>
        <Stack gap="sm" className="items-center text-center">
          <Badge size={badge.size} type={badge.type}>
            { badge.children }
          </Badge>

          <Stack gap="md" className="items-center text-center">
             <h1
              className="
                w-full
                font-sans font-semibold tracking-tighter text-balance
                text-5xl leading-tighter
                sm:text-6xl sm:leading-[1.05]
                md:text-7xl md:leading-[1.05]
                lg:text-8xl lg:leading-none
                xl:text-9xl xl:leading-none">
                  { title }
            </h1>

            <Stack gap="xl" className="items-center text-center">
                <p className="
                  max-w-9/10
                  text-base sm:text-md md:text-xl
                  text-(--text-secondary)
                  text-pretty">
                    { description }
                </p>

            {ctas?.length ? (
              <Stack gap="xs" direction="flex-col" className="sm:flex-row sm:gap-2 justify-center items-center">
                {ctas.map((cta) => (
                  <Button key={cta.href} href={cta.href} color={cta.color} size={cta.size}>
                    {cta.label}
                  </Button>
                ))}
              </Stack>
            ) : null}

            </Stack>
          </Stack>
        </Stack>
      </Container>

      <div
        className="relative mt-20 sm:mt-24 lg:mt-35 w-full bg-cover bg-center pb-2"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <Container className="px-8 sm:px-6">
              <div className="
                  -translate-y-6 sm:-translate-y-10
                  rounded-2xl bg-white
                  flex flex-col md:flex-row
                  divide-y md:divide-y-0 md:divide-x
                  divide-(--border-default)
                  shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]
                  overflow-hidden"
              >
              {heroBanner?.valueOf ? (
                <HeroBanner></HeroBanner> 
              ) : 
                <BlogImage slug={slug}></BlogImage>
              }
              </div>
        </Container>
      </div>
    </Section>
  );
}
