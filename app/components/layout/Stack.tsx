import { text } from "stream/consumers";

type StackProps = React.PropsWithChildren<{
    className?: string;
    direction?: "flex-row" | "flex-col";
    gap?: "xs" | "sm" | "md" | "lg" | "xl";
    align?: "items-start" | "items-center" | "items-end";
    textAlign?: "text-left" | "text-center" | "text-right"
}>

const gaps = {
    xs: "gap-xs",
    sm: "gap-sm",
    md: "gap-md",
    lg: "gap-lg",
    xl: "gap-xl",
}

export default function Stack({ 
    children, 
    className, 
    gap = "md", 
    direction = "flex-col", 
    align = "items-start",
    textAlign = "text-left"
}: StackProps){
    return (
        <div className={[className, gaps[gap], direction, align, textAlign, "flex"].join(" ")}>
            { children }
        </div>
    )
}