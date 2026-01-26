import { tv } from "tailwind-variants"
import Stack from "../layout/Stack";
import { Info, TriangleAlert, OctagonAlert, Lightbulb } from "lucide-react";


type CalloutProps = React.PropsWithChildren<{
    type: "danger" | "info" | "warning" | "tip";
    icon: "danger" | "info" | "warning" | "tip";
    title?: string;

}>

const CalloutVariant = tv({
    base: "p-5 mt-5",
    variants: {
        type: {
            warning: "bg-yellow-100 rounded rounded-lg text-(--text-secondary) border border-amber-300",
            danger: "bg-red-100 rounded rounded-lg text-red-500 border border-red-300",
            info: "bg-blue-100 rounded rounded-lg text-blue-500 border border-blue-300",
            tip: "bg-purple-100 rounded rounded-lg text-purple-500 border border-purple-300"
        }, 
    }
})

const IconVariant = tv({
    base: "",
    variants: {
        icon: {
            warning: "text-yellow-500",
            danger: "text-red-500",
            info: "text-blue-500",
            tip: "text-purple-500"
        }
    }
})

export default function Callout({ children, type, title, icon }: CalloutProps){
    return (
        <Stack direction="flex-row" gap="xs" className={`${CalloutVariant({ type })} items-start`}>
            <div className={IconVariant({ icon })}>
                {type === "info" && <Info size={22} />}
                {type === "warning" && <OctagonAlert size={22} />}
                {type === "danger" && <TriangleAlert size={22} />}
                {type === "tip" && <Lightbulb size={22} />}
                
            </div>
            
            <p>{ children }</p>

        </Stack>
       
    )
}