"use client";

import dynamic from "next/dynamic";

const CodeSnippet = dynamic(
  () => import("@/app/components/ui/CodeSnippet"),
  { ssr: false }
);

export default function CodeBlock({
  text,
  language,
}: {
  text: string;
  language: string;
}) {
  return (
    <div className="mt-(--space-sm)">
      <CodeSnippet text={text} language={language} />
    </div>
  );
}
