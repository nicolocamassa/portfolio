type Content = {
  children: React.ReactNode;
  className?: string;
};


export default function HeroBanner(){
    return(
        <div className="-translate-y-6 sm:-translate-y-15 rounded-2xl bg-white p-4 sm:p-6 shadow-lg flex">
            <ContentBanner>
                <h2>Accesibilità</h2>
                <article>Progetto interfacce pensate per essere comprensibili e utilizzabili da chiunque, indipendentemente da abilità, contesto o dispositivo.</article>
            </ContentBanner>

            <ContentBanner className="border-x border-[var(--border-default)]">
                <h2>Design</h2>
                <article>Progetto interfacce pensate per essere comprensibili e utilizzabili da chiunque, indipendentemente da abilità, contesto o dispositivo.</article>
            </ContentBanner>

            <ContentBanner>
                <h2>Codice</h2>
                <article>Progetto interfacce pensate per essere comprensibili e utilizzabili da chiunque, indipendentemente da abilità, contesto o dispositivo.</article>
            </ContentBanner>
        </div>
    )
}

export function ContentBanner({ children, className }: Content){
    return(
         <div className={`w-full p-10 px-30 flex flex-col items-center justify-center text-center [&_h2]:font-black [&_h2]:text-xl ${className ?? ""}`}>{ children }</div>
    )
}