import Badge from "./Badge";
import Button from "./Buttons";

export default function ProjectCard() {
  return (
    <div
      className="
        project-container
        mt-10 sm:mt-14 lg:mt-20
        relative overflow-hidden
        rounded-xl border border-[var(--border-default)]
        xl:py-20 xl:px-40
        lg:py-20 lg:px-30
        md:py-20 md:px-20
        py-15 px-10
        flex flex-col md:flex-row md:items-stretch
        gap-8
      "
    >
      {/* Left */}
      <div className="left w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center text-center md:items-start md:text-left">
        <Badge size="sm">Ultimo aggiornamento: 19.08.2026</Badge>

        <h3 className="mt-2 font-semibold tracking-tight text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          Disponibile a breve.
        </h3>

        <article className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] max-w-prose">
          Unisciti al party musicale: crea sessioni, vota in tempo reale e scopri nuovi gusti
          musicali con la tua crew.
        </article>

        <Button color="cta" size="sm" className="mt-10 md:mt-15">
          Scopri gli aggiornamenti
        </Button>
      </div>

      {/* Mobile only image */}
      <div className="right w-full md:hidden">
        <div className="mx-auto mt-8 -mb-15 max-w-sm sm:max-w-md">
          <img
            src="/images/Project.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Tablet + Desktop image */}
      <div className="right hidden md:block absolute right-6 lg:right-10 bottom-0 h-[85%] w-[48%] lg:w-[45%] pointer-events-none">
        <img
          src="/images/Project.png"
          alt=""
          className="h-full w-full object-contain object-bottom"
        />
      </div>
    </div>
  );
}
