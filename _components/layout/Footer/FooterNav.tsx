import Container from "../Container";
import { LogoText } from "../../_ui/Logo";
import Stack from "../Stack";

export default function FooterNav() {
  return (
    <div className="w-full border rounded-xl border-(--border-default) py-12 lg:py-16 bg-(--bg-primary) px-10 md:px-8 shadow-[0_0px_24px_-12px_rgba(0,0,0,0.65)] z-10">
      <Container className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
        
        {/* --- SEZIONE LOGO E DESCRIZIONE --- */}
        <Stack gap="xs" className="items-start w-full lg:w-1/4">
          <LogoText />
          <p className="max-w-prose text-(--text-secondary) text-sm leading-relaxed">
            Sviluppatore full-stack con focus su UX/UI. Progetto esperienze
            digitali chiare, accessibili e orientate alle persone.
          </p>
        </Stack>

        {/* --- SEZIONE NAVIGAZIONE --- */}
        <nav className="w-full lg:w-2/3" aria-label="Footer Navigation">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md lg:gap-xs lg:justify-items-end">
            
            {/* Colonna 1: Link Utili */}
            <div className="flex flex-col gap-xs">
              <h4 className="font-bold text-(--text-primary) text-md font-sans">
                Link Utili
              </h4>
              <ul className="flex flex-col gap-xs text-(--text-secondary)">
                <li>
                  <a href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</a>
                </li>
                <li>
                  <a href="/progetti" className="hover:text-(--text-primary) transition-colors">Progetti</a>
                </li>
                <li>
                  <a href="/chi-sono" className="hover:text-(--text-primary) transition-colors">Chi Sono</a>
                </li>
                <li>
                  <a href="/contatti" className="hover:text-(--text-primary) transition-colors">Contattami</a>
                </li>
              </ul>
            </div>

            {/* Colonna 2: Altri Link */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-(--text-primary) text-md font-sans">
                Social & Altri Link
              </h4>
              <ul className="flex flex-col gap-xs text-(--text-secondary)">
                <li>
                  <a href="https://github.com/..." target="_blank" rel="noopener noreferrer" className="hover:text-(--text-primary) transition-colors">GitHub</a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer" className="hover:text-(--text-primary) transition-colors">Linkedin</a>
                </li>
                <li>
                  <a href="https://fiverr.com/..." target="_blank" rel="noopener noreferrer" className="hover:text-(--text-primary) transition-colors">Fiverr</a>
                </li>
              </ul>
            </div>

            {/* Colonna 3: Contatti */}
            <div className="flex flex-col gap-xs">
              <h4 className="font-bold text-(--text-primary) text-md font-sans">
                Contatti
              </h4>
              <address className="flex flex-col gap-xs text-(--text-secondary) not-italic">
                <a href="tel:+39359XXXXXXX" className="hover:text-(--text-primary) transition-colors">
                  +39 359 *** ***
                </a>
                <a href="mailto:camassa.nick@gmail.com" className="hover:text-(--text-primary) transition-colors break-all">
                  camassa.nick@gmail.com
                </a>
              </address>
            </div>

          </div>
        </nav>
      </Container>
    </div>
  );
}