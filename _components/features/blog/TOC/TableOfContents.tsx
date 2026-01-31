type TocProps = React.PropsWithChildren<{
  className?: string;
}>;

/* TOC design */
export default function Toc({ className = "", children }: TocProps) {
  return (
    <nav className={`lg:sticky top-30 h-fit gap-4 flex flex-col pb-10 ${className}`}>
      <h3 className="font-sans font-semibold text-sm text-nowrap">Su questa pagina</h3>

      <ul className="gap-4 flex flex-col text-sm whitespace-nowrap">
        { children }
      </ul>
    </nav>
  );
}

