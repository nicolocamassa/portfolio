
import { HeroSection } from "@/_components/sections";
import { ProjectArticle } from "@/_components/sections/ProjectArticle/ProjectArticle";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  let pageData;

  try {
    pageData = await import(`@/_content/projects/${slug}`);
  } catch {
    return <div>Articolo non trovato</div>;
  }
  
  const { heroSectionBlog } = pageData;

  return (
    <main>
      <HeroSection content={heroSectionBlog} slug={slug} />
      <ProjectArticle slug={slug}></ProjectArticle>
    </main>
  );
}


