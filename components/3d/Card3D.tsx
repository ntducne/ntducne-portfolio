"use client";

import React from "react";

interface Card3DProps {
    children: React.ReactNode;
    className?: string;
    rounded?: string;
    innerRounded?: string;
    intensity?: number;
    depth?: number;
    scale?: number;
    glare?: boolean;
    glowColor?: string;
    onClick?: () => void;
}

export default function Card3D({
    children,
    className = "",
    rounded = "rounded-[28px]",
    innerRounded = "rounded-[26.5px]",
    onClick,
}: Card3DProps) {
    return (
        <div
            onClick={onClick}
            className={`relative p-[1.5px] ${rounded} overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.45)] ${className}`}
            style={{ willChange: "transform" }}
        >
            {/* 1. Animated Running RGB Conic Gradient Beam */}
            <div
                className="pointer-events-none absolute -inset-[150%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-transform"
                style={{
                    background: "conic-gradient(from 0deg, #ff0055, #7a00ff, #00e5ff, #00ff66, #ffbe00, #ff0055)",
                    animation: "spin 3.2s linear infinite",
                }}
            />

            {/* 2. Soft Ambient RGB Glow Outward Behind Card */}
            <div
                className="pointer-events-none absolute -inset-[25%] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 will-change-transform"
                style={{
                    background: "conic-gradient(from 0deg, #ff0055, #7a00ff, #00e5ff, #00ff66, #ffbe00, #ff0055)",
                    animation: "spin 3.2s linear infinite",
                }}
            />

            {/* 3. Static subtle border line when not hovered */}
            <div
                className={`pointer-events-none absolute inset-0 ${rounded} border border-black/10 dark:border-white/10 group-hover:opacity-0 transition-opacity duration-300 z-10`}
            />

            {/* 4. Inner container that shields content from the RGB background */}
            <div
                className={`relative w-full h-full ${innerRounded} bg-white dark:bg-[#0c0d14]/95 backdrop-blur-md overflow-hidden z-20`}
            >
                {children}
            </div>
        </div>
    );
}
