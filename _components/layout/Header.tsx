import { LogoText } from "../_ui/Logo";
import Button from "../_ui/Buttons";
import NavItem from "../_ui/NavItem";
import { Download } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-3 md:px-5 bg-white border-b border-b-gray-100">
      <div
        className="
          pointer-events-none absolute inset-0 h-[200%]
        "
      />

      <div className="relative max-w-(--container-layout) h-15 md:h-18 mx-auto flex items-center justify-between">
        <div className="logoContainer flex items-center gap-2">
          <LogoText />
        </div>

        <nav>
          <ul className="text-xs md:text-sm flex items-center justify-center gap-xs">
            <NavItem href="mailto:camassanicolo03@gmail.com" className="hidden md:block">Contattami</NavItem>

            <li>
              <Button href="#test" color="black" size="xs" className="gap-2">
                <Download size={17}></Download>Scarica CV
              </Button>
            </li>
          </ul>

          
        </nav>
      </div>
    </header>
  );
}
