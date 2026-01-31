"use client";

import dynamic from "next/dynamic";

/* Import dinamico e disabilita Server Side Rendering per far funzionare <CodeSnippet> => <CodeBlock> */
const CodeSnippet = dynamic(
  () => import("./CodeSnippet"),
  { ssr: false }
);

export default function CodeBlock({ text, language }: { text: string; language: string; }) {
  return (
    <div className="mt-(--space-sm)">
      <CodeSnippet text={text} language={language} />
    </div>
  );
}
