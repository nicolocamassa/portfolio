

export default async function BlogImage({ slug }: { slug: string }){
    let heroImage;

    try{
        heroImage = await import(`@/app/content/blog/${slug}`)
    } catch {
        return <span>immagine non trovata</span>
    }

    let { heroSectionBlog } = heroImage;
    
    return <div className="w-full h-full">
                <img src={heroSectionBlog?.image.src} className="h-full w-full object-cover" alt="" />
            </div>
}