type NavProps = React.PropsWithChildren<{
    href: string;
    className?: string;
}>

export default function NavItem({ children, href, className }: NavProps){
    return (
        <li>
            <a 
            href={href} 
            className={
                `hover:pointer 
                 hover:text-(--brand) 
                 duration-150 
                 text-(--text-secondary) 
                 ${className}`}
            >
                { children }
            </a>
        </li>
    )
}