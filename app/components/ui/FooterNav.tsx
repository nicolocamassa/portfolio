import MainContainer from "../sections/MainContainer";
import { LogoText } from "../SVG/Logo";

export default function FooterNav() {
  return (
    <div className="w-full border border-[var(--border-default)] rounded-xl py-12 lg:py-16">
      <MainContainer className="flex justify-between">
        <div className="logoContainer flex flex-col items-start gap-2 w-1/4">
          <LogoText />
          <p className="mt-2 max-w-prose text-[var(--text-secondary)]">
            Sviluppatore full-stack con focus su UX/UI. Progetto esperienze
            digitali chiare, accessibili e orientate alle persone
          </p>
        </div>

        <nav className="flex w-2/4 justify-between">
          <ul className="flex flex-col gap-2 [li:first-child]:font-bold text-[var(--text-secondary)]">
            <li><h4 className="font-bold text-[var(--text-primary)] text-md font-sans">Link Utili</h4></li>
            <li>Home</li>
            <li>Progetti</li>
            <li>Chi Sono</li>
            <li>Contattami</li>
          </ul>

          <ul className="flex flex-col gap-2 [li:first-child]:font-bold text-[var(--text-secondary)]">
            <li><h4 className="font-bold text-[var(--text-primary)] text-md font-sans">Altri Link</h4></li>
            <li>GitHub</li>
            <li>Linkedin</li>
            <li>Fiverr</li>
          </ul>

          <ul className="flex flex-col gap-2 [li:first-child]:font-bold text-[var(--text-secondary)]">
            <li><h4 className="font-bold text-[var(--text-primary)] text-md font-sans">Contatti</h4></li>
            <li>+39 359 *** ***</li>
            <li>camassa.nick@gmail.com</li>
          </ul>
        </nav>
      </MainContainer>
    </div>
  );
}
