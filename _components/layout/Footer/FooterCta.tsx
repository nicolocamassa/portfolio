import { SendHorizontal } from "lucide-react";

import { Stack, Container } from "@/_components/layout";
import { Button } from "@/_components/ui";

export default function FooterCTA() {
  return (
    <div className="w-full bg-foreground reveal text-white rounded-xl overflow-hidden py-12 md:py-18 shadow-[0_0px_54px_-12px_rgba(0,0,0,0.15)] z-0">
      <Container>
        {/* Gap icona top */}
        <Stack gap="lg" className="mx-auto text-center items-center justify-center">

          {/* Blocco testo (titolo + paragrafo) */}
          <Stack gap="sm" className="items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                          font-sans font-semibold tracking-tight text-pretty
                          w-full max-w-4xl leading-tight">
              Se il tuo progetto merita più di un bel layout, parliamone.
            </h2>

            <p className="text-base md:text-lg text-(--text-secondary-dark)
                          w-full max-w-xl px-2">
              Se stai lavorando a un progetto digitale e vuoi costruirlo con metodo e attenzione ai dettagli, scrivimi.
            </p>
          </Stack>

          <Button href="mailto:camassanicolo03@gmail.com" color="whiteCta">
            Contattami
            <SendHorizontal size={18} />
          </Button> 
        </Stack>
      </Container>
    </div>
  );
}
