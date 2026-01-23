import type { HeroContent } from "../components/sections/HeroSection";

export type ContentBlock = 
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "paragraph"; text: string }
  | { type: "badge"; text: string }
  | { type: "heading"; level: 1 | 2; text: string; id?: string }
  | { type: "list"; items: string[] }

type Section = {
  badge?: string;
  id: string;
  blocks: ContentBlock[];
};

export type BlogPage = {
  slug: string;
  hero: HeroContent;
  sections?: Section[];
};

export const blogPages: BlogPage[] = [
  {
    slug: "demo-app",
    hero: {
      badge: { children: "Case Study" },
      title: "Aurora Habits: un’app fittizia per costruire abitudini senza stress",
      description:
        "Case study completo: dall’idea alla UI finale. Obiettivo: aiutare le persone a costruire abitudini con micro-obiettivi, feedback chiari e un’esperienza mobile-first semplice ma curata.",
      ctas: [
        { label: "GitHub", href: "https://github.com/example/aurora-habits" },
        { label: "Live Demo", href: "https://example.com/aurora-habits" },
      ],
    },
    sections: [
      {
        badge: "Contesto",
        id: "contesto",
        blocks: [
          { type: "heading", level: 1, text: "Il problema", id: "il-problema" },
          {
            type: "paragraph",
            text:
              "Le app di habit tracking spesso falliscono per due motivi: richiedono troppa disciplina fin dal primo giorno e mostrano troppi numeri prima che l’utente abbia capito cosa fare. Aurora Habits nasce come esercizio di prodotto: progettare un’esperienza che renda semplice iniziare e gratificante continuare.\n\n"
              + "L’idea guida è ridurre la frizione iniziale: pochi step, scelte guidate, e un primo risultato visibile in meno di un minuto. Poi, man mano che l’utente prende confidenza, l’app sblocca funzionalità più avanzate (statistiche, insight, routine).",
          },
          {
            type: "image",
            src: "/images/case-studies/aurora/overview.png",
            alt: "Overview della home di Aurora Habits",
            caption: "Home: focus su oggi. Una sola azione principale e progress chiaro.",
          },
          { type: "heading", level: 2, text: "Obiettivi di progetto", id: "obiettivi" },
          {
            type: "list",
            items: [
              "Onboarding completabile in < 60 secondi",
              "Creazione abitudine guidata (nome, frequenza, reminder) senza form lunghi",
              "Feedback immediato dopo ogni check-in (micro-animazione + messaggio)",
              "Progress chiaro: “oggi / questa settimana” prima delle statistiche avanzate",
            ],
          },
        ],
      },

      {
        badge: "Ricerca",
        id: "ricerca",
        blocks: [
          { type: "heading", level: 1, text: "Ricerca e insight", id: "ricerca-insight" },
          {
            type: "paragraph",
            text:
              "Per un progetto fittizio ho simulato una ricerca leggera: analisi comparativa di app note (habit tracker e task manager) e una lista di “pain point” ricorrenti.\n\n"
              + "Tre pattern emergono quasi sempre:\n"
              + "1) Troppe scelte all’inizio (template, categorie, obiettivi, metriche).\n"
              + "2) Progress poco interpretabile (grafici complessi senza contesto).\n"
              + "3) Reminder invadenti o poco personalizzabili.\n\n"
              + "Da qui la decisione: Aurora Habits deve guidare l’utente con scelte minime e lasciare personalizzazione in un secondo momento.",
          },
          {
            type: "image",
            src: "/images/case-studies/aurora/competitive.png",
            alt: "Analisi comparativa di app simili",
            caption: "Benchmark: ho estratto pattern UI e punti deboli ricorrenti.",
          },
          { type: "heading", level: 2, text: "Personas (semplificate)", id: "personas" },
          {
            type: "list",
            items: [
              "Giulia, 24: vuole iniziare a leggere 10 minuti al giorno, ma perde motivazione se l’app è troppo “seria”.",
              "Marco, 32: vuole una routine palestra semplice, odia i grafici complicati e vuole solo sapere se sta andando bene.",
              "Sara, 28: ama personalizzare, ma solo dopo aver capito il flusso base.",
            ],
          },
        ],
      },

      {
        badge: "UX",
        id: "ux",
        blocks: [
          { type: "heading", level: 1, text: "User flow e struttura dell’app", id: "user-flow" },
          {
            type: "paragraph",
            text:
              "Ho progettato il flusso principale attorno a una domanda: “cosa deve fare l’utente oggi?”. La home mostra un elenco ridotto di abitudini con un’azione chiara: check-in.\n\n"
              + "L’onboarding crea 1–2 abitudini con un wizard (3 step). Non chiede nulla di avanzato. Le statistiche vengono introdotte dopo 7 giorni, quando hanno un minimo di senso.",
          },
          {
            type: "image",
            src: "/images/case-studies/aurora/flow.png",
            alt: "Diagramma user flow di Aurora Habits",
            caption: "Flow principale: onboarding → home → check-in → feedback → progress settimanale.",
          },
          { type: "heading", level: 2, text: "Scelte UX chiave", id: "scelte-ux" },
          {
            type: "list",
            items: [
              "Una CTA primaria per schermata (riduce indecisione)",
              "Check-in in un tap + undo breve (evita errori frustranti)",
              "Reminder configurabili con tono (gentile vs diretto) e fascia oraria",
              "Progress ‘leggibile’: streak + obiettivo settimanale, niente grafici subito",
            ],
          },
        ],
      },

      {
        badge: "UI",
        id: "ui",
        blocks: [
          { type: "heading", level: 1, text: "Design & componenti", id: "design-componenti" },
          {
            type: "paragraph",
            text:
              "Per la UI ho scelto uno stile soft e luminoso, con gerarchie tipografiche nette e componenti ripetibili. L’idea è far sentire l’app “leggera”: spazi generosi, card con ombra delicata, e micro-feedback.\n\n"
              + "Ho definito un set piccolo di componenti: Button, Card, Badge, ProgressRing, HabitRow e Modal. Tutto il resto è composizione di questi blocchi.",
          },
          {
            type: "image",
            src: "/images/case-studies/aurora/ui-kit.png",
            alt: "UI kit di Aurora Habits",
            caption: "UI Kit essenziale: pochi componenti, molte combinazioni possibili.",
          },
          { type: "heading", level: 2, text: "Stati e accessibilità", id: "stati-accessibilita" },
          {
            type: "paragraph",
            text:
              "Ogni elemento interattivo ha stati hover/focus/disabled coerenti. Il focus è sempre visibile (ring) e i contrasti sono pensati per non dipendere solo dal colore.\n\n"
              + "Le animazioni sono brevi (200–300ms) e non bloccanti: il feedback deve dare soddisfazione senza rallentare l’azione principale.",
          },
        ],
      },

      {
        badge: "Implementazione",
        id: "implementazione",
        blocks: [
          { type: "heading", level: 1, text: "Struttura tecnica (demo)", id: "struttura-tecnica" },
          {
            type: "paragraph",
            text:
              "Essendo un progetto demo, l’obiettivo non è la complessità backend ma una struttura front-end pulita. L’app è pensata per Next.js + TypeScript, con persistenza iniziale via localStorage e possibilità di evolvere su API/DB.\n\n"
              + "La cosa più importante è mantenere una separazione chiara:\n"
              + "• data model (habits, check-ins)\n"
              + "• UI (componenti presentazionali)\n"
              + "• logica (hooks/servizi)\n\n"
              + "Così aggiungere nuove feature (es. categorie o routine) non rompe il resto.",
          },
          {
            type: "image",
            src: "/images/case-studies/aurora/architecture.png",
            alt: "Schema architettura front-end",
            caption: "Architettura demo: servizi + hooks + UI riutilizzabile.",
          },
          { type: "heading", level: 2, text: "Feature implementate (MVP)", id: "mvp" },
          {
            type: "list",
            items: [
              "Creazione abitudine con wizard",
              "Check-in giornaliero con undo",
              "Streak e obiettivo settimanale",
              "Reminder base e preferenze",
              "Vista dettagli con storico",
            ],
          },
        ],
      },

      {
        badge: "Risultati",
        id: "risultati",
        blocks: [
          { type: "heading", level: 1, text: "Risultato finale e prossimi step", id: "risultato-finale" },
          {
            type: "paragraph",
            text:
              "Aurora Habits, come case study, dimostra che puoi ottenere una UX piacevole con poche scelte ben fatte. Il cuore è un flusso lineare: creare → fare check-in → vedere progress → continuare.\n\n"
              + "I prossimi step più interessanti sarebbero:\n"
              + "• insight “gentili” (es. giorni migliori)\n"
              + "• template di routine (mattina/sera)\n"
              + "• sync cloud e multi-device\n"
              + "• modalità ‘low pressure’ (saltare un giorno senza perdere tutto).",
          },
          {
            type: "image",
            src: "/images/case-studies/aurora/final.png",
            alt: "Schermate finali di Aurora Habits",
            caption: "Output finale: un’esperienza mobile-first pulita, guidata e coerente.",
          },
        ],
      },
    ],
  },
];
