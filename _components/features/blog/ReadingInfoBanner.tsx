
import { Badge } from "@/_components/ui";
import StackIcon from "tech-stack-icons"

export type InfoBanner = {
  time?: string | number;
  tech?: string[];
  date?: string;
  status?: string;
};

const InfoBlock = ({ label, children, className }: { label: string, children: React.ReactNode, className?: string }) => (
  <dl className={`flex flex-col gap-1 items-center text-center ${className}`}>
    <dt className="text-sm font-medium text-(--text-secondary) uppercase tracking-wide text-[0.8rem]">
      {label}
    </dt>
    <dd className="flex items-center justify-center mt-1">
      {children}
    </dd>
  </dl>
);

const VerticalDivider = () => (
  <div className="hidden md:block w-px h-10 bg-(--border-default) opacity-60"></div>
);

export default function ReadingInfoBanner({ content }: { content?: InfoBanner }) {
  const {
    time = "n/a",
    tech = [],
    date = new Date().toLocaleDateString(),
    status = "draft",
  } = content ?? {};

  /* Mappa colori status */
  const getBadgeColor = (status: string) => {
    switch (status) {
      case "completed": return "completed";
      case "progress": return "progress";
      default: return "draft";
    }
  };

  return (
    <div className="w-full py-8 md:pb-20">
      <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:flex md:items-center md:justify-between">
        
        <InfoBlock label="Tempo di lettura">
          <span className="font-sans font-bold text-xl md:text-2xl">{time}</span>
        </InfoBlock>

        <VerticalDivider />

        {/* Tech Stack */}
        <InfoBlock label="Tech Stack">
          <div className="flex -space-x-2 hover:space-x-1 transition-all duration-200">
            {tech.length > 0 ? (
              tech.map((t) => (
                <StackIcon 
                  key={t} 
                  name={t} 
                  className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-white shadow-sm ring-1 ring-gray-100" 
                />
              ))
            ) : (
              <span className="text-gray-400 text-sm">-</span>
            )}
          </div>
        </InfoBlock>

        <VerticalDivider />

        {/* Data */}
        <InfoBlock label="Data di inizio">
          <Badge className="font-semibold">{date}</Badge>
        </InfoBlock>

        <VerticalDivider />

        {/* Stato */}
        <InfoBlock label="Stato">
          <Badge color={getBadgeColor(status)}>
            {status}
          </Badge>
        </InfoBlock>

      </div>
      
      <div className="md:hidden mt-8 w-full h-px bg-(--border-default) opacity-50"></div>
    </div>
  );
}