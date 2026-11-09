"use client";

import { usePortfolioConfig } from "@/config";
import Image from "next/image";
import Card3D from "@/components/3d/Card3D";
import Scroll3DReveal from "@/components/3d/Scroll3DReveal";

export default function Skills(props: any) {
    const { section, skills } = usePortfolioConfig();
    const item = skills();
    const section_item = section()[3];

    return (
        <section ref={props.section_4}>
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
                        My <span className="text-gradient">Advantages</span>
                    </h2>
                </div>
            </Scroll3DReveal>

            {/* 3D Skills Grid with RGB Running Border on Hover */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {item.map((skill: any, index: number) => {
                    const staggerDelay = 0.05 * (index % 4);

                    return (
                        <Scroll3DReveal key={skill.name + index} variant="cascade3D" delay={staggerDelay}>
                            <Card3D className="h-full" rounded="rounded-3xl" innerRounded="rounded-[22.5px]">
                                <div className="p-6 flex flex-col items-center justify-center text-center h-full relative overflow-hidden group">
                                    {/* Ambient Glow */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl -z-10 group-hover:bg-emerald-500/25 transition-all duration-300" />

                                    {/* Icon */}
                                    <div className="w-20 h-20 relative flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                                            unoptimized
                                        />
                                    </div>

                                    {/* Skill Name */}
                                    <h4 className="text-base sm:text-lg font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
                                        {skill.name}
                                    </h4>
                                </div>
                            </Card3D>
                        </Scroll3DReveal>
                    );
                })}
            </div>
        </section>
    );
}
