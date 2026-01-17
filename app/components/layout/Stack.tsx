
type StackProps = React.PropsWithChildren<{
    className?: string;
    direction?: "flex-row" | "flex-col";
    gap?: "xs" | "sm" | "md" | "lg" | "xl";
    align?: "items-start" | "items-center" | "items-end";
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
    align = "items-start" 
}: StackProps){
    return (
        <div className={[className, gaps[gap], direction, align].join(" ")}>
            { children }
        </div>
    )
}