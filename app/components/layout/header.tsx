import Button from "../ui/Buttons"

export default function Header(){
    return (
        <header className="w-full h-15 bg-amber-600 px-3 md:px-5">
            <div className="max-w-[1750px] h-full bg-amber-300 mx-auto flex items-center">
                <Button>Text</Button>
            </div>
        </header>
    )
}
