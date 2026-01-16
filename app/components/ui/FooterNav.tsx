import MainContainer from "../sections/MainContainer";
import { LogoText } from "../SVG/Logo";

// Nota: Se usi Next.js, sostituisci <a> con <Link href="...">
// Se usi React Router, usa <Link to="...">

export default function FooterNav() {
  return (
    <div className="w-full border rounded-xl border-[var(--border-default)] py-12 lg:py-16 bg-[var(--bg-primary)] px-10 md:px-8">
      <MainContainer className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
        
        {/* --- SEZIONE LOGO E DESCRIZIONE --- */}
        <div className="flex flex-col items-start gap-4 w-full lg:w-1/4">
          <LogoText />
          <p className="max-w-prose text-[var(--text-secondary)] text-sm leading-relaxed">
            Sviluppatore full-stack con focus su UX/UI. Progetto esperienze
            digitali chiare, accessibili e orientate alle persone.
          </p>
        </div>

        {/* --- SEZIONE NAVIGAZIONE --- */}
        <nav className="w-full lg:w-2/3" aria-label="Footer Navigation">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-4 lg:justify-items-end">
            
            {/* Colonna 1: Link Utili */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[var(--text-primary)] text-md font-sans">
                Link Utili
              </h4>
              <ul className="flex flex-col gap-2 text-[var(--text-secondary)]">
                <li>
                  <a href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</a>
                </li>
                <li>
                  <a href="/progetti" className="hover:text-[var(--text-primary)] transition-colors">Progetti</a>
                </li>
                <li>
                  <a href="/chi-sono" className="hover:text-[var(--text-primary)] transition-colors">Chi Sono</a>
                </li>
                <li>
                  <a href="/contatti" className="hover:text-[var(--text-primary)] transition-colors">Contattami</a>
                </li>
              </ul>
            </div>

            {/* Colonna 2: Altri Link */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[var(--text-primary)] text-md font-sans">
                Social & Altri Link
              </h4>
              <ul className="flex flex-col gap-2 text-[var(--text-secondary)]">
                <li>
                  <a href="https://github.com/..." target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">GitHub</a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">Linkedin</a>
                </li>
                <li>
                  <a href="https://fiverr.com/..." target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">Fiverr</a>
                </li>
              </ul>
            </div>

            {/* Colonna 3: Contatti */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[var(--text-primary)] text-md font-sans">
                Contatti
              </h4>
              <address className="flex flex-col gap-2 text-[var(--text-secondary)] not-italic">
                <a href="tel:+39359XXXXXXX" className="hover:text-[var(--text-primary)] transition-colors">
                  +39 359 *** ***
                </a>
                <a href="mailto:camassa.nick@gmail.com" className="hover:text-[var(--text-primary)] transition-colors break-all">
                  camassa.nick@gmail.com
                </a>
              </address>
            </div>

          </div>
        </nav>
      </MainContainer>
    </div>
  );
}