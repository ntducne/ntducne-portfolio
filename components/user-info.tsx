"use client";

import Image from "next/image";
import { CopyrightCircleOutlined } from "@ant-design/icons";
import { Button } from "@/components/ui/button";
import { usePortfolioConfig } from "@/config";
import Link from "next/link";
import Card3D from "@/components/3d/Card3D";
import { useState } from "react";
import { Check, Copy, Sparkles, MapPin, Send } from "lucide-react";

export default function UserInfo(props: any) {
    const date = new Date();
    const year = date.getFullYear();
    const { info } = usePortfolioConfig();
    const item = info();
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(item.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    function createMailtoLink(to: string, subject: string = "", body: string = "") {
        const params = [];
        if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
        if (body) params.push(`body=${encodeURIComponent(body)}`);
        const queryString = params.length ? `?${params.join("&")}` : "";
        return `mailto:${to}${queryString}`;
    }

    const handleHireMe = () => {
        window.location.href = createMailtoLink(
            item.email,
            "Collaboration / Job Opportunity",
            `Hello ${item.name}, I would like to discuss an exciting opportunity with you.`
        );
    };

    return (
        <Card3D className="w-full max-w-[420px] mx-auto" rounded="rounded-[32px]" innerRounded="rounded-[30.5px]">
            <div
                className="py-8 px-6 sm:px-8 w-full relative group overflow-hidden"
                ref={props.userInfo}
            >
                {/* 3D Ambient Hologram Lighting */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-700 -z-10" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-700 -z-10" />

                {/* Available for work badge */}
                <div className="flex items-center justify-between mb-6 translate-z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span>Available for work</span>
                    </div>
                </div>

                {/* Avatar with 3D depth pop-out */}
                <div className="relative mx-auto w-48 h-48 sm:w-52 sm:h-52 mb-6 flex items-center justify-center translate-z-30">
                    <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-[28px] overflow-hidden p-1 bg-gradient-to-tr from-emerald-500 via-cyan-500 to-purple-500 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full rounded-[26px] overflow-hidden bg-background">
                            <Image
                                src={item.img}
                                width={240}
                                height={240}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                alt={item.name}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Name & Major with 3D depth */}
                <div className="flex flex-col items-center text-center w-full mb-6 translate-z-30">
                    <h2 className="font-extrabold text-3xl sm:text-4xl text-gradient tracking-tight">
                        {item.name}
                    </h2>
                    <p className="text-sm font-semibold text-muted-foreground mt-1.5 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-cyan-400 inline" />
                        <span>{item.major}</span>
                    </p>
                </div>

                {/* Location & Quick Email Copy */}
                <div className="space-y-2 mb-6 text-sm translate-z-20">
                    <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/5 border border-white/5">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-emerald-400" /> Based in
                        </span>
                        <span className="font-medium">{item.address}</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/5 border border-white/5">
                        <span className="text-muted-foreground text-xs font-mono truncate max-w-[190px]">
                            {item.email}
                        </span>
                        <button
                            onClick={handleCopyEmail}
                            title="Copy email"
                            className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                        >
                            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                    </div>
                </div>

                {/* Social Links with 3D hover */}
                <div className="flex justify-center items-center gap-2 mb-6 translate-z-20">
                    {item.social.map((value: any, index: number) => (
                        <Link
                            target="_blank"
                            href={value.link}
                            key={index}
                            className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white dark:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center text-lg"
                        >
                            {value.icon}
                        </Link>
                    ))}
                </div>

                {/* 3D Action Buttons */}
                <div className="flex flex-col gap-3 translate-z-30">
                    <Button
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-6 rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-base"
                        onClick={handleHireMe}
                    >
                        <Send className="w-4 h-4" />
                        <span>Hire Me Directly</span>
                    </Button>
                </div>

                {/* Footer copyright */}
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-center text-[11px] text-muted-foreground tracking-wider uppercase">
                    <CopyrightCircleOutlined className="mr-1" />
                    <span>{year} {item.name}. 3D Portfolio</span>
                </div>
            </div>
        </Card3D>
    );
}
