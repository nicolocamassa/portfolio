import { LogoText } from "../SVG/Logo";
import Button from "../ui/Buttons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-3 md:px-5">
      <div
        className="
          pointer-events-none absolute inset-0 h-[200%]
          backdrop-blur-[16px]
          [mask-image:linear-gradient(to_bottom,black_0%_50%,transparent_50%_100%)]
        "
      />

      <div className="relative max-w-[1750px] h-18 mx-auto flex items-center justify-between">
        <div className="logoContainer flex items-center gap-2">
          <LogoText />
        </div>

        <nav className="text-xs md:text-sm flex items-center gap-2">
          <Button
            href="#"
            color="textOnly"
            size="sm"
            className="hidden md:block"
          >
            Contattami
          </Button>

          <Button href="#test" color="black" size="sm">
            Scarica CV
          </Button>
        </nav>
      </div>
    </header>
  );
}
