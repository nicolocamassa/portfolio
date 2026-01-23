import type { HeroContent } from "../components/sections/HeroSection";

type Section = {
  badge?: string;
  id: string;
  title: string;
  description?: string;
  image?: { src: string; alt?: string };
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
      badge: { children: "Blog" },
      title: "Demo App",
      description:
        "Una guida pratica per impostare componenti, regole e token senza finire in un progetto infinito. Dalle decisioni fondamentali ai dettagli che fanno davvero la differenza in produzione.",
      ctas: [
        { label: "Repository", href: "https://github.com/example/design-system-minimale" },
        { label: "Template", href: "https://example.com/template" },
      ],
    },
    sections: [
      {
        badge: "Introduzione",
        id: "introduzione",
        title: "Perché “minimale” non significa “scarno”",
        description:
          "Quando si parla di design system, spesso si pensa subito a un pacchetto enorme: decine di componenti, documentazione infinita, regole rigidissime. Il risultato? Un progetto che parte con entusiasmo e poi si blocca perché mantenere tutto diventa più costoso che costruire feature.\n\n"
          + "Un design system minimale non è un design system “povero”. È un sistema che sceglie con cura cosa standardizzare e cosa lasciare flessibile. Standardizzi ciò che si ripete e genera incoerenza (spaziature, tipografia, bottoni, input, card, stati di focus), e lasci libertà dove serve (layout specifici, micro-varianti, composizioni).\n\n"
          + "L’obiettivo non è avere una libreria perfetta: è rendere più veloce il lavoro quotidiano, ridurre bug UI e mantenere un’identità visiva coerente. Se ogni nuova pagina richiede decisioni da zero — “che font size uso?”, “quanto padding?”, “che colore per l’errore?” — stai pagando un costo invisibile in ogni sprint.\n\n"
          + "In questo articolo ti porto in un percorso concreto: partire da token semplici, definire 6–10 componenti core, impostare stati accessibili, e creare un modo sostenibile per aggiungere varianti senza creare caos.",
        image: {
          src: "/images/blog/design-system/cover.png",
          alt: "Copertina articolo: design system minimale",
        },
      },
      {
        badge: "Fondamenta",
        id: "fondamenta",
        title: "Token: la parte noiosa che ti salva la vita",
        description:
          "I token sono il punto di contatto tra design e codice. Sono variabili (o costanti) che rappresentano decisioni: colori, spazi, raggi, ombre, font-size. La tentazione iniziale è “poi ci penso”. Ma è proprio lì che nasce l’incoerenza.\n\n"
          + "Parti con pochi token, davvero pochi. Esempio: una scala di spacing (2, 4, 8, 12, 16, 24, 32, 48), una scala tipografica (sm, base, lg, xl, 2xl), e una palette con ruoli (background, surface, text, muted, primary, danger). Evita di iniziare con 40 colori: spesso ti bastano 8–12 ruoli.\n\n"
          + "La regola d’oro: token per ruolo, non per colore. Non vuoi scrivere “text-gray-700” ovunque. Vuoi “text-foreground”. Così, quando cambi tema o aggiorni brand, tocchi una volta sola. Lo stesso per border e shadow: “border-subtle”, “shadow-md”, “radius-lg”.\n\n"
          + "Se usi Tailwind, puoi mappare i token via CSS variables e sfruttare le classi in modo coerente. Anche senza implementazione sofisticata, ti basta decidere un set ristretto e rispettarlo: la coerenza nasce dalla disciplina.",
      },
      {
        badge: "Componenti core",
        id: "componenti-core",
        title: "I 10 componenti che coprono l’80% del lavoro",
        description:
          "Se devi scegliere da dove iniziare, non partire da componenti rari. Parti da quelli che userai ovunque. Un set “minimale ma potente” spesso include:\n\n"
          + "• Button (con 2–3 varianti) e IconButton\n"
          + "• Input, Textarea, Select (anche basic) + stati error\n"
          + "• Card (layout base) + CardHeader/CardContent\n"
          + "• Badge/Tag (per label e status)\n"
          + "• Modal/Sheet (una sola, ben fatta)\n"
          + "• Tabs (semplici)\n"
          + "• Toast/Alert\n"
          + "• Table (minima) o ListRow (se l’app è list-centric)\n\n"
          + "Il trucco è definire un’API coerente. Ad esempio, per Button: `variant`, `size`, `disabled`, `loading`. Non creare 12 varianti: creane poche e componi il resto.\n\n"
          + "Una pratica utile: ogni componente deve avere una “base” neutra e una manciata di varianti. Se ti accorgi che la variante “marketing-glow-super” esiste solo in una pagina, probabilmente non è una variante: è una customizzazione locale.\n\n"
          + "Infine: cura i micro-dettagli. Stati hover e focus, spacing del testo, allineamento delle icone. Sono quelle cose che non noti quando sono fatte bene, ma che rendono tutto più ‘professionale’ quando sono consistenti.",
      },
      {
        badge: "Accessibilità",
        id: "accessibilita",
        title: "Focus, aria e contrasti: non sono “extra”",
        description:
          "L’accessibilità non è un check finale, è una proprietà del sistema. Se i tuoi componenti base sono accessibili, tutto il prodotto migliora senza sforzo.\n\n"
          + "Inizia dallo stato di focus: deve essere sempre visibile e coerente. Non affidarti solo a un cambio colore leggero. Usa un outline o ring netto. Poi cura i contrasti: testo su surface, testo su primary, placeholder, e soprattutto error state.\n\n"
          + "Per componenti come Modal, Dropdown, Tabs: attenzione a focus trapping, gestione ESC, aria-label, aria-expanded e ruoli corretti. Se stai usando librerie come Radix (o shadcn/ui), sfruttale: sono pensate proprio per evitare problemi tipici.\n\n"
          + "Una regola pratica: se la UI si usa bene da tastiera, spesso è già a buon punto. Prova: Tab, Shift+Tab, Enter, Esc. Se ti incastri, anche l’utente si incastrerà.\n\n"
          + "Il vantaggio di fare questo nel design system è che risolvi una volta sola. Non vuoi inseguire bug di focus in 20 pagine diverse.",
      },
      {
        badge: "Scalabilità",
        id: "scalabilita",
        title: "Come evitare l’esplosione delle varianti",
        description:
          "Il problema numero uno dei design system che crescono è l’esplosione delle varianti: Button con 9 colori, 7 size, 4 shape, 5 shadow. Diventa ingestibile.\n\n"
          + "Il modo più semplice per evitarlo è separare: (1) varianti “di ruolo” (primary, secondary, ghost) e (2) combinazioni “di contesto” (es. su sfondo scuro) che devono vivere a livello di layout, non dentro il componente.\n\n"
          + "In pratica: se vuoi un Button “inverted”, chiediti se è una variante globale o solo un caso in una hero. Spesso basta cambiare il container (background + text tokens) e il Button si adatta.\n\n"
          + "Quando una nuova richiesta arriva, fai una domanda: ‘questa scelta si ripeterà almeno 3 volte?’ Se no, probabilmente è un caso locale.\n\n"
          + "E documenta le decisioni: non serve un sito enorme. Bastano esempi e note nel repo: “questo è primary, questo è secondary, ecco quando usare ghost”.",
      },
      {
        badge: "Conclusione",
        id: "conclusione",
        title: "Un sistema leggero, ma con regole chiare",
        description:
          "Un buon design system minimale ha una qualità speciale: non lo senti. Le scelte sono già lì, quindi tu puoi concentrarti sul prodotto.\n\n"
          + "Se dovessi riassumere in 5 punti:\n"
          + "1) Definisci token per ruolo e una scala di spacing/typo.\n"
          + "2) Costruisci pochi componenti core, super curati.\n"
          + "3) Accessibilità come default: focus, keyboard, aria.\n"
          + "4) Poche varianti globali, il resto è composizione.\n"
          + "5) Aggiungi solo ciò che si ripete davvero.\n\n"
          + "Il risultato è (quasi sempre) meno codice, meno decision fatigue e una UI più coerente. E soprattutto: una base che cresce con te invece di rallentarti.",
      },
    ],
  },
];
