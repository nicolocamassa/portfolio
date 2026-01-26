import { blogPages } from "@/app/content/blogPages";
import NavItem from "./NavItem";

type TocProps = React.PropsWithChildren<{
  className?: string;
}>;

export default function Toc({ className = "", children }: TocProps) {
  return (
    <nav className={`lg:sticky top-30 h-fit gap-4 flex flex-col ${className}`}>
      <h3 className="font-sans font-semibold text-sm text-nowrap">Su questa pagina</h3>

      <ul className="gap-4 flex flex-col text-sm whitespace-nowrap">
        { children }
      </ul>
    </nav>
  );
}

