type SectionProps = React.PropsWithChildren<{
    className?: string;
    size?: "sm" | "md" | "lg";
    id?: string;
}>

const sizes = {
    sm: "section-sm",
    md: "section-md",
    lg: "section-lg"
}

export default function Section({ children, id, className, size = "md" }: SectionProps){
    return (
        <section className={`relative ${className} ${sizes[size]}`} id={id}>
            { children }
        </section>
    )
}