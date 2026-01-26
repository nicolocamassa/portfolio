import StackIcon from "tech-stack-icons"
import Badge from "./Badge"
import type { BlogPage } from "@/app/content/blogPages";
import { blogContent } from "@/app/content/blog/demo-app";

export type InfoBanner = {
  time?: string | number;
  tech?: string[];
  date?: string;
  status?: string;
}

export default function ReadingInfoBanner({ content }: { content?: InfoBanner }) {
const {
  time = "n/a",
  tech = ["react", "nextjs"],
  date = new Date().toLocaleDateString(),
  status = "in progress"
} = content ?? {};

  return (
    <div className="flex items-center justify-between pb-20">
      <div className="text-center flex flex-col gap-1">
        <h5 className="text-md text-(--text-secondary)">Tempo di lettura</h5>
        <span className="font-sans font-bold text-2xl">{time}</span>
      </div>

      <div className="w-px h-12 bg-gray-200"></div> 

      <div className="text-center flex flex-col gap-1">
        <h5 className="text-md text-(--text-secondary)">Tech Stack</h5>
        <div className="flex justify-center gap-2 mt-1">
          {tech.map((t) => (
            <StackIcon key={t} name={t} className="h-6 w-6 overflow-visible" />
          ))}
        </div>
      </div>

      <div className="w-px h-12 bg-gray-200"></div> 

      <div className="text-center flex flex-col gap-1">
        <h5 className="text-md text-(--text-secondary)">Data di inizio</h5>
        <Badge className="font-semibold">{date}</Badge>
      </div>

      <div className="w-px h-12 bg-gray-200"></div> 

      <div className="text-center flex flex-col gap-1">
        <h5 className="text-md text-(--text-secondary)">Stato</h5>
        <span className="text-2xl">
          <Badge color={status === "completed" ? "completed" : "draft"}>
            {status}
          </Badge>
        </span>
      </div>
    </div>
  );
}