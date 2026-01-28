"use client"

import { Rocket, GitBranch, Bug, ChevronDown } from "lucide-react";
import Badge from "./Badge";
import { useState } from "react";
import { changelog } from "@/app/content/blog/demo-app";
import ChangelogItem from "./ChangelogItem";

// Dati simulati per rendere il componente pulito
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
  // Stato per gestire l'indice dell'elemento aperto (null = tutti chiusi)
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border border-(--border-default) rounded-xl mt-20 bg-white">
      <div className="py-5 border-(--border-default) border-b px-5">
        <h3 className="font-bold text-xl">Project Rocket Updates</h3>
      </div>

      <ul className="flex flex-col">
        <ChangelogItem></ChangelogItem>
      </ul>

      <div className="py-3 border-(--border-default) border-t px-5 flex justify-center gap-1 items-center bg-gray-50 rounded-b-xl text-(--text-secondary) hover:bg-(--brand) hover:text-white hover:cursor-pointer transition duration-200">
        <h3 className="text-center font-semibold text-sm">Mostra tutto</h3>
        <ChevronDown size={16} />
      </div>
    </div>
  );
}