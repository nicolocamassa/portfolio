import { tv, type VariantProps } from "tailwind-variants";

const badge = tv({
  base: "inline-flex flex-none items-center justify-center rounded-full",
  variants: {
    type: {
      normal: "bg-[var(--text-highlight-15)] text-[var(--text-highlight)] mb-2 md:mb-5",
      svg: "border border-[var(--border-default)] bg-white text-[var(--text-primary)]",
    },
    size: {
      xs: "text-[10px] px-3 py-1",
      sm: "text-xs px-3.5 py-1.5",
      md: "text-xs px-4 py-2",
      lg: "text-sm px-5 py-2.5",
      xl: "text-sm px-6 py-3",
    },
  },
  compoundVariants: [
    { type: "svg", class: "rounded-2xl" },

  ],
  defaultVariants: {
    type: "normal",
    size: "md",
  },
});

type BadgeProps = { children: React.ReactNode; className?: string } & VariantProps<typeof badge>;

export default function Badge({ children, size, type, className }: BadgeProps) {
  return <span className={badge({ size, type, className })}>{children}</span>;
}
