import NavItem from "./NavItem"

export default function Toc(){
    return (
        <nav className="sticky top-30 max-w-1/7 h-fit gap-4 flex flex-col">
            <h3 className="font-sans font-semibold text-sm text-nowrap">Su questa pagina</h3>

            <ul className="gap-4 flex flex-col text-nowrap text-sm">
                <NavItem href="#">Idee e Progettazione</NavItem>
                <NavItem href="#">Progettazione del design</NavItem>
                <NavItem href="#">I componenti principali</NavItem>
                <NavItem href="#">Scrittura del codice</NavItem>
            </ul>
        </nav>
    )
}