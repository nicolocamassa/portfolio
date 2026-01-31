import { HeroContent } from "../components/sections/HeroSection"

export const heroSection: HeroContent = {
    badge: {
        children: "Full Stack Web Developer",
    },
    title: "Gorem ipsum dolor sit amet, consectetur",
    description: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    ctas: [
        { label: "Vedi i progetti", href: "/projects", color: "black", size: "md" },
        { label: "Contattami", href: "mailto:camassa.nick@gmail.com", color: "white", size: "md" },
    ],
    heroBanner: true
}