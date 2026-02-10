type TocProps = React.PropsWithChildren<{
  className?: string;
}>;

/* TOC design */
export default function Toc({ className = "", children }: TocProps) {
  return (
    <nav className={`lg:sticky top-30 h-fit gap-4 flex flex-col pb-5 lg:pb-10 border-b border-b-(--border-default) xl:border-none ${className}`}>
      <span className="font-sans font-semibold text-sm text-nowrap">Su questa pagina</span>
      <ul className="gap-4 flex flex-col text-sm whitespace-nowrap">
        { children }
      </ul>
    </nav>
  );
}

