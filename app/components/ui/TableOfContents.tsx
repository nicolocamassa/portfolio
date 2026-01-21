import { blogPages } from "@/app/content/blog-pages";
import NavItem from "./NavItem";

type TocProps = {
  className?: string;
};

export default function Toc({ className }: TocProps) {
  return (
    <nav className={`lg:sticky top-30 w-full lg:max-w-1/7 h-fit gap-4 flex flex-col ${className}`}>
      <h3 className="font-sans font-semibold text-sm text-nowrap">Su questa pagina</h3>

      <ul className="gap-4 flex flex-col text-nowrap text-sm">
        <NavItem href="#">Idee e Progettazione</NavItem>
        <NavItem href="#">Progettazione del design</NavItem>
        <NavItem href="#">I componenti principali</NavItem>
        <NavItem href="#">Scrittura del codice</NavItem>
      </ul>
    </nav>
  );
}
