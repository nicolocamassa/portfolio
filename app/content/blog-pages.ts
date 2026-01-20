import type { HeroContent } from "../components/sections/HeroSection";

export type BlogPage = HeroContent & { slug: string };

export const blogPages: BlogPage[] = [
  {
    slug: "demo-app",
    badge: { 
        children: "Demo App" 
    },
    title: "My demo app ",
    description: "Lorem ipsum dolor",
    ctas: [{ 
        label: "GitHub", href: "#test" 
    }],
  },


  {
    slug: "demo-app2",
    badge: { 
        children: "Demo App" 
    },
    title: "My demo app 2",
    description: "Lorem ipsum dolor 2",
    ctas: [{ 
        label: "GitHub", href: "#test" 
    }],
  },
];