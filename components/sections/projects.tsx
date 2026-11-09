"use client";

import { useState } from "react";
import { usePortfolioConfig } from "@/config";
import Image from "next/image";
import Link from "next/link";
import Card3D from "@/components/3d/Card3D";
import Scroll3DReveal from "@/components/3d/Scroll3DReveal";
import { FolderKanban, ExternalLink, Github, Layers } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export default function Projects(props: any) {
    const { section, projects } = usePortfolioConfig();
    const item = projects();
    const section_item = section()[4];

    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    return (
        <section ref={props.section_5}>
            {/* Section Badge */}
            <Scroll3DReveal variant="flipUp" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-muted-foreground text-sm mb-6 shadow-lg shadow-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300">
                    <FolderKanban className="w-4 h-4 text-emerald-400" />
                    <span className="uppercase tracking-widest font-mono text-xs">{section_item.name}</span>
                </div>
            </Scroll3DReveal>

            {/* Headline with 3D Flip */}
            <Scroll3DReveal variant="tiltLeft" delay={0.1}>
                <div className="space-y-3 mb-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </div>
            </Scroll3DReveal>

            {/* Projects Grid with Staggered 3D Scroll Reveal and Deep Hover Tilt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {item.map((project: any, index: number) => {
                    const techList = Array.isArray(project.technology) ? project.technology : [];
                    const stagger = index % 2 === 0 ? 0.1 : 0.2;

                    return (
                        <Scroll3DReveal key={index} variant="cascade3D" delay={stagger}>
                            <Card3D className="h-full" rounded="rounded-[28px]" innerRounded="rounded-[26.5px]">
                                <div className="p-5 flex flex-col justify-between h-full group relative overflow-hidden">
                                    {/* Ambient Glow */}
                                    <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl -z-10 group-hover:bg-cyan-500/25 transition-all duration-500" />

                                    <div>
                                        {/* Project Preview Image */}
                                        <div
                                            className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/40 border border-white/5 cursor-pointer"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            <Image
                                                src={project.img}
                                                alt={project.name}
                                                width={700}
                                                height={450}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                            {/* Hover Hint */}
                                            <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono bg-black/70 backdrop-blur-md border border-white/15 text-white/90 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span>View Project</span>
                                            </div>
                                        </div>

                                        {/* Tech Tags with 3D Elevation */}
                                        <div className="flex flex-wrap gap-2 mt-5 mb-3 translate-z-20">
                                            {techList.slice(0, 4).map((tech: string, i: number) => (
                                                <span
                                                    key={i}
                                                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {techList.length > 4 && (
                                                <span className="text-[11px] font-mono px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                                                    +{techList.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        {/* Title & Description with 3D Depth */}
                                        <div className="translate-z-30">
                                            <h3
                                                onClick={() => setSelectedProject(project)}
                                                className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer mb-2"
                                            >
                                                {project.name}
                                            </h3>
                                            <p className="text-muted-foreground text-sm sm:text-base line-clamp-3 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons with 3D Depth */}
                                    <div className="flex items-center gap-3 pt-6 mt-4 border-t border-black/5 dark:border-white/5 translate-z-30">
                                        {project.website && (
                                            <Link
                                                href={project.website}
                                                target="_blank"
                                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-md shadow-emerald-500/20 hover:-translate-y-1 hover:scale-105"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                <span>Live Demo</span>
                                            </Link>
                                        )}

                                        {project.git && (
                                            <Link
                                                href={project.git}
                                                target="_blank"
                                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold glass-card border border-white/10 hover:border-emerald-500/40 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-1 hover:scale-105"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                <span>Source Code</span>
                                            </Link>
                                        )}

                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="ml-auto text-xs font-semibold text-emerald-400 hover:underline"
                                        >
                                            Details →
                                        </button>
                                    </div>
                                </div>
                            </Card3D>
                        </Scroll3DReveal>
                    );
                })}
            </div>

            {/* Quick View Dialog with 3D Depth */}
            {selectedProject && (
                <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
                    <DialogContent className="glass-panel border-white/15 max-w-2xl text-foreground rounded-3xl p-6 sm:p-8">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold tracking-tight text-gradient">
                                {selectedProject.name}
                            </DialogTitle>
                            <DialogDescription className="text-muted-foreground text-sm mt-1">
                                Project Overview & Architecture
                            </DialogDescription>
                        </DialogHeader>

                        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] my-4 bg-black/60 border border-white/10">
                            <Image
                                src={selectedProject.img}
                                alt={selectedProject.name}
                                width={800}
                                height={450}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>

                        <p className="text-muted-foreground text-base leading-relaxed mb-4">
                            {selectedProject.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-6">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Technologies Deployed</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technology?.map((tech: string, i: number) => (
                                    <span
                                        key={i}
                                        className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* External Links */}
                        <div className="flex items-center gap-3">
                            {selectedProject.website && (
                                <Link
                                    href={selectedProject.website}
                                    target="_blank"
                                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm flex items-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Visit Live Project</span>
                                </Link>
                            )}
                            {selectedProject.git && (
                                <Link
                                    href={selectedProject.git}
                                    target="_blank"
                                    className="px-5 py-2.5 rounded-xl glass-card border border-white/10 hover:border-emerald-500/40 text-sm font-semibold flex items-center gap-2"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>View GitHub Repo</span>
                                </Link>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </section>
    );
}
