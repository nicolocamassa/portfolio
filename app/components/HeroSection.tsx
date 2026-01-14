import MainContainer from "./MainContainer"

export default function HeroSection() {
  return (
    <section className="relative">
      <MainContainer>
        <p>Main</p>
      </MainContainer>

      <div
        className="relative mt-[150px] w-full bg-cover bg-center bg-amber-400 pb-10"
        style={{ backgroundImage: "url('/images/Mockup.png')" }}
      >
        {/* Spazio "fisico" per non far coprire il contenuto sotto dalla card */}
        <div className="h-16" />

        {/* Card che sbuca sopra */}
        <MainContainer className="absolute inset-x-0 -top-8 z-10">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p>Main Card</p>
          </div>
        </MainContainer>
      </div>
    </section>
  )
}
