import StackIcon from "tech-stack-icons"
import Badge from "./Badge"

export default function ReadingInfoBanner(){
    return (
        /* TODO: Il banner deve essere un componente a parte con padding e margin di default */
        <div className="flex items-center justify-between pb-20">
            <div className="text-center flex flex-col gap-1">
                <h5 className="text-md text-(--text-secondary)">Tempo di lettura</h5>
                <span className="font-sans font-bold text-2xl">5'</span>
            </div>

            <div className="w-px h-12 bg-gray-200"></div> 

            <div className="text-center flex flex-col gap-1">
                <h5 className="text-md text-(--text-secondary)">Tech Stack</h5>
                <div className="flex justify-center gap-2 mt-1">
                    <StackIcon name="react" className="h-6 w-6 overflow-visible" />
                    <StackIcon name="nextjs2" className="h-6 w-6 overflow-visible" />
                </div>
            </div>

            <div className="w-px h-12 bg-gray-200"></div> 

            <div className="text-center flex flex-col gap-1">
                <h5 className="text-md text-(--text-secondary)">Data di inizio</h5>
                <Badge className="font-semibold">26.01.2026</Badge>
            </div>

            <div className="w-px h-12 bg-gray-200"></div> 

            <div className="text-center flex flex-col gap-1">
                <h5 className="text-md text-(--text-secondary)">Stato</h5>
                <span className="text-2xl"><Badge color="completed">Completato</Badge></span>
            </div>
        </div>
    )
}