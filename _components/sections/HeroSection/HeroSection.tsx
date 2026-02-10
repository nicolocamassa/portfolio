import { BadgeProps } from "@/_components/ui/Badge";
import { Badge, Button, HeroBanner } from "@/_components/ui";
import { Stack, Section, Container } from "@/_components/layout";
import { BlogImage } from "@/_components/features/blog/BlogImage";
import HeroAnimation from "./HeroAnimation";

type HeroCta = { label: string; href: string; color?: "black" | "white"; size?: "md" | "lg" };

export type HeroContent = {
  badge: BadgeProps;
  title: string;
  description: string;
  ctas?: HeroCta[];
  heroBanner?: boolean;
  image?: HeroImage;
};

type HeroImage = { src: string; alt: string };

export function HeroSection({ slug, content }: { slug: string; content: HeroContent }) {
  const { badge, title, description, ctas, heroBanner } = content;

  return (
    <Section className="reveal-main">
      <Container>
        <Stack gap="sm" className="items-center text-center">
          <Badge size={badge.size} type={badge.type}>{badge.children}</Badge>
          <Stack gap="md" className="items-center text-center">
            <h1 className="reveal-main w-full font-sans font-semibold tracking-tighter text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              {title}
            </h1>
            <Stack gap="xl" className="items-center text-center">
              <p className="reveal-main max-w-9/10 text-base sm:text-md md:text-xl text-(--text-secondary) text-pretty">
                {description}
              </p>
              {ctas?.length && (
                <Stack gap="xs" direction="flex-col" className="sm:flex-row justify-center items-center">
                  {ctas.map((cta) => (
                    <Button key={cta.href} href={cta.href} color={cta.color} size={cta.size}>
                      {cta.label}
                    </Button>
                  ))}
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <HeroAnimation heroBanner={heroBanner}>
        {heroBanner ? <HeroBanner/> : <BlogImage slug={slug} />}
      </HeroAnimation>
    </Section>
  );
}