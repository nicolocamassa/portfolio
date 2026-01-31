import { tv } from "tailwind-variants"
import { Stack } from "@/_components/layout";
import { Info, TriangleAlert, OctagonAlert, Lightbulb } from "lucide-react";

type CalloutProps = React.PropsWithChildren<{
    type: "danger" | "info" | "warning" | "tip";
    title?: string;
}>

const CalloutVariant = tv({
    base: "p-5 mt-5 rounded rounded-lg border [&>div]:p-0 [&>div]:mt-0 [&>div]:border-none [&>div]:bg-transparent",
    variants: {
        type: {
            warning: "bg-(--warning)/20 text-(--warning) border-(--warning)",
            danger: "bg-(--danger)/20 text-(--danger) border-red-300",
            info: "bg-(--info)/20 text-(--info) border-(--info)",
            tip: "bg-(--tip)/20 text-(--tip) border-(--tip)"
        }, 
    }
})

export function Callout({ children, type, title }: CalloutProps){
    return (
        <Stack direction="flex-row" gap="xs" className={`${CalloutVariant({ type })} items-start`}>

            {/* Scelta dell'icona all'interno del Callout */}
            <div className={CalloutVariant({ type })}>
                {type === "info" && <Info size={22} />}
                {type === "warning" && <OctagonAlert size={22} />}
                {type === "danger" && <TriangleAlert size={22} />}
                {type === "tip" && <Lightbulb size={22} />}
            </div>
            
            {/* * Contenuto Callout */}
            <div>
                {title ? <h3 className="font-bold">{title}</h3> : null}
                <p>{ children }</p>
            </div>

        </Stack>
       
    )
}