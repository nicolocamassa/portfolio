type TocProps = React.PropsWithChildren<{
  className?: string;
}>;

/* TOC design */
export default function Toc({ className = "", children }: TocProps) {
  return (
<<<<<<< Updated upstream:_components/features/blog/TOC/TableOfContents.tsx
<<<<<<< Updated upstream:_components/features/blog/TOC/TableOfContents.tsx
    <nav className={`lg:sticky top-30 h-fit gap-4 flex flex-col pb-10 ${className}`}>
      <span className="font-sans font-semibold text-sm text-nowrap">Su questa pagina</span>
=======
=======
>>>>>>> Stashed changes:app/components/ui/TableOfContents.tsx
    <nav className={`lg:sticky top-30 h-fit gap-4 flex flex-col pb-5 lg:pb-10 border-b border-b-(--border-default) xl:border-none ${className}`}>
      <h3 className="font-sans font-semibold text-sm text-nowrap">Su questa pagina</h3>
>>>>>>> Stashed changes:app/components/ui/TableOfContents.tsx

      <ul className="gap-4 flex flex-col text-sm whitespace-nowrap">
        { children }
      </ul>
    </nav>
  );
}

