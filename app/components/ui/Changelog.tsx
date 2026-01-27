import { Rocket, GitBranch, Bug, ChevronDown } from "lucide-react";
import Badge from "./Badge";


export default function RocketChangelog() {
    return (
        <div className="border border-(--border-default) rounded-xl mt-20">
            <div className="py-5 border-(--border-default) border-b px-5">
                <h3 className="font-bold text-xl">Project Rocket Updates</h3>
            </div>

            <ul className="px-5">
                <li className="border-b border-b-(--border-default) py-5 flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                        <div className="p-4 [&_svg]:text-(--brand) border border-(--border-default) rounded-full">
                            <Rocket size={19} />
                        </div>

                        <div className="leading-tight">
                            <div className="flex gap-2 items-center flex-wrap">
                                <h4 className="font-semibold text-lg">Launch prep automation</h4>
                                <div className="flex gap-1">
                                    <Badge size="xs" className="bg-(--info)/20 text-(--info)">Automation</Badge>
                                    <Badge size="xs" className="bg-(--tip)/20 text-(--tip)">Backend</Badge>
                                </div>
                            </div>
                            <p className="text-(--text-secondary) w-3/4">
                                Implementati script di deployment automatico per accelerare i lanci delle missioni senza errori manuali.
                            </p>
                        </div>
                    </div>
                    <span className="text-(--text-secondary) text-sm">27 Gen 2026</span>
                </li>

                <li className="border-b border-b-(--border-default) py-5 flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                        <div className="p-4 [&_svg]:text-(--brand) border border-(--border-default) rounded-full">
                            <GitBranch size={19} />
                        </div>

                        <div className="leading-tight">
                            <div className="flex gap-2 items-center flex-wrap">
                                <h4 className="font-semibold text-lg">Feature branching strategy</h4>
                                <div className="flex gap-1">
                                    <Badge size="xs" className="bg-(--brand-soft)/20 text-(--brand)">Git</Badge>
                                    <Badge size="xs" className="bg-(--info)/20 text-(--info)">DevOps</Badge>
                                </div>
                            </div>
                            <p className="text-(--text-secondary) w-3/4">
                                Introdotta strategia di branching avanzata per migliorare il workflow di sviluppo e ridurre conflitti.
                            </p>
                        </div>
                    </div>
                    <span className="text-(--text-secondary) text-sm">25 Gen 2026</span>
                </li>
                
                <li className="py-5 flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                        <div className="p-4 [&_svg]:text-(--brand) border border-(--border-default) rounded-full">
                            <Bug size={19} />
                        </div>

                        <div className="leading-tight">
                            <div className="flex gap-2 items-center flex-wrap">
                                <h4 className="font-semibold text-lg">Critical bug fixes</h4>
                                <div className="flex gap-1">
                                    <Badge size="xs" className="bg-(--warning)/20 text-(--warning)">Bugfix</Badge>
                                </div>
                            </div>
                            <p className="text-(--text-secondary) w-3/4">
                                Risolti bug critici nel modulo di navigazione della navicella, prevenendo crash durante le simulazioni di lancio.
                            </p>
                        </div>
                    </div>
                    <span className="text-(--text-secondary) text-sm">23 Gen 2026</span>
                </li>
            </ul>

                <div className="py-3 border-(--border-default) border-t px-5 flex justify-center gap-1 items-center bg-gray-100 rounded-b-xl text-black hover:bg-(--brand) hover:text-white hover:cursor-pointer transition duration-200">
                
                <h3 className="text-center font-semibold">Mostra tutto</h3>
                <ChevronDown size={20}/>
            </div>
        </div>
    );
}
