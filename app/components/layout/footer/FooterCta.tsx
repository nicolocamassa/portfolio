import { Signature, SendHorizontal } from "lucide-react";
import Button from "../../ui/Buttons";
import Stack from "../../layout/Stack";
import Container from "../../layout/Container";

export default function FooterCTA() {
  return (
    <div className="w-full bg-foreground text-white rounded-xl overflow-hidden py-12 md:py-18 shadow-[0_0px_54px_-12px_rgba(0,0,0,0.15)] z-0">
      <Container>
        {/* Gap icona top */}
        <Stack gap="lg" className="mx-auto text-center items-center justify-center">
          <Signature className="bg-white text-(--text-primary) w-10 h-10 p-2 rounded-xl" />

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

          {/* CTA */}
          <Button color="whiteCta">
            Contattami
            <SendHorizontal size={18} />
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
