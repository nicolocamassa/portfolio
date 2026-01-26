import type { HeroContent } from "../components/sections/HeroSection";
import type { InfoBanner } from "../components/ui/ReadingInfoBanner";

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
  info: InfoBanner;
};

export const blogPages: BlogPage[] = [];
