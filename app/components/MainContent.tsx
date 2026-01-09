export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full px-0 md:px-8 lg:px-[64px]">
      <div className="w-full bg-green-400 h-[200vh]"> {/* * Colore layout, da rimuovere */}
        {children}
      </div>
    </main>
  );
}
