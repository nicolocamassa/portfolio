import { Children } from "react";

export default function MainContainer({ children, className = "" }: { children: React.ReactNode, className?: string}) {
    return (
        <div className={`max-w-[1600px] mx-auto px-3 md:px-5 bg-red-500 ${className}`}>
            { children }
        </div>
    )
}