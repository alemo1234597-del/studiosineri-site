import { cn } from "@/lib/utils";
import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const PrimaryButton = ({ children, className, ...props }: PrimaryButtonProps) => {
    return (
        <button
            className={cn(
                "bg-primary text-white text-lg font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#ff6b42] transition-colors shadow-[0_0_20px_rgba(224,93,58,0.4)]",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
