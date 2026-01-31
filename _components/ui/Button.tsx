import { tv, type VariantProps } from "tailwind-variants";
import Link from "next/link";

const button = tv({
  base: "inline-flex items-center justify-center border border-(--border-default)"+
  " active:bg-(--brand-dark) active:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] hover:cursor-pointer font-medium rounded-xl shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.15)] duration-300 hover:shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.25)]",
  variants: {
    color: {
      textOnly: "shadow-none hover:text-black text-[var(--text-secondary)]",
      black: "bg-(--btn-primary-bg) text-(--text-inverse) hover:bg-(--btn-secondary-bg-hover)",
      white: "bg-(--btn-secondary-bg) text-(--text-primary) hover:bg-(--btn-secondary-bg-hover) hover:text-white",
      cta: "bg-(--brand) hover:bg-(--brand)/75 text-white",
      whiteCta: "bg-[var(--background)] text-[var(--text-primary)] hover:bg-gray-400 underline rounded-full gap-2 font-bold"
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

type ButtonProps = React.PropsWithChildren<{
  className?: string;
  href: string;
}> & ButtonVariants;

export function Button({ children, color, href, size, className }: ButtonProps) {
  return (
    <Link className={button({ color, size, className })} href={href} role="button">
      {children}
    </Link>
  );
}
