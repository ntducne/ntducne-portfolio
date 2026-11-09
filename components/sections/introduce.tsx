"use client";

import { usePortfolioConfig } from "@/config";
import { ScheduleOutlined, CodeOutlined } from "@ant-design/icons";
import Card3D from "@/components/3d/Card3D";
import Scroll3DReveal from "@/components/3d/Scroll3DReveal";
import { ArrowRight } from "lucide-react";

export default function Introduce() {
    const { section, introduce } = usePortfolioConfig();
    const item = introduce();
    const section_item = section()[0];

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative">
            {/* Section Badge with 3D Scroll Reveal */}
            <Scroll3DReveal variant="flipUp" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-muted-foreground text-sm mb-6 shadow-lg shadow-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300">
                    {section_item.icon}
                    <span className="uppercase tracking-widest font-mono text-xs">{section_item.name}</span>
                </div>
            </Scroll3DReveal>

            {/* Interactive Hero Banner with RGB Running Border */}
            <Scroll3DReveal variant="flipUp" delay={0.1}>
                <Card3D className="mb-8 w-full" rounded="rounded-[32px]" innerRounded="rounded-[30.5px]">
                    <div className="p-6 sm:p-10 relative overflow-hidden group">
                        {/* Ambient Neon Backlight */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/25 transition-all duration-700" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl -z-10 group-hover:bg-cyan-500/25 transition-all duration-700" />

                        {/* Headings */}
                        <div className="space-y-3 mb-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                                Say Hi from <span className="text-gradient">{item.textType}</span>,
                            </h1>
                            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground/90">
                                {item.major.line_1} <span className="text-gradient-purple">{item.major.line_2}</span>
                            </p>
                        </div>

                        {/* Description directly from API */}
                        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                            {item.text}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => scrollTo("project")}
                                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                            >
                                <span>Explore Projects</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scrollTo("contact")}
                                className="px-6 py-3.5 rounded-2xl glass-card border border-white/10 hover:border-emerald-500/40 hover:text-emerald-400 font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
                            >
                                <span>Get in Touch</span>
                            </button>
                        </div>
                    </div>
                </Card3D>
            </Scroll3DReveal>

            {/* Stat Cards from API with RGB Running Border */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Scroll3DReveal variant="cascade3D" delay={0.15}>
                    <Card3D className="h-full">
                        <div className="p-6 relative overflow-hidden group h-full flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/15 rounded-full blur-2xl -z-10 group-hover:bg-emerald-500/30 transition-all duration-500" />
                            <div className="flex items-center justify-between mb-4">
                                <ScheduleOutlined className="text-4xl text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                    Experience
                                </span>
                            </div>
                            <div>
                                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                                    {item.year_of_experience}<span className="text-emerald-400">+</span>
                                </h3>
                                <p className="mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                    Years of Experience
                                </p>
                            </div>
                        </div>
                    </Card3D>
                </Scroll3DReveal>

                <Scroll3DReveal variant="cascade3D" delay={0.25}>
                    <Card3D className="h-full">
                        <div className="p-6 relative overflow-hidden group h-full flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/15 rounded-full blur-2xl -z-10 group-hover:bg-cyan-500/30 transition-all duration-500" />
                            <div className="flex items-center justify-between mb-4">
                                <CodeOutlined className="text-4xl text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                                    Projects
                                </span>
                            </div>
                            <div>
                                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                                    {item.project_completed}<span className="text-cyan-400">+</span>
                                </h3>
                                <p className="mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                    Projects completed on {item.num_of_clients} countries
                                </p>
                            </div>
                        </div>
                    </Card3D>
                </Scroll3DReveal>
            </div>
        </section>
    );
}
