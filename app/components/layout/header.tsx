import { LogoText } from "../SVG/Logo"

export default function Header(){
    return (
        <header className="w-full h-13 md:h-15 bg-amber-600 px-3 md:px-5 sticky top-0 z-999">
            <div className="max-w-[1750px] h-full bg-amber-300 mx-auto flex items-center justify-between">
                <div className="logoContainer flex items-center gap-2">
                    <LogoText></LogoText>
                </div>

                <nav className="text-xs md:text-sm flex items-center gap-2">
                    <a href="#test" className="hidden md:block">Contattami</a>
                    <a href="#test" className="bg-black px-3 py-2 text-white rounded-lg">Scarica CV</a>
                </nav>
                
            </div>
        </header>
    )
}
