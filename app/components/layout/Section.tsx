/* TODO: mettere React.PropsWithChildren a tutti i componenti */
type SectionProps = React.PropsWithChildren<{
    className?: string;
    size?: "sm" | "md" | "lg";
}>

const sizes = {
    sm: "section-sm",
    md: "section-md",
    lg: "section-lg"
}

export default function Section({ children, className, size = "md" }: SectionProps){
    return (
        <section className={`relative overflow-hidden ${className} ${sizes[size]}`}>
            { children }
        </section>
    )
}