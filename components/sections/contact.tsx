"use client";

import { usePortfolioConfig } from "@/config";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import Card3D from "@/components/3d/Card3D";
import Scroll3DReveal from "@/components/3d/Scroll3DReveal";
import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";

interface ContactPayload {
    fullName: string;
    phone?: string;
    email: string;
    message?: string;
}

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Please enter your full name",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    phone: z.string().optional(),
    message: z.string().min(5, {
        message: "Please share a brief message",
    }),
});

export default function ContactSection() {
    const { section, submitContact, info } = usePortfolioConfig();
    const profile = info();
    const section_item = section()[5];
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            await submitContact(values as ContactPayload);
            form.reset();
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section>
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
                        Contact <span className="text-gradient">Me</span>
                    </h2>
                </div>
            </Scroll3DReveal>

            {/* Quick Contact Info Chips with RGB Running Border */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {profile.email && (
                    <Scroll3DReveal variant="cascade3D" delay={0.1}>
                        <Card3D rounded="rounded-2xl" innerRounded="rounded-[14.5px]">
                            <div className="p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div className="truncate">
                                    <p className="text-[11px] font-mono uppercase text-muted-foreground">Email</p>
                                    <p className="text-xs sm:text-sm font-semibold truncate">{profile.email}</p>
                                </div>
                            </div>
                        </Card3D>
                    </Scroll3DReveal>
                )}

                {profile.address && (
                    <Scroll3DReveal variant="cascade3D" delay={0.15}>
                        <Card3D rounded="rounded-2xl" innerRounded="rounded-[14.5px]">
                            <div className="p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-mono uppercase text-muted-foreground">Location</p>
                                    <p className="text-xs sm:text-sm font-semibold">{profile.address}</p>
                                </div>
                            </div>
                        </Card3D>
                    </Scroll3DReveal>
                )}
            </div>

            {/* Interactive Form Card with RGB Running Border */}
            <Scroll3DReveal variant="flipUp" delay={0.25}>
                <Card3D rounded="rounded-[32px]" innerRounded="rounded-[30.5px]">
                    <div className="p-6 sm:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your Name (*)"
                                                        {...field}
                                                        className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-6 focus-visible:ring-1 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-300 placeholder:text-muted-foreground shadow-sm"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="Your Email (*)"
                                                        {...field}
                                                        className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-6 focus-visible:ring-1 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-300 placeholder:text-muted-foreground shadow-sm"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Phone (optional)"
                                                    {...field}
                                                    className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-6 focus-visible:ring-1 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-300 placeholder:text-muted-foreground shadow-sm"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell me about your project or inquiry..."
                                                    {...field}
                                                    className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-5 focus-visible:ring-1 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-300 placeholder:text-muted-foreground shadow-sm min-h-[140px] resize-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-2xl px-10 py-6 text-base border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </Card3D>
            </Scroll3DReveal>
        </section>
    );
}
