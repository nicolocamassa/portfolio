import type { ContentBlock } from "@/types/blogPages";
import type { BlogPage } from "../../types/blogPages";
import type { InfoBanner } from "@/components/features/blog/ReadingInfoBanner";
import { calculateReadingTime } from "@/utils/readingTime";
import { HeroContent} from "@/components/sections/HeroSection";
import { Bug, Rocket, GitBranch, BugIcon, Github, RocketIcon, type LucideIcon } from "lucide-react";

type MetaChangelog = {
  numActivity: number,
  date: string
}

type UpdatesList = {
  label: string,
  text: string
}

type ChangelogItems = {
  id: number,
  icon: string,
  title: string,
  description: string,
  badges: string[],
  meta: MetaChangelog,
  updates: UpdatesList[],
}

type Changelog = {
  items: ChangelogItems[]
}

/* SEZIONE HERO */
/* TODO: Aggiungere immagine */
export const heroSectionBlog: HeroContent = {
  badge: { children: "JavaScript" },
  title: "Come funziona JavaScript",
  description: "Un viaggio approfondito nell'engine V8, nel Call Stack, nella gestione della memoria e nel misterioso Event Loop.",
  ctas: [
    { label: "Inizia a leggere", href: "#introduzione" },
    { label: "Documentazione MDN", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "white" }
  ]
}

/* INFO PAGINA DETTAGLIO */
export const readingInfo: InfoBanner = {
  time: "",
  tech: [ "nextjs2", "react", "tailwindcss"],
  date: "23.9.2092",
  status: "completed"
}

export const changelog: Changelog = {
  items: [
    {
      id: 1,
      title: "Launch prep automation",
      icon: "Rocket",
      badges: ["Automation", "Backend"],
      description: "Implementati script di deployment automatico per accelerare i lanci delle missioni senza errori manuali.",
      meta: { numActivity: 5, date: "22 Gen 2026" },
      updates: [
        { label: "UI", text: "Aggiornata dashboard con nuovi indicatori" },
        { label: "Backend", text: "Automazione deploy missioni" },
        { label: "Docs", text: "Documentazione aggiornata per DevOps" },
        { label: "Tests", text: "Aggiunti test end-to-end per i lanci" },
        { label: "CI/CD", text: "Pipeline ottimizzata per ridurre errori" }
      ]
    },
    {
      id: 2,
      title: "Feature branching strategy",
      icon: "Cloud",
      badges: ["DevOps"],
      description: "Introdotta strategia di branching avanzata per migliorare il workflow di sviluppo e ridurre conflitti.",
      meta: { numActivity: 3, date: "25 Gen 2026" },
      updates: [
        { label: "Git", text: "Definiti naming convention per i branch" },
        { label: "Docs", text: "Aggiornata guida per i developer" },
        { label: "CI/CD", text: "Pipeline aggiornata per supportare feature branch" }
      ]
    },
    {
      id: 3,
      title: "Critical bug fixes",
      icon: "Bug",
      badges: ["Bugfix"],
      description: "Risolti bug critici nel modulo di navigazione della navicella, prevenendo crash durante le simulazioni di lancio.",
      meta: { numActivity: 4, date: "23 Gen 2026" },
      updates: [
        { label: "Backend", text: "Fix crash in calcolo traiettoria" },
        { label: "UI", text: "Risolto bug indicatori missione" },
        { label: "Tests", text: "Aggiunti test per scenario edge case" },
        { label: "Monitoring", text: "Alert configurati per errori critici" }
      ]
    },
    {
      id: 4,
      title: "Rocket engine upgrade",
      icon: "Server",
      badges: ["Engineering", "Performance"],
      description: "Aggiornamento del motore per incrementare la spinta del 15% e ottimizzare il consumo di carburante.",
      meta: { numActivity: 2, date: "26 Gen 2026" },
      updates: [
        { label: "Engineering", text: "Revisionato design camera di combustione" },
        { label: "Performance", text: "Test di spinta completati con successo" }
      ]
    },
    {
      id: 5,
      title: "New telemetry system",
      icon: "Github",
      badges: ["Telemetry", "UI"],
      description: "Implementato un nuovo sistema di telemetria per monitorare in tempo reale lo stato dei razzi.",
      meta: { numActivity: 3, date: "28 Gen 2026" },
      updates: [
        { label: "Backend", text: "Nuovo endpoint API per dati telemetria" },
        { label: "UI", text: "Dashboard aggiornata con grafici in tempo reale" },
        { label: "Docs", text: "Manuale utente aggiornato per il nuovo sistema" }
      ]
    }
  ]
};

