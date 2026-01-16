import { Signature, SendHorizontal } from "lucide-react";
import Button from "./Buttons";

export default function FooterCTA() {
  return (
    <div className="w-full bg-[var(--foreground)] text-white rounded-xl py-12 md:py-18 overflow-hidden">
      <div className="flex flex-col items-center justify-center px-10 md:px-8 text-center mx-auto max-w-screen-xl">
        
        {/* Icona */}
        <Signature className="bg-white text-[var(--text-primary)] w-10 h-10 p-2 rounded-xl mb-6 md:mb-8" />
        
        {/* Titolo Principale */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       font-sans font-semibold tracking-tight text-pretty
                       w-full max-w-4xl leading-tight md:leading-tight">
          Se il tuo progetto merita più di un bel layout, parliamone.
        </h2>
        
        {/* Paragrafo Descrittivo */}
        <p className="mt-5 md:mt-6 text-base md:text-lg 
                      text-[var(--text-secondary-dark)] 
                      w-full max-w-xl mx-auto px-2">
          Se stai lavorando a un progetto digitale e vuoi costruirlo con metodo e attenzione ai dettagli, scrivimi.
        </p>
        
        {/* Bottone */}
        <div className="mt-8 md:mt-10">
            <Button color="whiteCta">
                Contattami
                <SendHorizontal size={18} />
            </Button>
        </div>
      </div>
    </div>
  );
}