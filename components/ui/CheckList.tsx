import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

interface CheckListProps {
    items: string[];
    className?: string;
}

export const CheckList = ({ items, className }: CheckListProps) => {
    return (
        <ul className={cn("space-y-4", className)}>
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-slate-300 text-base leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    );
};
