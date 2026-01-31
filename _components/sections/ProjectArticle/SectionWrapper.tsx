import { Badge } from "@/_components/ui";
import type { Sections } from "@/_types/projectArticle";

interface SectionWrapperProps {
  section: Sections;
  children: React.ReactNode;
}

export function SectionWrapper({ section, children }: SectionWrapperProps) {
  return (
    <section
      id={section.id}
      className="mb-(--section-sm) -mt-25 pt-20 flex flex-col gap-2 lg:grid lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-(--space-blog)"
    >
      <div className="text-left mb-2 lg:text-right lg:mb-0 lg:pt-2 lg:sticky lg:top-24 lg:self-start">
        {section.badge ? (
          <Badge size="md">{section.badge}</Badge>
        ) : (
          <div className="hidden lg:block w-1" />
        )}
      </div>

      <article className="max-w-full border-b border-b-gray-100 pb-(--space-sm) lg:pb-(--space-md)">
        {children}
      </article>
    </section>
  );
}