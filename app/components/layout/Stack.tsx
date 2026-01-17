/* TODO: sostituire con Stack della libreria Material UI [https://mui.com/material-ui/react-stack/]*/

type StackProps = React.PropsWithChildren<{
    className?: string;
    direction?: "flex-row" | "flex-col";
    gap?: "xs" | "sm" | "md" | "lg" | "xl";
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
}: StackProps){
    return (
        <div className={[className, gaps[gap], direction, "flex w-full"].join(" ")}>
            { children }
        </div>
    )
}