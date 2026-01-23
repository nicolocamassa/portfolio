"use client";

import { useEffect, useState } from "react";
import Toc from "@/app/components/ui/TableOfContents";
import NavItem from "@/app/components/ui/NavItem";
import Stack from "@/app/components/layout/Stack";

type TocSection = { id: string; label: string };

export default function TocClient({ sections }: { sections: TocSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (best?.target?.id) setActiveId(best.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.2, 0.3] }
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
