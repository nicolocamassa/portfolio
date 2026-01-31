import { ArrowUpRight } from "lucide-react";
import { Badge, Button } from "@/_components/ui";
import { Stack } from "@/_components/layout";

const projects = [
  { slug: "demo-app", title: "Demo App" },
  { slug: "reading-app", title: "Demo App" },
];


export default function ProjectCard() {
  return (
    /* Gap nome app */
    <Stack gap="xs">
      <div
        className="relative overflow-hidden 
          rounded-xl border border-(--border-default)
          xl:py-20 xl:px-40
          lg:py-20 lg:px-30
          md:py-20 md:px-20
          py-15 px-10
          md:flex-row md:items-stretch 
          shadow-[0_0px_24px_-12px_rgba(0,0,0,0.25)]">

        {/* Left Container + gap badge */}
        <Stack gap="sm" className="max-w-full md:max-w-1/2 items-center md:items-start">
          <Badge size="sm">Ultimo aggiornamento: 19.08.2026</Badge>

          {/* Gap dei testi */}
          <Stack gap="xs" className="items-center text-center md:items-start md:text-start">
            <h3 className="font-semibold tracking-tight text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
              Disponibile a breve.
            </h3>

            {/* Gap paragrafo e CTA */}
            <Stack gap="xl" className="items-center md:items-start">
              <article className="text-sm sm:text-base text-(--text-secondary) max-w-prose">
                Unisciti al party musicale: crea sessioni, vota in tempo reale e scopri nuovi gusti
                musicali con la tua crew.
              </article>

              {projects.map((p) => (
                  <Button key={p.slug} href={`/projects/${encodeURIComponent(p.slug)}`} color="cta" size="sm">
                    Scopri gli aggiornamenti
                  </Button>
              ))}

            </Stack>
          </Stack>
        </Stack>

        {/* Mobile only image */}
        <Stack className="right w-full md:hidden">
          <div className="-mb-15 mt-10">
            <img
              src="/images/Project.png"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </Stack>

        {/* Tablet + Desktop image */}
        <div className="right hidden md:block absolute right-6 lg:right-10 bottom-0 h-[85%] w-[48%] lg:w-[45%] pointer-events-none">
          <img
            src="/images/Project.png"
            alt=""
            className="h-full w-full object-contain object-bottom"
          />
        </div>
      </div>

      {/* Titolo App */}
      <div className="flex mt-2 items-center gap-1">
        <span className="text-2xl font-semibold">Demo App</span><ArrowUpRight />
      </div>  
    </Stack>
  );
}
