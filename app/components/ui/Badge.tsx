import { tv, type VariantProps } from "tailwind-variants";

const badge = tv({
  base: "inline-flex items-center rounded-full font-medium bg-[var(--text-highlight-15)] text-[var(--text-highlight)]",
  variants: {
    size: {
      xs: "text-xs px-2.5 py-1",
      sm: "text-sm px-3 py-1.5",
      md: "text-sm px-3.5 py-2",
      lg: "text-base px-4 py-2.5",
      xl: "text-lg px-5 py-3",
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