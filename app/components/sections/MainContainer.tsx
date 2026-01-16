import { Children } from "react";

export default function MainContainer({ children, className = "" }: { children: React.ReactNode, className?: string}) {
    return (
        <div className={`max-w-[1600px] mx-auto px-3 md:px-5 ${className}
                        [&_h2]:text-4xl  [&_h2]:md:text-6xl 
                        [&_h2]:tracking-tight [&_h2]:text-balance 
                        [&_h2]:max-w-full [&_h2]:md:max-w-2/3 [&_h2]:font-sans [&_h2]:font-semibold`}>
            { children }
        </div>
    )
}

