import { text } from "stream/consumers";
import type { HeroContent } from "../components/sections/HeroSection";

export type ContentBlock = 
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "paragraph"; text: string }
  /* TODO: SE IL TESTO DEI BADGE È TROPPO LUNGO DISALLINEA LA SEZIONE */
  | { type: "badge"; text: string }
  | { type: "heading"; level: 1 | 2 | 3; text: string; id?: string }
  | { type: "list"; listType: "badge" | "bullet" | "numbered"; items: string[] }
  | { type: "code"; text: string; language: string }
  | { type: "callout"; variant: "info" | "warning" | "danger" | "tip"; title?: string; text: string }

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

export const blogPages: BlogPage[] = [{
  slug: "demo-app",
  hero: {
    badge: { children: "JavaScript Architecture" },
    title: "Closures e Gestione dello Stato",
    description:
      "Le Closures non sono solo una curiosità di JavaScript; sono il fondamento per architetture complesse, incapsulamento dello stato e Dependency Injection. Scopri come costruire sistemi scalabili senza librerie esterne.",
    ctas: [
      { label: "Design Patterns JS", href: "https://www.addyosmani.com/resources/essentialjsdesignpatterns/book/" },
      { label: "Articolo approfondito", href: "#" },
    ],
  },
  sections: [
    {
      badge: "Introduzione",
      id: "intro-robust-systems",
      blocks: [
        {
          type: "heading",
          level: 1,
          text: "Oltre il Contatore: Costruire Architetture Robuste",
          id: "intro-architecture",
        },
        {
          type: "paragraph",
          text:
            "Nelle lezioni precedenti, abbiamo visto come le closures permettano a una funzione di 'ricordare' il suo ambiente lessicale. Questo è il primo passo. Oggi, esploreremo come questo principio apparentemente semplice sia la chiave per tecniche avanzate come l'incapsulamento dello stato, il **Module Pattern** e la **Dependency Injection**, fondamentali per scrivere codice JavaScript pulito, manutenibile e scalabile.",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
          alt: "Diagramma di una complessa architettura software",
          caption: "La complessità del software moderno richiede pattern di design robusti.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Perché è importante?",
          text:
            "Senza un'adeguata gestione dello stato e delle dipendenze, le applicazioni JavaScript diventano rapidamente 'spaghetti code', difficili da testare, debuggare e far evolvere. Le closures offrono un meccanismo nativo e potente per superare queste sfide.",
        },
      ],
    },
    {
      badge: "Fondamenta",
      id: "review-closures",
      blocks: [
        {
          type: "heading",
          level: 2,
          text: "Breve Ripasso: Il Potere Ricordante delle Closures",
          id: "closure-recap",
        },
        {
          type: "paragraph",
          text:
            "Ricordiamo il concetto fondamentale: una closure si verifica quando una funzione interna mantiene un riferimento alle variabili del suo scope esterno, anche dopo che la funzione esterna ha terminato la sua esecuzione. Questo crea un 'sacchetto' di variabili private accessibili solo dalla funzione interna.",
        },
        {
          type: "code",
          language: "javascript",
          text: `function outerFunction(outerVar) {
  let privateCounter = 0; // Questa è la variabile che verrà 'chiusa'

  function innerFunction(innerVar) {
    privateCounter++; // innerFunction ha accesso a privateCounter
    console.log(\`Outer: \${outerVar}, Inner: \${innerVar}, Counter: \${privateCounter}\`);
  }
  return innerFunction;
}

const myClosure = outerFunction("Hello");
myClosure("World"); // Output: Outer: Hello, Inner: World, Counter: 1
myClosure("JS");    // Output: Outer: Hello, Inner: JS, Counter: 2
// privateCounter non è accessibile direttamente qui.`
        },
        {
          type: "paragraph",
          text: "Notate come `privateCounter` venga incrementato ad ogni chiamata di `myClosure`, dimostrando che il suo stato viene mantenuto."
        }
      ],
    },
    {
      badge: "Pattern",
      id: "module-pattern",
      blocks: [
        {
          type: "heading",
          level: 1,
          text: "Il Module Pattern: Incapsulamento Reale",
          id: "module-pattern-heading",
        },
        {
          type: "paragraph",
          text:
            "Il Module Pattern è uno dei pattern di design più potenti in JavaScript, e si basa interamente sulle closures. Il suo scopo è incapsulare 'privatamente' un pezzo di codice, esponendo solo un'interfaccia pubblica. Questo previene la contaminazione dello scope globale e facilita la gestione dei dettagli implementativi.",
        },
        {
          type: "image",
          src: "https://i.pinimg.com/736x/32/31/ed/3231ed24b6f53497f9dac606676eb826.jpg",
          alt: "Ingranaggi interconnessi che simboleggiano un sistema modulare",
          caption: "Ogni modulo è un ingranaggio isolato, ma collaborante.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "La Magia dell'IIFE (Immediately Invoked Function Expression)",
          text:
            "Spesso il Module Pattern è implementato con una IIFE, una funzione che viene definita ed eseguita immediatamente. Questo crea uno scope privato per il modulo, impedendo alle variabili interne di fuoriuscire.",
        },
        {
          type: "heading",
          level: 2,
          text: "Esempio: Un Gestore di Utenti",
          id: "user-manager-example",
        },
        {
          type: "paragraph",
          text:
            "Immaginiamo di voler gestire una lista di utenti. Con il Module Pattern, possiamo incapsulare la lista `users` e i metodi per manipolarla, esponendo solo ciò che è necessario.",
        },
        {
          type: "code",
          language: "javascript",
          text: `const UserManager = (function() {
  let users = []; // Stato privato, accessibile solo qui dentro

  function _validateUser(user) { // Funzione privata
    return user && typeof user.name === 'string';
  }

  return { // Interfaccia pubblica
    addUser: function(user) {
      if (_validateUser(user)) {
        users.push(user);
        console.log(\`User \${user.name} added.\`);
      } else {
        console.warn("Invalid user object.");
      }
    },
    getUsers: function() {
      // Ritorniamo una copia per evitare modifiche dirette allo stato interno
      return [...users]; 
    },
    getUserCount: function() {
      return users.length;
    }
  };
})(); // L'IIFE esegue la funzione e assegna il suo ritorno a UserManager

UserManager.addUser({ name: "Alice", id: 1 });
UserManager.addUser({ name: "Bob", id: 2 });
console.log(UserManager.getUsers());      // [{ name: "Alice", id: 1 }, { name: "Bob", id: 2 }]
console.log(UserManager.getUserCount());  // 2
// console.log(UserManager.users); // ❌ ERRORE: users è privato!
// console.log(UserManager._validateUser()); // ❌ ERRORE: _validateUser è privato!`
        },
        {
          type: "paragraph",
          text: "Questo esempio dimostra un forte incapsulamento. `users` e `_validateUser` sono completamente isolati dal resto del codice, riducendo la possibilità di errori e rendendo il modulo auto-contenuto."
        }
      ],
    },
    {
      badge: "Avanzato",
      id: "dependency-injection",
      blocks: [
        {
          type: "heading",
          level: 1,
          text: "Dependency Injection con Closures",
          id: "di-with-closures",
        },
        {
          type: "paragraph",
          text:
            "Man mano che le applicazioni crescono, i moduli devono interagire. La **Dependency Injection (DI)** è un pattern che permette di 'iniettare' le dipendenze (altri moduli, servizi, configurazioni) in un modulo, invece di farle creare o ricercare al modulo stesso. Questo rende il codice più flessibile, testabile e modulare.",
        },
        {
          type: "image",
          src: "https://i.pinimg.com/736x/ae/1e/57/ae1e573bff00f84ea320e75f1d1bc9ce.jpg",
          alt: "Mani che si passano un oggetto, simboleggiando l'iniezione di dipendenze",
          caption: "Le dipendenze vengono passate, non create internamente.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Il problema del tightly coupled code",
          text:
            "Se un modulo crea direttamente le sue dipendenze, è 'strettamente accoppiato' ad esse. Questo rende impossibile testare il modulo in isolamento o sostituire una dipendenza senza modificare il codice interno del modulo.",
        },
        {
          type: "heading",
          level: 2,
          text: "Esempio: Un Servizio di Notifiche",
          id: "notification-service-example",
        },
        {
          type: "paragraph",
          text:
            "Immaginiamo un modulo `NotificationService` che deve usare un `Logger` e un `ApiAdapter`. Invece di crearli al suo interno, li iniettiamo come argomenti.",
        },
        {
          type: "code",
          language: "javascript",
          text: `// Dipendenza: Logger (un semplice modulo)
const Logger = (function() {
  return {
    log: (message) => console.log(\`[LOG]: \${message}\`),
    error: (message) => console.error(\`[ERROR]: \${message}\`)
  };
})();

// Dipendenza: ApiAdapter (simulato)
const ApiAdapter = (function() {
  return {
    sendData: (url, data) => {
      console.log(\`Sending data to \${url}: \${JSON.stringify(data)}\`);
      return Promise.resolve({ success: true, data });
    }
  };
})();

// Il nostro modulo principale, che accetta dipendenze
const NotificationService = (function(logger, apiAdapter) { // <- DI qui!
  return {
    sendNotification: async function(userId, message) {
      logger.log(\`Attempting to send notification to user \${userId}\`);
      try {
        const response = await apiAdapter.sendData('/api/notifications', { userId, message });
        logger.log(\`Notification sent successfully to \${userId}: \${JSON.stringify(response)}\`);
        return response;
      } catch (error) {
        logger.error(\`Failed to send notification to \${userId}: \${error.message}\`);
        throw error;
      }
    }
  };
})(Logger, ApiAdapter); // <- Iniettiamo le dipendenze qui

// Utilizzo
NotificationService.sendNotification(101, "Il tuo ordine è in arrivo!");
// Output:
// [LOG]: Attempting to send notification to user 101
// Sending data to /api/notifications: {"userId":101,"message":"Il tuo ordine è in arrivo!"}
// [LOG]: Notification sent successfully to 101: {"success":true,"data":{"userId":101,"message":"Il tuo ordine è in arrivo!"}}`
        },
        {
          type: "paragraph",
          text: "In questo esempio, `NotificationService` ottiene le sue dipendenze (`logger`, `apiAdapter`) dall'esterno. Questo significa che possiamo facilmente:",
        },
        {
          type: "list",
          listType: "bullet",
          items: [
            "**Testare:** Durante i test, possiamo passare delle 'mock' o 'stub' di `Logger` e `ApiAdapter` che non fanno chiamate reali o log su console, ma registrano solo se i loro metodi sono stati chiamati.",
            "**Flessibilità:** Possiamo facilmente cambiare l'implementazione del `Logger` (es. passare da console a un servizio di logging remoto) senza toccare `NotificationService`.",
            "**Riusabilità:** `NotificationService` è ora più generico e può essere riutilizzato in contesti diversi con diverse implementazioni delle sue dipendenze."
          ],
        },
      ],
    },
    {
      badge: "Considerazioni",
      id: "advanced-topics",
      blocks: [
        {
          type: "heading",
          level: 1,
          text: "Limitazioni e Alternative",
          id: "limitations",
        },
        {
          type: "paragraph",
          text:
            "Sebbene il Module Pattern con closures sia potente, non è l'unica soluzione e non è sempre la migliore per ogni scenario. I moduli ES6 (`import`/`export`) hanno superato alcune delle sue complessità, ma il principio delle closures rimane il cuore del loro funzionamento interno.",
        },
        {
          type: "list",
          listType: "bullet",
          items: [
            "**Complessità:** Per moduli con molte dipendenze, il costruttore del modulo (la funzione esterna) può diventare ingombrante.",
            "**Lazy Loading:** I moduli caricati tramite IIFE non possono essere caricati 'on demand' in modo nativo come i moduli ES6.",
            "**Overhead:** Ogni istanza di un modulo creato con IIFE genera un nuovo scope con nuove closures, il che può avere un leggero impatto sulla memoria se si creano centinaia di istanze identiche.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Quando Usarlo Oggi?",
          id: "when-to-use",
        },
        {
          type: "list",
          listType: "badge",
          items: [
            "**Legacy Code:** Per comprendere e manutenere vecchie codebase.",
            "**Piccoli Utility Modules:** Per incapsulare piccole utility senza bisogno di un intero sistema di moduli ES6.",
            "**Principi Fondamentali:** Per consolidare la comprensione di come lo scope e la memoria funzionano in JavaScript, essenziale per frameworks come React.",
            "**Testabilità:** Il DI via closures è ancora un ottimo pattern per rendere i moduli facilmente testabili in isolamento."
          ],
        },
      ],
    },
    {
      badge: "Conclusione",
      id: "final-thoughts",
      blocks: [
        {
          type: "heading",
          level: 1,
          text: "Le Closures: Il Tuo Strumento Segreto per Architetture Solide",
          id: "secret-weapon",
        },
        {
          type: "paragraph",
          text:
            "Le closures non sono solo una caratteristica sintattica; sono un meccanismo fondamentale che abilita pattern di design avanzati. Comprendendole a fondo, non solo scriverai codice migliore, ma capirai anche le fondamenta di molti framework e librerie che usi ogni giorno.",
        },
        {
          type: "list",
          listType: "numbered",
          items: [
            "Usa le closures per **incapsulare lo stato privato** e prevenire effetti collaterali indesiderati.",
            "Applica il **Module Pattern** per creare componenti software auto-contenuti e con interfacce chiare.",
            "Adotta la **Dependency Injection** tramite closures per migliorare la testabilità e la flessibilità del tuo codice.",
            "Ricorda che la comprensione dei concetti core di JavaScript è sempre più potente della semplice memorizzazione di API di framework."
          ],
        },
        {
          type: "paragraph",
          text: "Ora mettiti alla prova: prendi un pezzo di codice che hai scritto di recente e prova a isolarne le dipendenze usando questi pattern. Il tuo codice ti ringrazierà!"
        }
      ],
    },
  ],
}
];
