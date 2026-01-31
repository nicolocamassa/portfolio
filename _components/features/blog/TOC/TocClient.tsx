"use client";

import { useEffect, useState } from "react";
import Toc from "@/app/components/_ui/TableOfContents";
import NavItem from "@/app/components/_ui/NavItem";
import Stack from "@/app/components/layout/Stack";


type TocSection = { id: string; label: string };

export default function TocClient({ sections }: { sections: TocSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  /* Prende tutte l'id di tutte le sezioni esistenti */
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(

      
      (entries) => {

        /* Recupera il valore migliore da visualizzare */
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]; /* Imposta il valore più visibile come primo nell'array */

        if (best?.target?.id)   console.log(best)
        if (best?.target?.id) setActiveId(best.target.id);
      },
       
      { rootMargin: "-10% 0px -80% 0px" } 
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <Toc className="order-1 lg:order-2">
      <Stack gap="xs">
        {sections.map((s) => (
          <NavItem
            key={s.id}
            href={`#${s.id}`}
            className={s.id === activeId ? "font-semibold text-[var(--brand)]" : "text-[var(--text-secondary)]"}
          >
            {s.label}
          </NavItem>
        ))}
      </Stack>
    </Toc>
  );
}
