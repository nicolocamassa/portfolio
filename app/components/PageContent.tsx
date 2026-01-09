export default function PageContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1800px] mx-auto px-2 pb-10">
      <div className="bg-amber-300">
        {children}
      </div>
    </div>
  );
}
