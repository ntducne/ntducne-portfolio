"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePortfolioConfig } from "@/config";
import { ModeToggle } from "./mode-toggle";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { useEffect, useState } from "react";

export default function RightSideBar() {
    const { section } = usePortfolioConfig();
    const item = section();
    const sectionIds = item.map((val: any) => val.scroll);

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const { activeSection, scrollToElement } = useScrollSpy(sectionIds);

    if (!mounted) return <div className="w-14 h-96" />;

    return (
        <nav
            aria-label="Section Navigation"
            className="glass-panel w-16 h-auto rounded-[32px] text-center flex flex-col items-center gap-y-7 py-7 shadow-2xl relative border border-white/10 before:absolute before:-inset-px before:bg-gradient-to-b before:from-emerald-500/30 before:via-cyan-500/20 before:to-transparent before:rounded-[32px] before:-z-10 group"
        >
            {item.map((value: any, index: number) => {
                const isActive = activeSection === value.scroll;
                return (
                    <TooltipProvider delayDuration={50} key={index}>
                        <Tooltip>
                            <TooltipTrigger
                                aria-label={value.name}
                                className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                                    isActive
                                        ? "bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/40 scale-110 -translate-x-1"
                                        : "text-muted-foreground hover:text-emerald-400 hover:bg-white/5 hover:scale-110 hover:-translate-x-0.5"
                                }`}
                                onClick={() => scrollToElement(value.scroll)}
                            >
                                {value.icon}
                                {isActive && (
                                    <span className="absolute -left-1 w-1.5 h-4 bg-emerald-400 rounded-r-full shadow-[0_0_8px_rgba(52,211,153,1)]" />
                                )}
                            </TooltipTrigger>
                            <TooltipContent
                                side="left"
                                className="glass-panel border-white/15 text-foreground shadow-2xl px-3 py-1.5 rounded-xl text-xs font-mono font-medium"
                            >
                                <p>{value.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            })}

            <div className="mt-2 pt-4 border-t border-black/10 dark:border-white/10 w-full flex justify-center">
                <ModeToggle />
            </div>
        </nav>
    );
}
