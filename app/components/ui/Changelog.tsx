import { Rocket, GitBranch, Bug, ChevronDown } from "lucide-react";
import Badge from "./Badge";
import ChangelogItem from "./ChangelogItem";

const updates = [
  {
    id: 1,
    title: "Launch prep automation",
    icon: Rocket,
    badges: [
      { label: "Automation", color: "bg-(--info)/20 text-(--info)" },
      { label: "Backend", color: "bg-(--tip)/20 text-(--tip)" },
    ],
    description: "Implementati script di deployment automatico per accelerare i lanci delle missioni senza errori manuali.",
    meta: "6 attività • 27 Gen 2026",
  },
  {
    id: 2,
    title: "Feature branching strategy",
    icon: GitBranch,
    badges: [
      { label: "DevOps", color: "bg-(--info)/20 text-(--info)" },
    ],
    description: "Introdotta strategia di branching avanzata per migliorare il workflow di sviluppo e ridurre conflitti.",
    meta: "0 attività • 25 Gen 2026",
  },
  {
    id: 3,
    title: "Critical bug fixes",
    icon: Bug,
    badges: [
      { label: "Bugfix", color: "bg-(--warning)/20 text-(--warning)" },
    ],
    description: "Risolti bug critici nel modulo di navigazione della navicella, prevenendo crash durante le simulazioni di lancio.",
    meta: "7 attività • 23 Gen 2026",
  },
];

export default function RocketChangelog() {
  return (
    <div className="border border-(--border-default) rounded-xl mt-20 bg-white">
      <div className="py-5 border-(--border-default) border-b px-5">
        <h3 className="font-bold text-xl">Project Rocket Updates</h3>
      </div>

      <ul className="flex flex-col">
        <ChangelogItem></ChangelogItem>

        {updates.map((item) => {
          return (
            <li
            >
              <div className="p-5 flex justify-between items-start gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-4 [&_svg]:text-(--brand) border border-(--border-default) rounded-full bg-white">
                  </div>

                  <div className="leading-tight flex-1">
                    <div className="flex gap-2 items-center flex-wrap mb-1">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <div className="flex gap-1">
                        {item.badges.map((badge, idx) => (
                          <Badge key={idx} size="xs" className={badge.color}>
                            {badge.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-(--text-secondary) w-3/4 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between self-stretch gap-4">
                  <span className="text-(--text-secondary)/50 text-xs font-medium whitespace-nowrap">
                    {item.meta}
                  </span>
                  
                  
                  <div
                    className={`
                      p-1 border border-(--border-default)/50 rounded-lg 
                    `}
                  >
                    <ChevronDown className={`text-(--text-secondary)/80 transition-all duration-300`} size={20} />
                  </div>
                </div>
              </div>

              <div
                className={`
                  grid transition-[grid-template-rows] duration-300 ease-in-out
                `}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pl-[88px]"> 
                    <div className="w-full pt-2 border-l border-dashed border-l-(--border-default) text-(--text-secondary) font-normal flex flex-col items-start gap-4 font-bold opacity-90 pl-3">
                        <div className="flex gap-2 items-center">
                            <Badge size="xs">feat</Badge>
                            <p className="text-sm">Aggiunto l'header e la sua responsiveness</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Badge size="xs">fix</Badge>
                            <p className="text-sm">Fixati gli errori nella console</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Badge size="xs">feat</Badge>
                            <p className="text-sm">Aggiunto l'header e la sua responsiveness</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Badge size="xs">fix</Badge>
                            <p className="text-sm">Fixati gli errori nella console</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Badge size="xs">feat</Badge>
                            <p className="text-sm">Aggiunto l'header e la sua responsiveness</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Badge size="xs">fix</Badge>
                            <p className="text-sm">Fixati gli errori nella console</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="py-3 border-(--border-default) border-t px-5 flex justify-center gap-1 items-center bg-gray-50 rounded-b-xl text-(--text-secondary) hover:bg-(--brand) hover:text-white hover:cursor-pointer transition duration-200">
        <h3 className="text-center font-semibold text-sm">Mostra tutto</h3>
        <ChevronDown size={16} />
      </div>
    </div>
  );
}