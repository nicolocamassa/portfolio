import { changelog } from "@/app/content/blog/demo-app";
import Badge from "./Badge";
import { Icon, ChevronDown } from "lucide-react";

export default function ChangelogItem() {
  return (
    <>
      {changelog.items.map((item, idx) => {
        const Icon = item.icon;

        return (
          <li
            className="border-b border-b-(--border-default) last:border-b-0 
                                    transition-colors duration-200 cursor-pointer"
            key={idx}
          >
            <div className="p-5 flex justify-between items-start gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-4 [&_svg]:text-(--brand) border border-(--border-default) rounded-full bg-white">
                  <Icon size={19} />
                </div>

                <div className="leading-tight flex-1">
                  <div className="flex gap-2 items-center flex-wrap mb-1">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <div className="flex gap-1">
                      {item.badges.map((badge, idx) => (
                        <Badge key={idx} size="xs">
                          {badge}
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
                <div className="text-(--text-secondary)/50 text-xs font-medium whitespace-nowrap flex gap-1">
                  <span>{item.meta.numActivity} attività</span>
                  <span>•</span>
                  <span>{item.meta.date}</span>
                </div>

                <div className={`p-1 border border-(--border-default)/50 rounded-lg `}>
                  <ChevronDown
                    className={`text-(--text-secondary)/80 transition-all duration-300`}
                    size={20}
                  />
                  {/* ${isOpen ? "rotate-180" : "bg-transparent"} */}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
