import type { ContentBlock } from "@/_types/blogPages";
import type { BlogPage } from "@/_types/blogPages";
import type { InfoBanner } from "@/_components/features/blog/ReadingInfoBanner";
import { calculateReadingTime } from "@/_utils/readingTime";
import { HeroContent} from "@/_components/sections";

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
export const heroSectionBlog: HeroContent = {
  badge: { children: "Architettura" },
  title: "Sistemi Distribuiti: Dalla Teoria alla Pratica",
  description: "Scopri come Netflix, Spotify e Amazon gestiscono milioni di richieste al secondo attraverso microservizi, message queues e database distribuiti.",
  ctas: [
    { label: "Inizia il viaggio", href: "#introduzione" },
    { label: "Pattern & Best Practices", href: "https://microservices.io/patterns/", color: "white" }
  ],
  image: {
    src: "/images/testa.png",
    alt: "immagine"
  }
}

/* INFO PAGINA DETTAGLIO */
export const readingInfo: InfoBanner = {
  time: "",
  tech: ["kubernetes", "docker", "redis"],
  date: "28.1.2026",
  status: "completed"
}

export const changelog: Changelog = {
  items: [
    {
      id: 1,
      title: "Multi-region deployment",
      icon: "Cloud",
      badges: ["Infrastructure", "High Availability"],
      description: "Implementato deployment multi-regione con failover automatico per garantire 99.99% di uptime anche durante outage regionali.",
      meta: { numActivity: 6, date: "26 Gen 2026" },
      updates: [
        { label: "Infrastructure", text: "Cluster Kubernetes attivi in EU, US e APAC" },
        { label: "Networking", text: "Global load balancer con GeoDNS routing" },
        { label: "Database", text: "Replica cross-region con conflict resolution" },
        { label: "Monitoring", text: "Dashboard unificata per health check globale" },
        { label: "Docs", text: "Runbook per disaster recovery procedures" },
        { label: "Security", text: "Encryption in transit tra data center" }
      ]
    },
    {
      id: 2,
      title: "Event-driven architecture",
      icon: "Zap",
      badges: ["Architecture", "Scalability"],
      description: "Migrazione da architettura monolitica a event-driven con Apache Kafka per gestire 500k eventi/sec con latenza sub-10ms.",
      meta: { numActivity: 5, date: "24 Gen 2026" },
      updates: [
        { label: "Backend", text: "Kafka cluster con 12 broker in produzione" },
        { label: "Microservices", text: "15 servizi ora comunicano via eventi" },
        { label: "Schema Registry", text: "Avro schemas per validation automatica" },
        { label: "Monitoring", text: "Kafka lag alerts e consumer health checks" },
        { label: "Performance", text: "Throughput aumentato del 340%" }
      ]
    },
    {
      id: 3,
      title: "Service mesh implementation",
      icon: "Server",
      badges: ["DevOps", "Security"],
      description: "Deploy di Istio come service mesh per gestire traffic management, security e observability tra 50+ microservizi.",
      meta: { numActivity: 4, date: "22 Gen 2026" },
      updates: [
        { label: "Networking", text: "mTLS automatico tra tutti i servizi" },
        { label: "Traffic", text: "Canary deployments e A/B testing nativo" },
        { label: "Observability", text: "Distributed tracing con Jaeger" },
        { label: "Security", text: "Zero-trust network policies" }
      ]
    },
    {
      id: 4,
      title: "Distributed caching layer",
      icon: "Database",
      badges: ["Performance", "Caching"],
      description: "Implementazione di Redis Cluster con 100GB di cache distribuita, riducendo il carico sul database del 75%.",
      meta: { numActivity: 3, date: "20 Gen 2026" },
      updates: [
        { label: "Backend", text: "Redis Cluster con 6 nodi + replica" },
        { label: "Performance", text: "Cache hit rate al 92%" },
        { label: "Monitoring", text: "Real-time metrics per cache invalidation" }
      ]
    },
    {
      id: 5,
      title: "Zero-downtime migrations",
      icon: "Server",
      badges: ["Database", "DevOps"],
      description: "Framework per migrazioni database senza downtime usando dual-write pattern e gradual cutover.",
      meta: { numActivity: 4, date: "18 Gen 2026" },
      updates: [
        { label: "Database", text: "Shadow tables per validation" },
        { label: "Backend", text: "Dual-write logic con rollback support" },
        { label: "Monitoring", text: "Data consistency checks automatici" },
        { label: "Docs", text: "Playbook per future migrations" }
      ]
    },
    {
      id: 6,
      title: "API Gateway upgrade",
      icon: "Shield",
      badges: ["Security", "API"],
      description: "Nuovo API Gateway con rate limiting avanzato, API key rotation e threat detection basato su ML.",
      meta: { numActivity: 5, date: "15 Gen 2026" },
      updates: [
        { label: "Security", text: "Rate limiting per client con Redis" },
        { label: "API", text: "GraphQL federation per 10+ services" },
        { label: "Analytics", text: "Real-time API usage dashboard" },
        { label: "DDoS", text: "ML model per rilevamento anomalie" },
        { label: "Docs", text: "Swagger UI auto-generated" }
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
      badge: "Foundations",
      blocks: [
        { type: "heading", level: 1, text: "Perché i Sistemi Distribuiti?" },
        { type: "paragraph", text: "Immagina di costruire la prossima Netflix. Un singolo server potrebbe gestire 100 utenti simultanei, ma cosa succede quando hai 200 milioni di abbonati che vogliono guardare Stranger Things nello stesso istante?" },
        { 
          type: "image", 
          src: "https://hazelcast.com/wp-content/uploads/2021/12/18_DataPartitioning-1.png",
          alt: "Confronto tra architettura monolitica e distribuita",
          caption: "L'evoluzione da un sistema monolitico a un'architettura distribuita scalabile."
        },
        { type: "paragraph", text: "Un sistema distribuito è un insieme di computer indipendenti che appaiono all'utente finale come un unico sistema coerente. Ogni macchina (o 'nodo') lavora in parallelo, comunica con gli altri, e insieme formano qualcosa di più potente della somma delle parti." },
        {
          type: "callout",
          variant: "info",
          title: "La definizione di Leslie Lamport",
          text: "Il ricercatore che ha vinto il Turing Award definisce un sistema distribuito come: 'Un sistema in cui il crash di un computer di cui non sapevi nemmeno l'esistenza può rendere inutilizzabile il tuo computer.'"
        },
        { type: "heading", level: 3, text: "I benefici (e le sfide)" },
        {
          type: "list",
          listType: "bullet",
          items: [
            "**Scalabilità orizzontale**: Aggiungi più server invece di potenziare quello esistente (scaling verticale).",
            "**Fault tolerance**: Se un server crasha, gli altri continuano a funzionare.",
            "**Latenza geografica ridotta**: Server vicini agli utenti in tutto il mondo.",
            "**Ma**: Complessità esponenziale, consistenza dei dati difficile, debugging infernale."
          ]
        },
      ] as ContentBlock[],
    },

    // SEZIONE 2: CAP THEOREM
    {
      id: "cap-theorem",
      badge: "Teoria",
      blocks: [
        { type: "heading", level: 2, text: "Il CAP Theorem: Scegli Due su Tre" },
        { type: "paragraph", text: "Il teorema CAP (o teorema di Brewer) è uno dei concetti fondamentali che ogni architetto deve conoscere. Afferma che in un sistema distribuito puoi avere al massimo DUE delle seguenti tre garanzie:" },
        {
          type: "list",
          listType: "badge",
          items: [
            "**Consistency (C)**: Tutti i nodi vedono gli stessi dati nello stesso momento.",
            "**Availability (A)**: Ogni richiesta riceve una risposta (successo o fallimento).",
            "**Partition Tolerance (P)**: Il sistema continua a funzionare anche se alcuni messaggi tra nodi vengono persi."
          ]
        },
        { type: "paragraph", text: "Nella pratica, le network partitions sono inevitabili (cavi tagliati, switch che crashano, configurazioni errate). Quindi in realtà stai scegliendo tra CP (Consistency + Partition tolerance) o AP (Availability + Partition tolerance)." },
        { type: "heading", level: 3, text: "Esempi nel mondo reale" },
        { type: "code", language: "markdown", text: `**CP Systems** (sacrificano Availability)
- MongoDB (con strong consistency)
- HBase, Redis (in alcune configurazioni)
- Sistemi bancari: meglio nessuna risposta che dati inconsistenti

**AP Systems** (sacrificano Consistency)
- Cassandra, DynamoDB
- DNS, CDN
- Social media: va bene se i like count sono leggermente disallineati` },
        {
          type: "callout",
          variant: "tip",
          title: "PACELC: L'estensione del CAP",
          text: "Il teorema PACELC estende il CAP: se c'è una Partizione scegli tra A e C, ALTRIMENTI (Else) scegli tra Latency e Consistency. Nella normale operazione, quanto tempo sei disposto ad aspettare per avere dati consistenti?"
        },
      ] as ContentBlock[],
    },

    // SEZIONE 3: MICROSERVICES
    {
      id: "microservices",
      badge: "Architecture",
      blocks: [
        { type: "heading", level: 2, text: "Microservizi: Divide et Impera" },
        { type: "paragraph", text: "Un'architettura a microservizi scompone l'applicazione in servizi piccoli, indipendenti, che comunicano tramite API (solitamente REST o gRPC)." },
        { type: "heading", level: 3, text: "I principi chiave" },
        {
          type: "list",
          listType: "bullet",
          items: [
            "**Single Responsibility**: Ogni servizio fa UNA cosa sola, ma la fa bene.",
            "**Autonomia**: Deploy, scaling e failure sono indipendenti.",
            "**Decentralizzazione**: Ogni team sceglie il proprio stack tecnologico.",
            "**Design for Failure**: Assume che qualcosa crasherà sempre."
          ]
        },
        { type: "heading", level: 3, text: "Comunicazione tra servizi" },
        { type: "paragraph", text: "I microservizi devono parlare tra loro. Ci sono due approcci principali:" },
        { type: "code", language: "javascript", text: `// 1. SINCRONO - HTTP/REST
async function getOrderDetails(orderId) {
  // Chiamata diretta al servizio Order
  const order = await fetch(\`http://order-service/api/orders/\${orderId}\`);
  
  // Poi chiamata al servizio User
  const user = await fetch(\`http://user-service/api/users/\${order.userId}\`);
  
  return { order, user };
}

// 2. ASINCRONO - Message Queue (Kafka, RabbitMQ)
// Publisher (Order Service)
await kafka.publish('order.created', {
  orderId: '12345',
  userId: 'user-789',
  total: 99.99
});

// Consumer (Email Service) - in ascolto
kafka.subscribe('order.created', async (event) => {
  await sendConfirmationEmail(event.userId, event.orderId);
});

// Consumer (Analytics Service) - stesso evento, azione diversa
kafka.subscribe('order.created', async (event) => {
  await trackRevenue(event.total);
});` },
        {
          type: "callout",
          variant: "danger",
          title: "Il Problema del Distributed Monolith",
          text: "Attenzione: se i tuoi microservizi sono troppo accoppiati (dipendono tutti uno dall'altro), hai creato un 'monolite distribuito' - tutti gli svantaggi di entrambi gli approcci!"
        },
      ] as ContentBlock[],
    },

    // SEZIONE 4: DATABASE DISTRIBUITI
    {
      id: "databases",
      badge: "Data",
      blocks: [
        { type: "heading", level: 2, text: "Database Distribuiti e Consistenza Eventuale" },
        { type: "paragraph", text: "Quando i dati sono sparsi su più server in continenti diversi, garantire che tutti vedano la stessa cosa nello stesso momento è... complicato. Molto complicato." },
        { type: "heading", level: 3, text: "Sharding: Dividere il Database" },
        { type: "paragraph", text: "Lo **sharding** divide il dataset in pezzi (shard) distribuiti su server diversi. Ogni shard contiene un subset dei dati." },
        { type: "code", language: "javascript", text: `// Sharding per range (esempio: per regione geografica)
function getUserShard(userId) {
  const region = userId.startsWith('EU') ? 'shard-europe' 
              : userId.startsWith('US') ? 'shard-usa'
              : 'shard-asia';
  return databases[region];
}

// Sharding per hash (distribuzione uniforme)
function getOrderShard(orderId) {
  const hash = md5(orderId);
  const shardNum = hash % NUM_SHARDS; // 0-9 se hai 10 shard
  return databases[\`shard-\${shardNum}\`];
}` },
        { 
          type: "image", 
          src: "https://hazelcast.com/wp-content/uploads/2021/12/18_DataPartitioning-1.png",
          alt: "Database sharding visualization",
          caption: "Sharding: ogni server gestisce solo una porzione dei dati totali."
        },
        { type: "heading", level: 3, text: "Replication: Copie di Sicurezza" },
        { type: "paragraph", text: "La **replication** crea copie identiche dei dati su server multipli. Se uno crasha, un altro prende il suo posto." },
        {
          type: "list",
          listType: "bullet",
          items: [
            "**Master-Slave**: Un nodo principale (master) gestisce le write, gli slave replicano i dati per le read.",
            "**Master-Master**: Più nodi possono accettare write. Richiede conflict resolution.",
            "**Consensus-based** (Raft, Paxos): Un gruppo di nodi vota su ogni operazione."
          ]
        },
        { type: "heading", level: 3, text: "Il Problema delle Transazioni Distribuite" },
        { type: "paragraph", text: "In un database tradizionale, le transazioni ACID garantiscono consistenza. Ma come fai una transazione che tocca 3 database diversi in 3 datacenter diversi?" },
        { type: "code", language: "javascript", text: `// SAGA PATTERN - Alternative alle transazioni distribuite
// Invece di una transazione atomica, una sequenza di step locali
// con compensating actions in caso di fallimento

async function createOrder(userId, items) {
  let orderId;
  
  try {
    // Step 1: Riserva inventario
    await inventoryService.reserve(items);
    
    // Step 2: Addebita pagamento
    await paymentService.charge(userId, totalAmount);
    
    // Step 3: Crea ordine
    orderId = await orderService.create(userId, items);
    
    // Success!
    return orderId;
    
  } catch (error) {
    // Rollback con compensating transactions
    if (orderId) await orderService.cancel(orderId);
    await paymentService.refund(userId);
    await inventoryService.release(items);
    
    throw new Error('Order creation failed');
  }
}` },
        {
          type: "callout",
          variant: "tip",
          title: "BASE invece di ACID",
          text: "I sistemi distribuiti spesso adottano BASE: Basically Available, Soft state, Eventually consistent. Invece di consistenza immediata (ACID), accettano che i dati si allineeranno... alla fine."
        },
      ] as ContentBlock[],
    },

    // SEZIONE 5: ORCHESTRAZIONE
    {
      id: "orchestration",
      badge: "DevOps",
      blocks: [
        { type: "heading", level: 2, text: "Kubernetes: L'Orchestratore di Container" },
        { type: "paragraph", text: "Quando hai 100 microservizi containerizzati con Docker che devono girare su 50 server, gestirli manualmente è impossibile. Kubernetes automatizza il deployment, scaling e management." },
        { 
          type: "image", 
          src: "https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg",
          alt: "Kubernetes architecture",
          caption: "Un cluster Kubernetes: Control Plane gestisce i Worker Nodes dove girano i Pod."
        },
        { type: "heading", level: 3, text: "I concetti fondamentali" },
        {
          type: "list",
          listType: "badge",
          items: [
            "**Pod**: L'unità minima - uno o più container che condividono rete e storage",
            "**Deployment**: Definisce quante repliche del pod vuoi e come aggiornarle",
            "**Service**: Un load balancer interno che distribuisce traffico ai pod",
            "**Ingress**: Entry point HTTP/HTTPS dall'esterno del cluster",
            "**ConfigMap/Secret**: Configurazioni e credenziali separate dal codice"
          ]
        },
        { type: "code", language: "yaml", text: `# deployment.yaml - Definizione dichiarativa
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3  # Voglio 3 copie di questo servizio
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-api
        image: myregistry/user-service:v2.1.0
        ports:
        - containerPort: 8080
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:  # K8s riavvia il pod se non risponde
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10` },
        { type: "paragraph", text: "Kubernetes monitora costantemente lo stato desiderato vs stato attuale. Se un pod crasha, ne avvia automaticamente uno nuovo. Se il traffico aumenta e la CPU è al 80%, può fare auto-scaling." },
        {
          type: "callout",
          variant: "info",
          title: "Service Mesh: Il Layer Successivo",
          text: "Tools come Istio e Linkerd aggiungono un 'sidecar proxy' a ogni pod, gestendo automaticamente retry logic, circuit breakers, mutual TLS, distributed tracing e metrics - senza modificare il codice dell'applicazione."
        },
      ] as ContentBlock[],
    },

    // SEZIONE 6: OBSERVABILITY
    {
      id: "observability",
      badge: "Monitoring",
      blocks: [
        { type: "heading", level: 2, text: "Osservabilità: I Tre Pilastri" },
        { type: "paragraph", text: "In un sistema distribuito con centinaia di servizi, quando qualcosa va storto, come capisci DOVE e PERCHÉ? L'observability si basa su tre pilastri:" },
        { 
          type: "image", 
          src: "https://miro.medium.com/v2/resize:fit:1400/1*T8gu-BYsB0WN01dGhll8dQ.png",
          alt: "Observability pillars",
          caption: "Logs, Metrics e Traces: gli strumenti per capire cosa succede nel sistema."
        },
        { type: "heading", level: 3, text: "1. Logs - Il Diario degli Eventi" },
        { type: "paragraph", text: "Ogni servizio scrive log strutturati. In un sistema distribuito, tool come ELK Stack (Elasticsearch, Logstash, Kibana) o Loki aggregano milioni di log lines." },
        { type: "code", language: "json", text: `{
  "timestamp": "2026-01-28T14:32:01.234Z",
  "service": "order-service",
  "level": "ERROR",
  "message": "Payment gateway timeout",
  "trace_id": "a1b2c3d4e5f6",  // Collegato al trace
  "user_id": "user-12345",
  "order_id": "order-98765",
  "duration_ms": 5002
}` },
        { type: "heading", level: 3, text: "2. Metrics - I Numeri che Contano" },
        { type: "paragraph", text: "Prometheus è lo standard de-facto per metriche time-series. Grafana le visualizza in dashboard." },
        {
          type: "list",
          listType: "bullet",
          items: [
            "**Latency**: P50, P95, P99 response time",
            "**Traffic**: Richieste per secondo",
            "**Errors**: Tasso di errori (5xx, timeout)",
            "**Saturation**: CPU, memoria, disk I/O"
          ]
        },
        { type: "heading", level: 3, text: "3. Distributed Tracing - Il GPS delle Richieste" },
        { type: "paragraph", text: "Quando una richiesta attraversa 15 microservizi, il tracing (con Jaeger o Zipkin) mostra esattamente il percorso e dove ha impiegato più tempo." },
        { type: "code", language: "javascript", text: `// Ogni servizio propaga il trace context
app.get('/order/:id', async (req, res) => {
  const span = tracer.startSpan('get-order', {
    childOf: req.headers['x-trace-id']  // Ricevuto dal chiamante
  });
  
  try {
    // Questa chiamata eredita il trace
    const order = await orderDb.findById(req.params.id);
    
    // Chiamata al servizio downstream
    const user = await userService.getUser(order.userId, {
      traceId: span.context().traceId  // Propaga il trace
    });
    
    span.setTag('order.status', order.status);
    res.json({ order, user });
  } finally {
    span.finish();
  }
});` },
        { 
          type: "image", 
          src: "https://www.jaegertracing.io/img/trace-detail-ss.png",
          alt: "Jaeger trace visualization",
          caption: "Una singola richiesta visualizzata in Jaeger: vedi ogni hop e quanto tempo ha preso."
        },
      ] as ContentBlock[],
    },

    // SEZIONE 7: RESILIENCE PATTERNS
    {
      id: "resilience",
      badge: "Reliability",
      blocks: [
        { type: "heading", level: 2, text: "Pattern di Resilienza: Design for Failure" },
        { type: "paragraph", text: "In un sistema distribuito, i fallimenti non sono un'eccezione - sono la norma. Questi pattern aiutano a costruire sistemi che degradano gracefully invece di collassare completamente." },
        { type: "heading", level: 3, text: "Circuit Breaker" },
        { type: "paragraph", text: "Come un salvavita elettrico, il Circuit Breaker interrompe le chiamate verso un servizio che sta fallendo, permettendogli di recuperare." },
        { type: "code", language: "javascript", text: `class CircuitBreaker {
  constructor(service, threshold = 5, timeout = 60000) {
    this.service = service;
    this.failureCount = 0;
    this.threshold = threshold;
    this.timeout = timeout;
    this.state = 'CLOSED';  // CLOSED, OPEN, HALF_OPEN
    this.nextAttempt = Date.now();
  }
  
  async call(...args) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      // Prova a riaprire
      this.state = 'HALF_OPEN';
    }
    
    try {
      const result = await this.service(...args);
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }
  
  onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.timeout;
    }
  }
}

// Uso
const breaker = new CircuitBreaker(paymentService.charge, 5, 30000);
try {
  await breaker.call(userId, amount);
} catch (error) {
  // Fallback: metti in coda per retry successivo
  await queueForRetry({ userId, amount });
}` },
        { type: "heading", level: 3, text: "Retry con Exponential Backoff" },
        { type: "paragraph", text: "Non riprovare immediatamente - aspetta progressivamente più tempo tra un tentativo e l'altro." },
        { type: "code", language: "javascript", text: `async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // Backoff: 1s, 2s, 4s, 8s...
      const delay = Math.min(1000 * Math.pow(2, i), 10000);
      
      // Jitter: aggiungi randomness per evitare "thundering herd"
      const jitter = Math.random() * 1000;
      
      await sleep(delay + jitter);
    }
  }
}` },
        { type: "heading", level: 3, text: "Bulkhead Pattern" },
        { type: "paragraph", text: "Come i compartimenti stagni di una nave, isola le risorse in modo che un problema in un'area non affondi l'intera applicazione." },
        {
          type: "callout",
          variant: "tip",
          title: "Chaos Engineering",
          text: "Netflix ha pionierizzato la pratica di iniettare fallimenti random in produzione (Chaos Monkey). Se il sistema sopravvive quando spegni server a caso, probabilmente è resiliente davvero."
        },
      ] as ContentBlock[],
    },

    // SEZIONE 8: CONCLUSIONE
    {
      id: "conclusione",
      badge: "Conclusioni",
      blocks: [
        { type: "heading", level: 2, text: "Il Viaggio è Appena Iniziato" },
        { type: "paragraph", text: "I sistemi distribuiti sono complessi, ma sono l'unico modo per scalare alle dimensioni di internet moderno. Ogni pattern, ogni trade-off, ogni decisione architettonica ha conseguenze reali su performance, costi e user experience." },
        {
          type: "list",
          listType: "bullet",
          items: [
            "**Start small**: Non serve Kubernetes per un'app con 100 utenti. Scala quando ne hai bisogno.",
            "**Monitor everything**: Non puoi fixare ciò che non puoi misurare.",
            "**Embrace failure**: Progetta assumendo che tutto crasherà. Perché crasherà.",
            "**Keep learning**: Questa è un'area in continua evoluzione. AWS lancia nuovi servizi ogni settimana."
          ]
        },
        { type: "paragraph", text: "Le aziende che dominano il web - Google, Amazon, Netflix, Uber - hanno costruito i loro imperi su questi principi. Ora è il tuo turno di costruire qualcosa di straordinario." },
        { 
          type: "image", 
          src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop",
          alt: "Server racks in a data center",
          caption: "Il futuro è distribuito. Pronto a costruirlo?"
        },
        { type: "badge", text: "Scale to Infinity 🚀" }
      ] as ContentBlock[],
    },
  ],
};

readingInfo.time = calculateReadingTime(blogContent);