import FooterCTA from "../ui/FooterCta"
import FooterNav from "../ui/FooterNav"

export default function Footer(){
    return (
        <footer className="w-full mb-10 px-3 md:px-5">
            <div className="max-w-[1750px] h-full mx-auto flex flex-col gap-3">
                <FooterCTA></FooterCTA>
                <FooterNav></FooterNav>
            </div>
        </footer>
    )
}
