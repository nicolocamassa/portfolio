import { ReactElement } from 'react';
import { tv } from 'tailwind-variants';

const button = tv({
    base: 'text-sm hover:text-black hover:cursor-pointer text-[var(--text-secondary)]',
    variants: {
        color: {
            highlighted: 'bg-black text-white py-2 px-5 rounded rounded-xl font-extrabold'
        },
        size: {

        }
    }
})


type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({children, href}: ButtonProps){
    return <>
        <a
        className={button({color: 'highlighted'})}
        href={href}
        role="button"
        >{children}</a>
    </>
}

