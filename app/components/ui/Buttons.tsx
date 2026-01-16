import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center border border-[var(--border-default)] hover:cursor-pointer font-medium rounded-xl shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.15)] duration-300",
  variants: {
    color: {
      textOnly: "shadow-none hover:text-black text-[var(--text-secondary)]",
      black: "bg-[var(--btn-primary-bg)] text-[var(--text-inverse)] hover:bg-[var(--btn-primary-bg-hover)]",
      white: "bg-[var(--btn-secondary-bg)] text-[var(--text-primary)] hover:bg-[var(--btn-secondary-bg-hover)] hover:text-white",
      cta: "bg-[var(--btn-cta-bg)] hover:bg-[var(--btn-cta-bg-hover)] text-[var(--text-inverse)] border-none",
      whiteCta: "bg-[var(--background)] text-[var(--text-primary)] underline rounded-full gap-2 font-bold"
    },
    size: {
        xs: "text-xs px-4 py-2 sm:text-sm sm:px-5 sm:py-2.5",
        sm: "text-sm px-5 py-2.5 md:text-sm md:px-6 md:py-3",
        md: "text-sm px-6 py-3 md:text-base md:px-7 md:py-3.5",
        lg: "text-base px-7 py-3.5 lg:text-lg lg:px-8 lg:py-4",
        xl: "text-lg px-8 py-4 lg:text-xl lg:px-9 lg:py-4",
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
