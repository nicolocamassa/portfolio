import Stack from "../layout/Stack";
import Badge from "./Badge";
import { ScanEye, Layers2, Code } from "lucide-react";


type Content = React.PropsWithChildren<{
  className?: string;
}>;

export default function HeroBanner() {
  return (
    <>
      <ContentBanner>
        <Badge type="svg">
            <ScanEye size={20} strokeWidth={2.25} color="var(--brand)" />
        </Badge>
        <h3 className="font-semibold text-xl">Accessibilità</h3>
        <article>
          Progetto interfacce pensate per essere comprensibili e utilizzabili da chiunque,
          indipendentemente da abilità.
        </article>
      </ContentBanner>

      <ContentBanner>
        <Badge type="svg">
            <Layers2 size={20} strokeWidth={2.25} color="var(--brand)" />
        </Badge>
        <h3 className="font-semibold text-xl">Design</h3>
        <article>
          Progetto interfacce pensate per essere comprensibili e utilizzabili da chiunque,
          indipendentemente da abilità, contesto o dispositivo. 
        </article>
      </ContentBanner>

      <ContentBanner>
        <Badge type="svg">
            <Code size={20} strokeWidth={2.25} color="var(--brand)" />
        </Badge>
        <h3 className="font-semibold text-xl">Codice</h3>
        <article>
          Progetto interfacce pensate per essere comprensibili e utilizzabili da chiunque,
          indipe
        </article>
      </ContentBanner>
      </>
  );
}

export function ContentBanner({ children, className }: Content) {
  return (
    <Stack
      gap="xs"
      className={[
        "w-full md:w-1/3",
        "px-14 py-15 sm:px-10 sm:py-10 lg:px-18 lg:py-12",
        "items-center text-center",
        "[&_h3]:font-semibold [&_h3]:text-xl",
        "[&_article]:text-sm sm:[&_article]:text-base text-pretty",
        "[&_article]:text-(--text-secondary)",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </Stack>
  );
}
