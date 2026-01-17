import Badge from "../ui/Badge";
import Button from "../ui/Buttons";
import HeroBanner from "../ui/HeroBanner";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Stack from "../layout/Stack";

export default function HeroSection() {
  return (
    <Section>
      <Container>
        <Stack gap="sm" align="items-center" textAlign="text-center">
          <Badge size="md" type="normal">Full-Stack Web Developer</Badge>

          <Stack gap="xs" align="items-center" textAlign="text-center">
             <h1
              className="
                w-full
                font-sans font-semibold tracking-tighter text-balance
                text-5xl leading-tighter
                sm:text-6xl sm:leading-[1.05]
                md:text-7xl md:leading-[1.05]
                lg:text-8xl lg:leading-none
                xl:text-9xl xl:leading-none">
                  Gorem ipsum dolor sit amet, consectetur
            </h1>

            <Stack gap="xl" align="items-center" textAlign="text-center">
                <p className="
                  max-w-9/10
                  text-base sm:text-md md:text-xl
                  text-[var(--text-secondary)]
                  text-pretty">
                    Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    vulputate libero et velit interdum.
                </p>

                <Stack gap="xs" direction="flex-col" align="items-center" 
                  className="sm:flex-row sm:gap-2 justify-center">
                    <Button color="black" size="md">
                      Vedi i progetti
                    </Button>

                    <Button color="white" size="md">
                      Contattami
                    </Button>
                </Stack>
              </Stack>
            
          </Stack>
        </Stack>
      </Container>

      <div
        className="relative mt-20 sm:mt-24 lg:mt-35 w-full bg-cover bg-center bg-amber-400 pb-2"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <Container className="px-8 sm:px-6">
          <HeroBanner></HeroBanner>
        </Container>
      </div>
    </Section>
  );
}
