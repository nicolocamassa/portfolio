import type { HeroContent } from "../components/sections/HeroSection";

export type ContentBlock = 
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "paragraph"; text: string }
  /* TODO: SE IL TESTO DEI BADGE È TROPPO LUNGO DISALLINEA LA SEZIONE */
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
    slug: "demo-app2",
    hero: {
      badge: { children: "Case Study" },
      title: "Testing app title",
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
            src: "/images/testa.png",
            alt: "Overview della home di Aurora Habits",
            caption: "Home: focus su oggi. Una sola azione principale e progress chiaro.",
          },
          { type: "heading", level: 2, text: "Obiettivi di progetto", id: "obiettivi" },
          { type: "paragraph", text: "lorem test lorem test lorem test lorem test lorem test lorem test lorem test lorem test lorem test lorem test" }, 
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







  {
    slug: "demo-app",
    hero: {
      badge: { children: "Case Study" },
      title: "Pulse Budget",
      description:
        "Un’app fittizia che aiuta a gestire spese e obiettivi con regole semplici: pochi numeri, feedback chiari e un flusso quotidiano leggero. Dall’idea alla UI e alla struttura tecnica (demo).",
      ctas: [
        { label: "GitHub", href: "https://github.com/example/pulse-budget" },
        { label: "Live Demo", href: "https://example.com/pulse-budget" },
      ],
    },

    sections: [
      {
        badge: "Contesto",
        id: "contesto",
        blocks: [
          {
            type: "heading",
            level: 1,
            text: "Il problema",
            id: "il-problema",
          },
          {
            type: "paragraph",
            text:
              "Molte app di budgeting falliscono perché chiedono troppo subito: categorie, regole, grafici e importazioni bancarie prima ancora che l’utente capisca “cosa devo fare oggi?”.\n\n"
              + "Pulse Budget nasce come esercizio di prodotto: trasformare il budgeting in una routine micro, quotidiana e sostenibile. L’obiettivo non è “fare contabilità”, ma creare un ritmo: registrare una spesa in 5 secondi, vedere un feedback comprensibile, e sapere se oggi sei in linea.",
          },
          {
            type: "image",
            src: "https://cdn-proxy.slickplan.com/wp-content/uploads/2025/01/Covers-900x300.jpg",
            alt: "Cover placeholder per case study",
            caption: "Hero visual: estetica pulita e focus sul flusso (placeholder).",
          },
          {
            type: "heading",
            level: 2,
            text: "Obiettivi di progetto",
            id: "obiettivi",
          },
          {
            type: "paragraph",
            text:
              "Ho definito obiettivi misurabili per evitare feature creep e mantenere la UX minimal. Il principio: prima la chiarezza, poi la profondità.",
          },
          {
            type: "list",
            items: [
              "Prima spesa registrata in < 30 secondi dall’apertura (cold start incluso)",
              "Setup iniziale in 60–90 secondi (solo entrate + obiettivo mensile)",
              "Progress giornaliero leggibile: “Oggi: ok / attenzione” senza grafici",
              "Ridurre l’ansia: linguaggio non punitivo, niente rosso “aggressivo”",
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
              "Per il progetto fittizio ho simulato una ricerca leggera con due attività:\n"
              + "• analisi comparativa di app note (budgeting + expense tracker)\n"
              + "• revisione di recensioni/feedback tipici (pattern ricorrenti)\n\n"
              + "Tre frizioni si ripetono spesso:\n"
              + "1) Setup iniziale troppo lungo (categorie, conti, automazioni).\n"
              + "2) Grafici e dashboard prima della “routine”.\n"
              + "3) Linguaggio colpevolizzante (“hai sforato!”) invece di coaching.\n\n"
              + "Da qui la scelta: Pulse Budget parte dal gesto minimo (aggiungi spesa) e introduce strumenti più avanzati solo quando l’utente ha già un’abitudine.",
          },
          {
            type: "image",
            src: "https://cdn-proxy.slickplan.com/wp-content/uploads/2025/01/wireflow-example.jpg",
            alt: "Esempio di wireflow (benchmark/analisi)",
            caption: "Riferimento visivo: esempi di flussi e schermate per ragionare su frizioni e step.",
          },
          { type: "heading", level: 2, text: "Persona (semplificate)", id: "personas" },
          {
            type: "list",
            items: [
              "Elena, 27: vuole capire “se oggi posso permettermelo”, non vuole grafici complessi.",
              "Davide, 35: ha entrate stabili, vuole un sistema rapido per obiettivi e spese ricorrenti.",
              "Marta, 30: prova molte app ma molla se l’onboarding è lungo o se si sente giudicata.",
            ],
          },
        ],
      },

      {
        badge: "UX",
        id: "ux",
        blocks: [
          { type: "heading", level: 1, text: "User flow principale", id: "user-flow" },
          {
            type: "paragraph",
            text:
              "Il flusso è progettato intorno a un’unica domanda: “Cosa devo fare adesso?”.\n\n"
              + "La home mostra:\n"
              + "• un riepilogo giornaliero (stato: ok/attenzione)\n"
              + "• un’azione primaria: aggiungi spesa\n"
              + "• un micro-progress verso l’obiettivo (senza grafici complessi)\n\n"
              + "Il setup iniziale chiede solo due informazioni: entrata mensile e obiettivo (risparmio o limite). Le categorie sono suggerite ma opzionali: puoi aggiungerle dopo.",
          },
          {
            type: "image",
            src: "https://cdn-proxy.slickplan.com/wp-content/uploads/2025/01/travel-app-wireflow.jpg",
            alt: "Wireflow (placeholder) per visualizzare il flusso",
            caption: "Wireflow: esempio di mappa schermate/connessioni per ragionare su percorsi e scorciatoie.",
          },
          { type: "heading", level: 2, text: "Scelte UX chiave", id: "scelte-ux" },
          {
            type: "list",
            items: [
              "Una CTA primaria per schermata (riduce decision fatigue)",
              "Inserimento spesa in un tap (importo → categoria opzionale → salva)",
              "Undo breve dopo salvataggio (evita ansia da errore)",
              "Progress “umano”: oggi/questa settimana prima dei trend mensili",
            ],
          },
        ],
      },

      {
        badge: "UI",
        id: "ui",
        blocks: [
          { type: "heading", level: 1, text: "Design system leggero", id: "design-system" },
          {
            type: "paragraph",
            text:
              "La UI deve comunicare calma e controllo. Ho impostato:\n"
              + "• gerarchie tipografiche nette (titoli forti, testo secondario soft)\n"
              + "• spazi generosi e componenti ripetibili\n"
              + "• feedback micro (toast, badge, micro-animazioni) non invadenti\n\n"
              + "I componenti chiave: Button, Card, Badge, AmountInput, CategoryPill, ProgressRing e BottomSheet per l’inserimento rapido.",
          },
          {
            type: "image",
            src: "https://www.creativefabrica.com/wp-content/uploads/2022/11/03/Habit-Tracker-Mobile-App-UI-Kit-Graphics-44540823-1-1-312x208.jpg",
            alt: "UI kit (placeholder) con schermate mobile",
            caption: "Riferimento UI kit: utile per ragionare su pattern di card, progress e composizione mobile.",
          },
          { type: "heading", level: 2, text: "Stati e accessibilità", id: "accessibilita" },
          {
            type: "paragraph",
            text:
              "Gli stati interattivi sono coerenti (hover/focus/disabled). Il focus è sempre visibile e i messaggi usano un tono neutro: “sei oltre la soglia di oggi” invece di “hai fallito”.\n\n"
              + "La palette evita contrasti “punitivi”: lo stato attenzione è espresso con testo + icona + badge, non solo con colore. Le animazioni sono brevi (200–300ms) e non bloccanti.",
          },
        ],
      },

      {
        badge: "Test",
        id: "test",
        blocks: [
          { type: "heading", level: 1, text: "Struttura tecnica (demo)", id: "struttura-tecnica" },
          {
            type: "paragraph",
            text:
              "Essendo un progetto demo, l’obiettivo è una struttura front-end pulita e scalabile:\n\n"
              + "• data model: transactions, budgets, goals\n"
              + "• UI: componenti presentazionali (Card, Badge, Inputs)\n"
              + "• logica: hooks (useTransactions, useBudget), servizi (storage)\n\n"
              + "Persistenza iniziale via localStorage, con la possibilità di evolvere su API/DB senza riscrivere la UI.",
          },
          {
            type: "image",
            src: "https://www.clickittech.com/wp-content/uploads/2024/04/Web-Application-Architecture-Layers-986x1024.png",
            alt: "Diagramma architettura (placeholder)",
            caption: "Schema di architettura a livelli: utile come riferimento concettuale per separazione responsabilità.",
          },
          { type: "heading", level: 2, text: "Feature MVP", id: "mvp" },
          {
            type: "list",
            items: [
              "Aggiunta spesa rapida + undo",
              "Budget giornaliero/settimanale con stato (ok/attenzione)",
              "Obiettivi (risparmio o limite) con progress semplice",
              "Categorie opzionali + ricerca recente",
              "Esportazione dati (demo) e reset controllato",
            ],
          },
        ],
      },

      {
        badge: "Risultati",
        id: "risultati",
        blocks: [
          { type: "heading", level: 1, text: "Risultato finale e next step", id: "risultato-finale" },
          {
            type: "paragraph",
            text:
              "Pulse Budget dimostra l’idea chiave: prima costruisci la routine, poi aggiungi profondità. Un flusso semplice (aggiungi → feedback → progress) è spesso più efficace di una dashboard perfetta.\n\n"
              + "Prossimi step interessanti:\n"
              + "• insight gentili (giorni “costosi”, categorie ricorrenti)\n"
              + "• regole automatiche leggere (spese ricorrenti, arrotondamenti)\n"
              + "• sync cloud + multi-device\n"
              + "• modalità “low pressure” (settimane difficili senza colpa).",
          },
          {
            type: "image",
            src: "https://cdn-proxy.slickplan.com/wp-content/uploads/2025/01/low-fidelity-wireflow-example.jpg",
            alt: "Wireflow low-fidelity (placeholder) come output finale",
            caption: "Output finale (placeholder): rappresentazione semplice del journey e dei punti chiave della UX.",
          },
        ],
      },
    ],
  },
];
