import type { projectArticle } from "@/_content/projects/demo-app";


export function getFullText(blog: typeof projectArticle): string {
  let text = "";

  blog?.sections?.forEach(section => {
    section.blocks.forEach(block => {
      switch (block.type) {
        case "heading":
        case "paragraph":
          text += block.text + " ";
          break;

        case "callout":
          text += `${block.title ?? ""} ${block.text ?? ""} `;
          break;

        case "list":
          text += block.items.join(" ") + " ";
          break;
      }
    });
  });

  return text.trim();
}

export function calculateReadingTime(
  blog: typeof projectArticle,
  wpm = 200
): string {
  const words = getFullText(blog).split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wpm));
  return `${minutes} min`;
    
}
