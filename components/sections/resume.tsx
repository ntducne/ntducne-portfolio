"use client";

import { usePortfolioConfig } from "@/config";
import Card3D from "@/components/3d/Card3D";
import Scroll3DReveal from "@/components/3d/Scroll3DReveal";
import { Calendar, Clock, Award } from "lucide-react";

export default function Resume(props: any) {
    const { section, resume } = usePortfolioConfig();
    const item = resume();
    const section_item = section()[2];

    const calculateDuration = (timeString: string) => {
        try {
            const [startStr, endStr] = timeString.split(" - ");
            if (!startStr || !endStr) return "";

            const startDate = new Date(startStr);
            const endDate = endStr.toLowerCase() === "present" ? new Date() : new Date(endStr);

            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return "";

            const totalMonths =
                (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                (endDate.getMonth() - startDate.getMonth()) +
                1;

            if (totalMonths <= 0) return "";

            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;

            const yearStr = years > 0 ? `${years} ${years > 1 ? "years" : "year"}` : "";
            const monthStr = months > 0 ? `${months} ${months > 1 ? "months" : "month"}` : "";

            if (yearStr && monthStr) return ` (${yearStr} - ${monthStr})`;
            if (yearStr) return ` (${yearStr})`;
            if (monthStr) return ` (${monthStr})`;
            return "";
        } catch (e) {
            return "";
        }
    };

    const calculateTotalExperience = () => {
        try {
            const intervals = item
                .filter(
                    (val: any) =>
                        !val.title.toLowerCase().includes("education") &&
                        !val.title.toLowerCase().includes("edutcation") &&
                        !val.title.toLowerCase().includes("college")
                )
                .map((val: any) => {
                    const [startStr, endStr] = val.time.split(" - ");
                    const start = new Date(startStr).getTime();
                    const end = endStr.toLowerCase() === "present" ? new Date().getTime() : new Date(endStr).getTime();
                    return { start, end };
                })
                .filter((interval: any) => !isNaN(interval.start) && !isNaN(interval.end))
                .sort((a: any, b: any) => a.start - b.start);

            if (intervals.length === 0) return "";

            const merged = [intervals[0]];
            for (let i = 1; i < intervals.length; i++) {
                const current = intervals[i];
                const last = merged[merged.length - 1];
                if (current.start <= last.end) {
                    last.end = Math.max(last.end, current.end);
                } else {
                    merged.push(current);
                }
            }

            let totalMonths = 0;
            merged.forEach((interval: any) => {
                const sDate = new Date(interval.start);
                const eDate = new Date(interval.end);
                totalMonths +=
                    (eDate.getFullYear() - sDate.getFullYear()) * 12 +
                    (eDate.getMonth() - sDate.getMonth()) +
                    1;
            });

            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;

            const yearStr = years > 0 ? `${years} ${years > 1 ? "years" : "year"}` : "";
            const monthStr = months > 0 ? `${months} ${months > 1 ? "months" : "month"}` : "";

            if (yearStr && monthStr) return `${yearStr} and ${monthStr}`;
            if (yearStr) return yearStr;
            if (monthStr) return monthStr;
            return "";
        } catch (e) {
            return "";
        }
    };

    const totalExp = calculateTotalExperience();

    return (
        <section ref={props.section_3}>
            {/* Section Badge */}
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
                        Career Roadmap & <span className="text-gradient">Experience</span>
                    </h2>
                    {totalExp && (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs sm:text-sm font-mono font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span>Total Experience: {totalExp}</span>
                        </div>
                    )}
                </div>
            </Scroll3DReveal>

            {/* Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-10 before:absolute before:top-0 before:left-[-2px] before:w-[2px] before:h-full before:bg-gradient-to-b before:from-emerald-400 before:via-cyan-400 before:to-purple-500">
                {item.map((milestone: any, index: number) => {
                    const isEducation =
                        milestone.title.toLowerCase().includes("education") ||
                        milestone.title.toLowerCase().includes("college");

                    return (
                        <div key={index} className="relative group">
                            {/* Glowing Node */}
                            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-background border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.8)] group-hover:scale-125 transition-transform duration-300 z-10">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
                            </div>

                            {/* Milestone Card with RGB Running Border */}
                            <Scroll3DReveal variant="cascade3D" delay={0.1 + index * 0.1}>
                                <Card3D rounded="rounded-[28px]" innerRounded="rounded-[26.5px]">
                                    <div className="p-6 sm:p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -z-10 group-hover:bg-emerald-500/15 transition-all duration-500" />

                                        {/* Period & Tag */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{milestone.time}</span>
                                                <span className="text-muted-foreground font-normal lowercase">
                                                    {calculateDuration(milestone.time)}
                                                </span>
                                            </div>

                                            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground flex items-center gap-1">
                                                {isEducation ? <Award className="w-3 h-3 text-cyan-400" /> : <Clock className="w-3 h-3 text-emerald-400" />}
                                                <span>{isEducation ? "Education" : "Milestone"}</span>
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 group-hover:text-emerald-400 transition-colors">
                                            {milestone.title}
                                        </h3>

                                        {/* Description */}
                                        {milestone.description && (
                                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        )}
                                    </div>
                                </Card3D>
                            </Scroll3DReveal>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
