"use client";

import { usePortfolioConfig } from "@/config";
import Card3D from "@/components/3d/Card3D";
import Scroll3DReveal from "@/components/3d/Scroll3DReveal";

export default function About(props: any) {
    const { section, about } = usePortfolioConfig();
    const item = about();
    const section_item = section()[1];

    return (
        <section ref={props.section_2}>
            {/* Section Badge with 3D Reveal */}
            <Scroll3DReveal variant="flipUp" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-muted-foreground text-sm mb-6 shadow-lg shadow-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300">
                    {section_item.icon}
                    <span className="uppercase tracking-widest font-mono text-xs">{section_item.name}</span>
                </div>
            </Scroll3DReveal>

            {/* Headline with 3D Flip */}
            <Scroll3DReveal variant="tiltLeft" delay={0.1}>
                <div className="space-y-3 mb-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Every great design begins with
                    </h2>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        an even <span className="text-gradient">better story</span>
                    </h2>
                </div>
            </Scroll3DReveal>

            {/* Story Card with RGB Running Border */}
            {item && (
                <Scroll3DReveal variant="flipUp" delay={0.15}>
                    <Card3D className="w-full" rounded="rounded-[32px]" innerRounded="rounded-[30.5px]">
                        <div className="p-8 sm:p-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-emerald-500/20 transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-cyan-500/20 transition-all duration-500" />

                            <div className="text-muted-foreground text-lg sm:text-xl leading-relaxed whitespace-pre-line space-y-4 font-normal">
                                {item}
                            </div>
                        </div>
                    </Card3D>
                </Scroll3DReveal>
            )}
        </section>
    );
}
