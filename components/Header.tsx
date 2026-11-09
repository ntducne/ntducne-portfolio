"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { usePortfolioConfig } from "@/config";
import { AlignJustify, Sparkles } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { useState, useEffect } from "react";

export default function Header() {
    const { section, info } = usePortfolioConfig();
    const item = section();
    const profile = info();
    const sectionIds = item.map((val: any) => val.scroll);

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const { activeSection, scrollToElement } = useScrollSpy(sectionIds);

    if (!mounted) return null;

    return (
        <header className="flex w-full bg-white/70 dark:bg-black/50 backdrop-blur-xl border-b border-black/5 dark:border-white/10 text-sm py-3.5 sticky top-0 z-40 lg:hidden">
            <nav className="w-full px-5 flex items-center justify-between" aria-label="Mobile Navigation">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]" />
                    <span className="text-gradient">{profile.name}</span>
                </Link>

                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <Drawer>
                        <DrawerTrigger className="p-2 rounded-xl glass-card border border-white/10 text-foreground hover:text-emerald-400 transition-colors">
                            <AlignJustify size={20} />
                        </DrawerTrigger>
                        <DrawerContent className="glass-panel border-white/10 text-foreground">
                            <div className="p-4 text-center">
                                <h3 className="font-bold text-lg text-gradient">Navigation</h3>
                                <p className="text-xs text-muted-foreground mt-0.5">Jump to portfolio section</p>
                            </div>
                            <DrawerFooter className="px-6 pb-8 space-y-2">
                                {item.map((value: any, index: number) => {
                                    const isActive = activeSection === value.scroll;
                                    return (
                                        <DrawerClose key={index} asChild>
                                            <button
                                                className={`w-full flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-300 ${
                                                    isActive
                                                        ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-400 font-semibold"
                                                        : "glass-card border-white/5 text-muted-foreground hover:text-foreground"
                                                }`}
                                                onClick={() => scrollToElement(value.scroll)}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-emerald-400">{value.icon}</span>
                                                    <span className="text-base">{value.name}</span>
                                                </div>
                                                {isActive && (
                                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,1)]" />
                                                )}
                                            </button>
                                        </DrawerClose>
                                    );
                                })}
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </nav>
        </header>
    );
}
