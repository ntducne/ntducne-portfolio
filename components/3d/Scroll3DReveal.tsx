"use client";

import React from "react";
import { motion, Variants, Transition } from "framer-motion";

interface Scroll3DRevealProps {
    children: React.ReactNode;
    className?: string;
    variant?: "flipUp" | "tiltLeft" | "tiltRight" | "zoom3D" | "cascade3D" | "cardCascade";
    delay?: number;
}

export default function Scroll3DReveal({
    children,
    className = "",
    variant = "flipUp",
    delay = 0,
}: Scroll3DRevealProps) {
    const smoothTransition: Transition = {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay,
    };

    const cascadeAnim: Variants = {
        hidden: {
            opacity: 0,
            y: 35,
            rotateX: 18,
            scale: 0.96,
            transformPerspective: 1000,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transformPerspective: 1000,
            transition: smoothTransition,
        },
    };

    const variantsMap: Record<string, Variants> = {
        flipUp: {
            hidden: {
                opacity: 0,
                rotateX: 20,
                y: 35,
                scale: 0.96,
                transformPerspective: 1000,
            },
            visible: {
                opacity: 1,
                rotateX: 0,
                y: 0,
                scale: 1,
                transformPerspective: 1000,
                transition: smoothTransition,
            },
        },
        tiltLeft: {
            hidden: {
                opacity: 0,
                rotateY: 18,
                x: -35,
                scale: 0.96,
                transformPerspective: 1000,
            },
            visible: {
                opacity: 1,
                rotateY: 0,
                x: 0,
                scale: 1,
                transformPerspective: 1000,
                transition: smoothTransition,
            },
        },
        tiltRight: {
            hidden: {
                opacity: 0,
                rotateY: -18,
                x: 35,
                scale: 0.96,
                transformPerspective: 1000,
            },
            visible: {
                opacity: 1,
                rotateY: 0,
                x: 0,
                scale: 1,
                transformPerspective: 1000,
                transition: smoothTransition,
            },
        },
        zoom3D: {
            hidden: {
                opacity: 0,
                scale: 0.9,
                rotateX: 12,
                transformPerspective: 1000,
            },
            visible: {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                transformPerspective: 1000,
                transition: smoothTransition,
            },
        },
        cascade3D: cascadeAnim,
        cardCascade: cascadeAnim,
    };

    const selectedVariant = variantsMap[variant] || variantsMap.flipUp;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            variants={selectedVariant}
            className={`preserve-3d will-change-transform ${className}`}
            style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
            }}
        >
            {children}
        </motion.div>
    );
}
