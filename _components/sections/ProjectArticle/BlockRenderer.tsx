import Markdown from "react-markdown";
import type { ContentBlock } from "@/_types/projectArticle";
import { Badge, Callout } from "@/_components/ui";
import { CodeBlock } from "@/_components/features/blog";


const Heading = ({ block }: { block: Extract<ContentBlock, { type: 'heading' }> }) => {
  const baseClass = "font-bold";
  
  if (block.level === 1) return <h2 id={block.id} className={`${baseClass} mt-(--space-xs) text-2xl md:text-4xl!`}>{block.text}</h2>;
  if (block.level === 2) return <h3 id={block.id} className={`${baseClass} mt-(--space-md) text-xl md:text-2xl -mb-1`}>{block.text}</h3>;
                     return <h4 id={block.id} className="text-lg md:text-xl font-semibold mt-(--space-sm) -mb-2">{block.text}</h4>;
};

const Paragraph = ({ block }: { block: Extract<ContentBlock, { type: 'paragraph' }> }) => {
  return <Markdown components={{ p: ({ children }) => (
            <p className="mt-(--space-xs) text-(--text-secondary) leading-relaxed [&_code]:text-red-600">
                {children}
            </p> )}}
         >
            {block.text}
        </Markdown>
};

const Image = ({ block }: { block: Extract<ContentBlock, { type: 'image' }> }) => {
    return <figure className="mt-(--space-md)">
                <img
                    className="w-full h-auto rounded-md border border-gray-100"
                    src={block.src}
                    alt={block.alt}
                />
                {block.caption && (
                    <figcaption className="text-sm text-(--text-secondary) mt-2 italic">
                    {block.caption}
                    </figcaption>
                )}
           </figure>
};

const List = ({ block }: { block: Extract<ContentBlock, { type: 'list'}> }) => {
    const LIST_STYLE = 'text-(--text-secondary) pl-8 mt-4 gap-xs flex flex-col'

    if (block.listType === "bullet") {
    return (
      <ul className={`${LIST_STYLE} list-disc`}>
        {block.items.map((item, idx) => <li key={idx}><Markdown>{item}</Markdown></li>)}
      </ul>
    );
  }

  if (block.listType === "numbered") {
    return (
      <ol className={`${LIST_STYLE} list-decimal pl-12`}>
        {block.items.map((item, idx) => <li key={idx}><Markdown>{item}</Markdown></li>)}
      </ol>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 mt-(--space-xs)">
      {block.items.map((item, idx) => (
        <Badge key={idx} type="list" size="listBase" className={`max-w-full truncate text-(--text-secondary)`}>
          <Markdown>{item}</Markdown>
        </Badge>
      ))}
    </div>
  );
};

const Code = ({ block }: { block: Extract<ContentBlock, { type: 'code'}> }) => {
    return <CodeBlock text={block.text} language={block.language} />;
}

const CalloutBlock = ({ block }: { block: Extract<ContentBlock, { type: 'callout'}> }) => {
    return <Callout key={block.title} type={block.variant} title={block.title}>{ block.text }</Callout>
}

/* ? ===============================
   ? RENDERING DEI BLOCCHI
   ? ===============================  */
export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading":   return <Heading key={idx} block={block}></Heading>
          case "paragraph": return <Paragraph key={idx} block={block}></Paragraph>
          case "image":     return <Image key={idx} block={block}></Image>
          case "list":      return <List key={idx} block={block}></List>
          case "code":      return <Code key={idx} block={block}></Code>
          case "callout":   return <CalloutBlock key={idx} block={block}></CalloutBlock>
          default:
            return null;
        }
      })}
    </>
  );
}