'use client';

import { CodeBlock, a11yLight } from 'react-code-blocks';

export default function CodeSnippet({
  text,
  language = 'html',
  showLineNumbers = true,
}: {
  text: string;
  language?: string;
  showLineNumbers?: boolean;
}) {
  return (
    <CodeBlock
      text={text}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={a11yLight}
    />
  );
}
