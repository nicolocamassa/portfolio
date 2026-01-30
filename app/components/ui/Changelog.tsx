"use client"
import { ChevronDown, Server, Database, Shield, Zap, Network, Cloud, type LucideIcon } from "lucide-react";
import { useState } from "react";
import ChangelogItem from "./ChangelogItem";

// Mappa delle icone 
const iconMap: Record<string, LucideIcon> = {
  "Server": Server,
  "Database": Database,
  "Shield": Shield,
  "Zap": Zap,
  "Network": Network,
  "Cloud": Cloud,
};

type ChangelogProps = {
  changelog: {
    items: Array<{
      id: number;
      title: string;
      icon: string;
      badges: string[];
      description: string;
      meta: { numActivity: number; date: string };
      updates: Array<{ label: string; text: string }>;
    }>;
  };
};

export default function Changelog({ changelog }: ChangelogProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
 
  const toggleItem = (id: number) => setOpenId(openId === id ? null : id);
  const toggleShowAll = () => setShowAll(!showAll);
 
  // Trasforma gli items mappando le stringhe icon ai componenti Lucide
  const itemsWithIcons = changelog.items.map(item => {
    const iconName = item.icon;
    const IconComponent = iconMap[iconName] || 
                          iconMap[iconName.charAt(0).toUpperCase() + iconName.slice(1)] || 
                          Server;
    return {
      ...item,
      icon: IconComponent
    };
  });

  const visibleItems = showAll ? itemsWithIcons : itemsWithIcons.slice(0, 3);

  return (
    <div className="border border-(--border-default) rounded-xl mt-20 bg-white">
      <div className="py-5 border-(--border-default) border-b px-5">
        <h3 className="font-bold text-xl">Project Updates</h3>
      </div>
      <ul className="flex flex-col">
        <ChangelogItem
          items={visibleItems}
          openId={openId}
          toggleItem={toggleItem}
        />
      </ul>
      {changelog.items.length > 3 && (
        <div
          className="py-3 border-(--border-default) border-t px-5 flex justify-center gap-1 items-center bg-gray-50 rounded-b-xl text-(--text-secondary) hover:bg-(--brand) hover:text-white hover:cursor-pointer transition duration-200"
          onClick={toggleShowAll}
        >
          <h3 className="text-center font-semibold text-sm">
            {showAll ? "Mostra meno" : "Mostra tutto"}
          </h3>
          <ChevronDown size={16} className={`${showAll ? "rotate-180" : ""} transition-all`} />
        </div>
      )}
    </div>
  );
}