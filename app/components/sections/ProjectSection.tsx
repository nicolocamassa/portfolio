import Badge from "../ui/Badge";
import Button from "../ui/Buttons";
import MainContainer from "./MainContainer";

export default function ProjectSection() {
  return (
    <section className="relative overflow-hidden">
      <MainContainer className="px-4 sm:px-6">

        {/* Heading */}
        <div className="text-container">
          <Badge size="md">Progetti</Badge>
          <h2 className="mt-3 font-sans font-semibold tracking-tight text-balance
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                         max-w-3xl">
            Cerco di dare un valore reale ai miei progetti.
          </h2>
        </div>

        {/* Card */}
        <div
          className="
            project-container mt-10 sm:mt-14 lg:mt-20
            relative overflow-hidden
            rounded-xl border border-[var(--border-default)]
            p-6 sm:p-10 xl:p-30 xl:px-50
            lg:p-20 lg:px-30
            flex flex-col lg:flex-row lg:items-stretch
            gap-8
          "
        >
          {/* Left */}
          <div className="left w-full md:w-1/3">
            <Badge size="sm">Ultimo aggiornamento: 19.08.2026</Badge>

            <h3 className="font-semibold tracking-tight
                           text-3xl sm:text-4xl md:text-6xl">
              Disponibile a breve.
            </h3>

            <article className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] max-w-prose">
              Unisciti al party musicale: crea sessioni, vota in tempo reale e scopri nuovi gusti
              musicali con la tua crew.
            </article>

            <Button color="cta" size="sm" className="mt-15">
              Scopri gli aggiornamenti
            </Button>
          </div>

          {/* Right (image) */}
          {/* Mobile: immagine sotto e centrata */}
          <div className="right w-full lg:hidden">
            <div className="mx-auto max-w-sm sm:max-w-md">
              <img
                src="/images/Project.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="right hidden lg:block absolute right-10 bottom-0 h-[85%] w-[45%] pointer-events-none">
            <img
              src="/images/Project.png"
              alt=""
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
