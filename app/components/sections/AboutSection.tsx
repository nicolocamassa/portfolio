import Badge from "../ui/Badge";
import MainContainer from "./MainContainer";
import { Sparkles, Layers, SquareTerminal } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      <MainContainer className="px-4 sm:px-6">
        <Badge size="md">About</Badge>

        {/* Mobile: flex-col | md+: grid 12 cols */}
        <div className="mt-6 flex flex-col gap-8 md:mt-10 md:grid md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Title (left, top) */}
          <div className="md:col-span-7 md:row-start-1">
            <h2 className="font-sans font-semibold tracking-tight text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Il processo con cui lavoro.
            </h2>
          </div>

          {/* Right text (right column) */}
          <div className="md:col-span-5 md:row-span-2 md:row-start-1">
            <p className="text-base sm:text-lg text-[var(--text-secondary)]">
              Lavoro unendo UX, UI e sviluppo, così da garantire coerenza tra idea, design e prodotto
              finale. Il risultato è un sito solido, usabile e pronto a crescere nel tempo.
            </p>

            <h3 className="mt-10 md:mt-20 mb-2 font-sans font-bold tracking-tight leading-tight text-xl sm:text-2xl">
              Un buon risultato nasce sempre da un buon processo.
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-prose">
              Ogni progetto che realizzo parte dall’ascolto e si sviluppa attraverso fasi precise.
              Non mi limito a “disegnare belle interfacce”, ma progetto esperienze digitali pensate
              per funzionare davvero: chiare, accessibili e orientate agli obiettivi dell’utente e
              del business.
            </p>
          </div>

          {/* Badges list:
              Mobile: after texts (order-3 via DOM position)
              md+: under title (row 2, left column) */}
          <ul className="flex flex-col gap-2 md:col-span-7 md:row-start-2">
            <li>
              <Badge type="list">
                <Sparkles className="h-5 w-5" />
                Esperienze pensate per l’utente
              </Badge>
            </li>
            <li>
              <Badge type="list">
                <Layers className="h-5 w-5" />
                Interfacce chiare e coerenti
              </Badge>
            </li>
            <li>
              <Badge type="list">
                <SquareTerminal className="h-5 w-5" />
                Codice solido e performante
              </Badge>
            </li>
          </ul>
        </div>
      </MainContainer>
    </section>
  );
}
