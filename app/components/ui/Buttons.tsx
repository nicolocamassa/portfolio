import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center border border-[var(--border-default)] hover:cursor-pointer font-medium rounded-xl shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.15)] duration-300",
  variants: {
    color: {
      textOnly: "shadow-none hover:text-black text-[var(--text-secondary)]",
      black: "bg-[var(--btn-primary-bg)] text-[var(--text-inverse)] hover:bg-[var(--btn-primary-bg-hover)]",
      white: "bg-[var(--btn-secondary-bg)] text-[var(--text-primary)] hover:bg-[var(--btn-secondary-bg-hover)] hover:text-white",
      cta: "bg-[var(--btn-cta-bg)] hover:bg-[var(--btn-cta-bg-hover)] text-[var(--text-inverse)] border-none"
    },
    size: {
      xs: "text-xs px-3 py-1.5",
      sm: "text-sm px-4 py-2",
      md: "text-sm px-5 py-2.5",
      lg: "text-base px-6 py-3",
      xl: "text-lg px-7 py-3.5",
    },
  },
  defaultVariants: {
    color: "black",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
} & ButtonVariants;

export default function Button({ children, href, color, size, className }: ButtonProps) {
  return (
    <a className={button({ color, size, className })} href={href} role="button">
      {children}
    </a>
  );
}
