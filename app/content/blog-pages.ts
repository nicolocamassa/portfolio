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
        blocks: [
          { type: "image", src: "/path.png", alt: "Cover" },
          { type: "paragraph", text: "1" },
          { type: "paragraph", text: "2" },
          { type: "heading", level: 2, text: "3"},
        ],
      },
      {
        badge: "Secondo",
        id: "secondo",
        blocks: [
          { type: "paragraph", text: "1" },
          { type: "image", src: "/path.png", alt: "Cover" },
          { type: "heading", level: 1, text: "3"},
          { type: "paragraph", text: "2" },
        ],
      },
            {
        badge: "Terzooo",
        id: "terzo",
        blocks: [
          { type: "paragraph", text: "1" },
          { type: "image", src: "/path.png", alt: "Cover" },
          { type: "heading", level: 1, text: "3"},
          { type: "paragraph", text: "2" },
          { type: "paragraph", text: "1" },
          { type: "paragraph", text: "1" },
          { type: "paragraph", text: "2" },
          { type: "heading", level: 2, text: "2"},
          { type: "heading", level: 1, text: "3"},
        ],
      },
    ],
  },
];
