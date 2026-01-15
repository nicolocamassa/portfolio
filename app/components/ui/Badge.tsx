import { tv, type VariantProps } from "tailwind-variants";

const badge = tv({
  base: "inline-flex items-center rounded-full bg-[var(--text-highlight-15)] text-[var(--text-highlight)] flex-none",
  variants: {
    size: {
      xs: "text-[10px] px-3 py-1 sm:text-xs sm:px-3.5 sm:py-1.5",
      sm: "text-xs px-3.5 py-1.5 md:text-sm md:px-4 md:py-2",
      md: "text-xs px-4 py-2 md:text-sm md:px-5 md:py-2.5",
      lg: "text-sm px-5 py-2.5 lg:text-sm lg:px-6 lg:py-3",
      xl: "text-sm px-6 py-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type BadgeVariants = VariantProps<typeof badge>;

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
} & BadgeVariants;

export default function Badge({ children, size }: BadgeProps) {
  return <span className={badge({ size })}>{children}</span>;
}