/* CONTENUTI PAGINA BLOG */
export const blogContent: BlogPage = {
  sections: [
    // SEZIONE 1: INTRODUZIONE
    {
      id: "introduzione",
      badge: "Le Basi",
      blocks: [
        { type: "heading", level: 1, text: "Cos'è veramente JavaScript?" },
        { type: "paragraph", text: "Spesso definito come un linguaggio 'interpretato', la realtà di JavaScript moderno è molto più complessa e affascinante. È un linguaggio ad alto livello, single-threaded, con una gestione automatica della memoria (Garbage Collection) e basato su un paradigma guidato dagli eventi." },
        {
          type: "callout",
          variant: "info",
          title: "Non solo nel browser",
          text: "Sebbene sia nato per rendere le pagine web interattive, grazie ad ambienti come Node.js, oggi JavaScript gira anche sui server, dispositivi IoT e persino nello spazio."
        },
        { type: "paragraph", text: "Ma cosa succede esattamente quando scrivi `console.log('Ciao Mondo')` e premi invio? Per capirlo, dobbiamo analizzare i componenti principali che permettono l'esecuzione del codice." },
      ] as ContentBlock[],
    },

    // SEZIONE 2: IL JS ENGINE
    {
      id: "js-engine",
      badge: "Engine",
      blocks: [
        { type: "heading", level: 2, text: "Il Motore: JS Engine e Compilazione JIT" },
        { type: "paragraph", text: "Il tuo computer non capisce JavaScript nativamente. Ha bisogno di un traduttore: il **JavaScript Engine**. Il più famoso è il V8 di Google (usato in Chrome e Node.js), ma ne esistono altri come SpiderMonkey (Firefox) e JavaScriptCore (Safari)." },
        {
          type: "image",
          src: "https://i.sstatic.net/4kybp.png",
          alt: "Logo V8 Engine",
          caption: "Il motore V8 è il cuore pulsante di Chrome e Node.js."
        },
        { type: "heading", level: 3, text: "Interpretazione vs Compilazione" },
        { type: "paragraph", text: "I motori moderni non si limitano a interpretare il codice riga per riga (che sarebbe lento). Utilizzano una tecnica chiamata **JIT (Just-In-Time) Compilation**." },
        {
          type: "list",
          listType: "bullet",
          items: [
            "Il motore parsa il codice e lo trasforma in un AST (Abstract Syntax Tree).",
            "Un interprete esegue l'AST e genera bytecode.",
            "Contemporaneamente, un 'profiler' monitora il codice. Se una funzione viene usata spesso ('hot code'), viene inviata a un compilatore ottimizzante.",
            "Il compilatore trasforma quel bytecode in codice macchina altamente ottimizzato per la CPU specifica."
          ]
        },
      ] as ContentBlock[],
    },

    // SEZIONE 3: RUNTIME ENVIRONMENT
    {
      id: "runtime",
      badge: "Memoria",
      blocks: [
        { type: "heading", level: 2, text: "Il Runtime: Call Stack e Memory Heap" },
        { type: "paragraph", text: "Quando il motore esegue il codice, ha bisogno di due aree principali nella memoria del sistema per gestire i dati e l'ordine di esecuzione." },
        
        { type: "heading", level: 3, text: "1. Memory Heap (Il mucchio)" },
        { type: "paragraph", text: "È una grande regione di memoria non strutturata dove vengono salvati oggetti, array e funzioni. Quando dichiari `const user = { name: 'Luca' }`, quell'oggetto viene allocato qui." },
        
        { type: "heading", level: 3, text: "2. Call Stack (La pila delle chiamate)" },
        { type: "paragraph", text: "JavaScript è **single-threaded**, il che significa che ha un solo Call Stack. Può fare solo una cosa alla volta. Il Call Stack è una struttura dati LIFO (Last In, First Out) che tiene traccia di dove ci troviamo nel programma." },
        
        { type: "code", language: "javascript", text: `function saluta() {
  console.log("Ciao!");
}

function inizio() {
  saluta(); // 2. 'saluta' viene aggiunto sopra 'inizio'
  console.log("Fine");
}

inizio(); // 1. 'inizio' viene aggiunto allo stack` },

        { type: "paragraph", text: "Quando una funzione ritorna un valore, viene rimossa (popped) dallo stack. Se il stack si riempie troppo (ad esempio con una ricorsione infinita), otteniamo un errore." },
        {
            type: "callout",
            variant: "danger",
            title: "Stack Overflow",
            text: "Questo errore si verifica quando il numero di chiamate di funzione attive supera la dimensione massima del Call Stack. È il nome del famoso sito per sviluppatori!"
        }
      ] as ContentBlock[],
    },

    // SEZIONE 4: EVENT LOOP
    {
      id: "event-loop",
      badge: "Async",
      blocks: [
        { type: "heading", level: 2, text: "Il paradosso: Come fa JS ad essere asincrono?" },
        { type: "paragraph", text: "Se JS è single-threaded e può fare solo una cosa alla volta, come gestisce le richieste di rete, i timer o i click dell'utente senza bloccare l'intera pagina? Qui entra in gioco la magia del **JavaScript Runtime Environment** (nel browser)." },
        
        {
          type: "image",
          // Un'immagine placeholder che rappresenta l'event loop. In produzione usa un diagramma reale.
          src: "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flqhhnr6n1w1l13g75ki0.png",
          alt: "Diagramma dell'Event Loop in JavaScript",
          caption: "Visualizzazione del Call Stack, Web APIs, Callback Queue e l'Event Loop."
        },

        { type: "heading", level: 3, text: "I pezzi del puzzle" },
        {
            type: "list",
            listType: "badge",
            items: [
                "Call Stack: Esegue il codice sincrono.",
                "Web APIs: Funzionalità fornite dal browser (DOM, fetch, setTimeout) che vivono fuori dal motore JS.",
                "Callback Queue: Una coda dove le Web APIs mettono le funzioni pronte per essere eseguite.",
                "Event Loop: Il vigile urbano."
            ]
        },
        
        { type: "heading", level: 3, text: "Come funziona l'Event Loop" },
        { type: "paragraph", text: "L'Event Loop ha un compito semplicissimo: controlla continuamente se il Call Stack è vuoto. Se è vuoto, prende la prima funzione in attesa nella Callback Queue e la spinge nel Call Stack per l'esecuzione." },

        { type: "code", language: "javascript", text: `console.log("1");

// Questa funzione viene passata alle Web APIs
setTimeout(() => {
  console.log("2"); // Verrà eseguito solo quando lo stack è libero
}, 0);

console.log("3");

// Output:
// 1
// 3
// 2` },
        { type: "paragraph", text: "Anche con un timer di 0ms, il `console.log('2')` deve aspettare che il codice sincrono principale (1 e 3) finisca e che lo stack si svuoti prima che l'Event Loop lo prenda in carico." },
        {
          type: "callout",
          variant: "tip",
          title: "Microtasks vs Macrotasks",
          text: "Esiste una coda prioritaria chiamata 'Microtask Queue' (usata dalle Promises e async/await). L'Event Loop svuota sempre tutta la Microtask Queue prima di passare alla Callback Queue normale (Macrotasks)."
        },
      ] as ContentBlock[],
    },
    // SEZIONE 5: CONCLUSIONE
    {
        id: "conclusione",
        badge: "Recap",
        blocks: [
          { type: "heading", level: 2, text: "Conclusione" },
          { type: "paragraph", text: "Capire cosa succede sotto il cofano ti rende uno sviluppatore migliore. Non stai più solo scrivendo sintassi, ma stai orchestrando la memoria, gestendo lo stack e sfruttando la natura asincrona dell'Event Loop per creare applicazioni performanti." },
          { type: "badge", text: "Happy Coding" }
        ] as ContentBlock[],
      },
  ],
};

readingInfo.time = calculateReadingTime(blogContent);