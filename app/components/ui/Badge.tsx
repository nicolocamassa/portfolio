import { tv, type VariantProps } from "tailwind-variants";
import { CircleDashed, LoaderCircle, CircleCheck } from "lucide-react";

const badge = tv({
  base: "inline-flex flex-none items-center gap-1 justify-center rounded-full text-wrap [&_svg]:hidden",
  variants: {
    type: {
      normal: "bg-[var(--text-highlight-15)] text-[var(--text-highlight)]",
      list: "rounded-lg border border-[var(--border-default)] font-semibold [&_svg]:w-5 [&_svg]:text-[var(--brand)] gap-2", /* TODO: Cambiare le dimensioni dei testi */
      svg: "border border-[var(--border-default)] text-[var(--text-primary)] [&_svg]:block",
    },
    size: {
      xs: "text-[10px] px-4 py-1",
      sm: "text-xs px-4.5 py-1.5",
      md: "text-xs md:text-sm px-5 py-2",
      lg: "text-sm px-5.5 py-2.5",
      xl: "text-sm px-6 py-3",
      listBase: "text-sm px-5 py-2"
    },
    color: {
      draft: "bg-gray-100 text-gray-700 font-bold [&_svg]:block leading-none py-2.5 px-2.5",
      progress: "bg-yellow-100 text-yellow-700 font-bold [&_svg]:block leading-none py-2.5 px-2.5",
      completed: "bg-green-100 text-green-700 font-bold [&_svg]:block leading-none py-2.5 px-2.5"
    }
  },
  compoundVariants: [
    { type: "svg", class: "rounded-2xl" },
  ],
  defaultVariants: {
    type: "normal",
    size: "md",
  },
});

export type BadgeProps = { children: React.ReactNode; className?: string } & VariantProps<typeof badge>;

export default function Badge({ children, size, type, className, color }: BadgeProps) {
  const renderIcon = () => {
    if (color === "draft"){
      return <CircleDashed className="self-center" size={17}/>
    } 
    else if (color === "progress"){
      return <LoaderCircle className="self-center" size={17}/>
    } 
    else if (color === "completed"){
      return <CircleCheck className="self-center" size={17}/>
    }
  };

  return <span className={badge({ size, type, className, color })}>
    {renderIcon()}{children}
  </span>;
}
