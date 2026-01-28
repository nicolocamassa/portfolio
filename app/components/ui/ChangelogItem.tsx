import { changelog } from "@/app/content/blog/demo-app";
import Badge from "./Badge";
import { ChevronDown } from "lucide-react";

type Props = {
  items: typeof changelog.items;
  openId: number | null;
  toggleItem: (id: number) => void;
}

export default function ChangelogItem({ items, openId, toggleItem }: Props) {
  return (
    <>
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isOpen = openId === item.id;

        return (
          <li
            className={`border-b border-b-(--border-default) last:border-b-0 
                        transition-colors duration-200 cursor-pointer hover:bg-gray-50`}
            key={idx}
            onClick={() => toggleItem(item.id)}
          >
            {/* Header: layout flessibile che passa da colonna (mobile) a riga (tablet) */}
            <div className="p-4 md:p-5 flex flex-col md:flex-row justify-between items-start gap-4">
                
                <div className="flex items-start gap-3 md:gap-4 flex-1 w-full">
                    {/* Icona */}
                    <div className="p-3 md:p-4 [&_svg]:text-(--brand) border border-(--border-default) rounded-full bg-white shrink-0">
                    <Icon size={18} className="md:w-5 md:h-5" />
                    </div>

                    {/* Titolo, descrizione, badges */}
                    <div className="leading-tight flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 md:mb-1">
                        <h4 className="font-semibold text-base md:text-lg truncate">{item.title}</h4>

                        <div className="flex gap-1 flex-wrap">
                        {item.badges.map((badge, idx) => (
                            <Badge key={idx} size="xs">
                            {badge}
                            </Badge>
                        ))}
                        </div>
                    </div>

                    <p className="text-(--text-secondary) w-full md:w-3/4 text-xs md:text-sm leading-relaxed">
                        {item.description}
                    </p>
                    </div>
                </div>

                {/* Colonna destra*/}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between self-stretch w-full md:w-auto mt-2 md:mt-0 pt-2 md:pt-0 border-t md:border-t-0 border-(--border-default)/30">
                    <div className="text-(--text-secondary)/50 text-[10px] md:text-xs font-medium whitespace-nowrap flex gap-1">
                    <span>{item.updates.length} attività</span>
                    <span>•</span>
                    <span>{item.meta.date}</span>
                    </div>

                    {item.updates.length ? (
                    <div className={`p-1 border border-(--border-default)/50 rounded-full transition-all duration-300 ${isOpen ? "bg-(--brand)/10 border-(--brand)/20" : ""}`}>
                        <ChevronDown
                        className={`text-(--text-secondary)/80 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        size={18}
                        />
                    </div>
                    ) : null}
                </div>
            </div>

            {/* Contenuto espandibile */}
            {item.updates.length ? (
              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="px-4 md:px-5 pb-5 pl-14 md:pl-22">
                    <ul className="w-full pt-2 border-l border-dashed border-l-(--border-default) text-(--text-secondary) flex flex-col items-start gap-3 md:gap-4 pl-3 md:pl-4">
                      {item.updates.map((update, idx) => (
                        <li key={idx} className="flex gap-2 items-center">
                          <Badge size="xs" className="shrink-0 mt-0.5">{update.label}</Badge>
                          <p className="text-xs md:text-sm font-medium">{update.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </li>
        );
      })}
    </>
  );
}