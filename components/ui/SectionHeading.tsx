import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps {
    subtitle?: string;
    title: string;
    description?: string;
    className?: string;
    align?: "left" | "center" | "right";
}

export const SectionHeading = ({ subtitle, title, description, className, align = "left" }: SectionHeadingProps) => {
    const alignClass = {
        left: "text-left items-start",
        center: "text-center items-center mx-auto",
        right: "text-right items-end ml-auto"
    }[align];

    return (
        <div className={cn("flex flex-col gap-4 mb-12", alignClass, className)}>
            {subtitle && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-[0_0_15px_rgba(224,93,58,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">
                        {subtitle}
                    </span>
                </div>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};
