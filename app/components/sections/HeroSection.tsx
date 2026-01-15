import Badge from "../ui/Badge";
import Button from "../ui/Buttons";
import HeroBanner from "../ui/HeroBanner";
import MainContainer from "./MainContainer";

export default function HeroSection() {
  return (
    <section className="relative">
      <MainContainer className="flex flex-col items-center justify-center gap-3 text-center px-4 sm:px-6">
        <Badge size="md">Full-Stack Web Developer</Badge>

        {/* TODO: Testo troppo piccolo? */}
        <h1
            className="
    mt-2 w-full
    font-sans font-semibold tracking-tighter text-balance
    text-5xl leading-tight
    sm:text-6xl sm:leading-[1.05]
    md:text-7xl md:leading-[1.05]
    lg:text-8xl lg:leading-none
    xl:text-9xl xl:leading-none
  "
        >
          Gorem ipsum dolor sit amet, consectetur
        </h1>

        <p
          className="
            mt-2 max-w-3/4 md:max-w-1/2
            text-base sm:text-md md:text-xl
            text-[var(--text-secondary)]
            text-pretty
          "
        >
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum.
        </p>

        <div
          className="
            mt-6 md:mt-10
            flex w-full max-w-md flex-col gap-3
            sm:max-w-none sm:w-auto sm:flex-row sm:gap-2
          "
        >
          <div className="w-full sm:w-auto">
            <Button color="black" size="md">
              Vedi i progetti
            </Button>
          </div>

          <div className="w-full sm:w-auto">
            <Button color="white" size="md">
              Contattami
            </Button>
          </div>
        </div>
      </MainContainer>

      <div
        className="relative mt-20 sm:mt-24 lg:mt-50 w-full bg-cover bg-center bg-amber-400 pb-2"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <MainContainer className="px-4 sm:px-6">
          <HeroBanner></HeroBanner>
        </MainContainer>
      </div>
    </section>
  );
}
