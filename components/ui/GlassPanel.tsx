import { cn } from "@/lib/utils";
import React from "react";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const GlassPanel = ({ children, className, ...props }: GlassPanelProps) => {
    return (
        <div
            className={cn(
                "glass-panel rounded-3xl p-8 border border-white/10 backdrop-blur-xl bg-[#020617]/80",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
