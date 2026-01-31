import { tv, type VariantProps } from "tailwind-variants";
import { CircleDashed, LoaderCircle, CircleCheck } from "lucide-react";

const badge = tv({
  base: "inline-flex flex-none items-center gap-1 justify-center rounded-full text-wrap [&_svg]:hidden leading-none",
  variants: {
    type: {
      normal: "bg-(--default-badge)/15 text-(--default-badge)",
      list: "rounded-lg border border-(--border-default) font-semibold [&_svg]:w-5 [&_svg]:text-(--brand) gap-2",
      svg: "border border-(--border-default) [&_svg]:block",
    },
    size: {
      xs: "text-[10px] px-4 py-1.5",
      sm: "text-xs px-4.5 py-1.5",
      md: "text-xs md:text-sm px-5 py-2",
      lg: "text-sm px-5.5 py-2.5",
      xl: "text-sm px-6 py-3",
      listBase: "text-sm px-5 py-2"
    },
    color: {
      draft:      "bg-(--draft-badge)/15 text-(--draft-badge) font-bold [&_svg]:block ",
      progress:   "bg-(--progress-badge)/15 text-(--progress-badge) font-bold [&_svg]:block",
      completed:  "bg-(--completed-badge)/15 text-(--completed-badge) font-bold [&_svg]:block"
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
      return <CircleDashed size={17}/>
    } 
    else if (color === "progress"){
      return <LoaderCircle size={17}/>
    } 
    else if (color === "completed"){
      return <CircleCheck size={17}/>
    }
  };

  return <span className={badge({ size, type, className, color })}>
    {renderIcon()} {children}
  </span>;
}
