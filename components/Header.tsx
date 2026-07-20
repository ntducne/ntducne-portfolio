"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import { config } from "@/config";
import { AlignJustify } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { useState, useEffect } from "react";

export default function Header() {
    const { section } = config();
    const item = section();
    const sectionIds = item.map((val: any) => val.scroll);
    
    // We need to only render after mount to avoid hydration mismatch if scroll spy differs on server
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const { scrollToElement } = useScrollSpy(sectionIds);

    if (!mounted) return null; // Placeholder during SSR

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white/80 dark:bg-black/40 backdrop-blur-md border-b dark:border-white/10 text-sm py-4 sticky top-0 z-50 sm:hidden">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center justify-between">
            <Link href="https://ntducc.id.vn" className="flex-none text-xl font-semibold dark:text-white">
              Portfolio
            </Link>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Drawer>
                <DrawerTrigger className="dark:text-white">
                  <AlignJustify size={24} />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerFooter>
                    {
                      item.map((value: any, index: number) => (
                        <DrawerClose key={index}>
                          <div className="w-full grid grid-cols-2 py-3 border rounded-xl" onClick={() => scrollToElement(value.scroll)}>
                            <div className="flex justify-end items-center mr-6">
                            {value.icon}
                            </div>
                            <div className="text-left -ml-3">
                            {value.name}
                            </div>
                          </div>
                        </DrawerClose>
                      ))
                    }
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </nav>
      </header>
    );
}
