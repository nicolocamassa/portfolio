import Badge from "../ui/Badge";
import Button from "../ui/Buttons";
import MainContainer from "./MainContainer";

export default function HeroSection() {
  return (
    <section className="relative">
      <MainContainer className="flex flex-col items-center justify-center gap-3 text-center px-4 sm:px-6">
        <Badge size="sm">Full-Stack Web Developer</Badge>

        {/* TODO: Testo troppo piccolo? */}
        <h1
          className="
            mt-2 max-w-4xl lg:max-w-7xl
            font-sans font-semibold tracking-tighter 
            text-4xl leading-tighter text-balance
            sm:text-5xl sm:leading-tight
            md:text-6xl md:leading-[1.05]
            lg:text-7xl lg:leading-[1.05]
            xl:text-8xl xl:leading-none
          "
        >
          Gorem ipsum dolor sit amet, consectetur
        </h1>

        <p
          className="
            mt-2 max-w-3/4 md:max-w-1/2
            text-base sm:text-md md:text-xl
            text-[var(--text-secondary)]
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
        className="relative mt-20 sm:mt-24 lg:mt-[150px] w-full bg-cover bg-center bg-amber-400 pb-2"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <MainContainer className="px-4 sm:px-6">
          <div className="-translate-y-6 sm:-translate-y-8 rounded-2xl bg-white p-4 sm:p-6 shadow-lg">
            <p>Main Card</p>
          </div>
        </MainContainer>
      </div>
    </section>
  );
}
