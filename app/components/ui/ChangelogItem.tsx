import { changelog } from "@/app/content/blog/demo-app";
import Badge from "./Badge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
                            transition-colors duration-200 cursor-pointer hover:bg-gray-50 ${isOpen ? "" : ""}`}
                key={idx}
                onClick={() => toggleItem(item.id)}
            >
                {/* Riga intera */}
                <div className="p-5 flex justify-between items-start gap-4">

                    {/* ? ===================================== */}
                    {/* ? COLONNA SINISTRA                      */}
                    {/* ? ===================================== */}
                    <div className="flex items-start gap-4 flex-1">
                        {/* Icona */}
                        <div className="p-4 [&_svg]:text-(--brand) border border-(--border-default) rounded-full bg-white">
                            <Icon size={19} />
                        </div>

                        {/* Titolo, descrizione, badges */}
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

                    {/* ? ===================================== */}
                    {/* ? COLONNA DESTRA                        */}
                    {/* ? ===================================== */}
                    <div className="flex flex-col items-end justify-between self-stretch gap-4">
                        <div className="text-(--text-secondary)/50 text-xs font-medium whitespace-nowrap flex gap-1">
                            <span>{item.updates.length} attività</span>
                            <span>•</span>
                            <span>{item.meta.date}</span>
                        </div>

                        {item.updates.length ? 
                        <div className={`p-1 border border-(--border-default)/50 rounded-lg `}>
                            <ChevronDown
                                className={`text-(--text-secondary)/80 transition-all duration-300 ${isOpen ? "rotate-180" : null}`}
                                size={20}
                            />
                        </div> : null}
                </div>      
                </div>

                {/* ? ===================================== */}
                {/* ? CONTENUTO ITEM                        */}
                {/* ? ===================================== */}
                {item.updates.length ? 
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <ul className="overflow-hidden">
                        <div className="px-5 pb-5 pl-22"> 
                            <div className="w-full pt-2 border-l border-dashed border-l-(--border-default) text-(--text-secondary) font-normal flex flex-col items-start gap-4 font-bold opacity-90 pl-3">
                                {item.updates.map((update, idx) => {
                                    return (
                                        <li key={idx} className="flex gap-2 items-center">
                                            <Badge size="xs">{update.label}</Badge>
                                            <p className="text-sm">{update.text}</p>
                                        </li>
                                    )
                                })}
                            </div>
                        </div>
                    </ul>
                </div> : null}
            </li>
            );
        })}
        </>
    );
}
