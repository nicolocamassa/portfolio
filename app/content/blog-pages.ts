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
      badge: { children: "Demo App" },
      title: "My demo app 2",
      description: "Lorem ipsum dolor sit amet",
      ctas: [
        { label: "GitHub", href: "https://github.com/..." },
      ],
    },
    sections: [
      {
        badge: "Piero",
        id: "idee-e-progetto",
        title: "Idee e progetto",
        description: "Lorem ipsum dolor 1",
        image: { src: "/immagine.png", alt: "Screenshot del progetto" },
      },
      {
        badge: "Giovanni",
        id: "progettazione-design",
        title: "Progettazione Design",
        description: "Lorem ipsum dolor 2",
      }
    ],
  },
];
