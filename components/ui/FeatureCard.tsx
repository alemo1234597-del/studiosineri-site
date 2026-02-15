import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
    return (
        <div className={cn(
            "group p-8 rounded-3xl bg-[#030816] border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,93,58,0.1)]",
            className
        )}>
            <div className="w-14 h-14 rounded-2xl bg-[#0f172a] border border-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(224,93,58,0.1)]">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
};
