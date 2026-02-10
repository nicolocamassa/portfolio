import { Sparkles, Layers, SquareTerminal } from "lucide-react";
import { Stack, Section, Container } from "@/_components/layout";
import { Badge } from "../ui";


export function AboutSection() {
  return (
    <Section>
      <Container className="px-4 sm:px-6">
        <Stack gap="md" className="items-start">
          <Badge size="md">About</Badge>

          {/* layout principale: mobile colonna, md grid */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-12 lg:gap-16">
            {/* left */}
            <div className="md:col-span-7 md:row-start-1 reveal">
              <h2 className="font-sans font-semibold tracking-tight text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Il processo con cui lavoro.
              </h2>
            </div>

            {/* right */}
            <div className="md:col-span-5 md:row-span-2 md:row-start-1 reveal">
              <Stack gap="lg">
                <p className="text-base sm:text-lg text-(--text-secondary)">
                  Lavoro unendo UX, UI e sviluppo, così da garantire coerenza tra idea, design e prodotto
                  finale. Il risultato è un sito solido, usabile e pronto a crescere nel tempo.
                </p>

                <Stack gap="xs">
                  <h3 className="font-sans font-bold tracking-tight leading-tight text-xl sm:text-2xl">
                    Un buon risultato nasce sempre da un buon processo.
                  </h3>

                  <p className="text-sm sm:text-base text-(--text-secondary) leading-relaxed max-w-prose">
                    Ogni progetto che realizzo parte dall’ascolto e si sviluppa attraverso fasi precise.
                    Non mi limito a “disegnare belle interfacce”, ma progetto esperienze digitali pensate
                    per funzionare davvero: chiare, accessibili e orientate agli obiettivi dell’utente e
                    del business.
                  </p>
                </Stack>
              </Stack>
            </div>

            {/* list */}
            <ul className="flex flex-col gap-2 md:col-span-7 md:row-start-2 reveal">
              <ul className="flex flex-col gap-2 md:col-span-7 md:row-start-2">
                <li>
<<<<<<< Updated upstream:_components/sections/AboutSection.tsx
<<<<<<< Updated upstream:_components/sections/AboutSection.tsx
<<<<<<< Updated upstream:_components/sections/AboutSection.tsx
                  <Badge rounded="lg" type="svg">
=======
                  <Badge type="svg">
>>>>>>> Stashed changes:app/components/sections/AboutSection.tsx
=======
                  <Badge type="svg">
>>>>>>> Stashed changes:app/components/sections/AboutSection.tsx
=======
                  <Badge type="svg">
>>>>>>> Stashed changes:app/components/sections/AboutSection.tsx
                    <Sparkles className="h-5 w-5" />
                    Esperienze pensate per l’utente
                  </Badge>
                </li>
                <li>
<<<<<<< Updated upstream:_components/sections/AboutSection.tsx
<<<<<<< Updated upstream:_components/sections/AboutSection.tsx
<<<<<<< Updated upstream:_components/sections/AboutSection.tsx
                  <Badge rounded="lg" type="svg">
=======
                  <Badge type="svg">
>>>>>>> Stashed changes:app/components/sections/AboutSection.tsx
=======
                  <Badge type="svg">
>>>>>>> Stashed changes:app/components/sections/AboutSection.tsx
=======
                  <Badge type="svg">
>>>>>>> Stashed changes:app/components/sections/AboutSection.tsx
                    <Layers className="h-5 w-5" />
                    Interfacce chiare e coerenti
                  </Badge>
                </li>
                <li>
<<<<<<< Updated upstream:_components/sections/AboutSection.tsx
<<<<<<< Updated upstream:_components/sections/AboutSection.tsx
<<<<<<< Updated upstream:_components/sections/AboutSection.tsx
                  <Badge rounded="lg" type="svg">
=======
                  <Badge type="svg">
>>>>>>> Stashed changes:app/components/sections/AboutSection.tsx
=======
                  <Badge type="svg">
>>>>>>> Stashed changes:app/components/sections/AboutSection.tsx
=======
                  <Badge type="svg">
>>>>>>> Stashed changes:app/components/sections/AboutSection.tsx
                    <SquareTerminal className="h-5 w-5" />
                    Codice solido e performante
                  </Badge>
                </li>
              </ul>
            </ul>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
