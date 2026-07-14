"use client"

import { config } from "@/config";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    // FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea";
// import { useState } from "react";

interface Contact {
    fullName: string,
    phone?: string,
    email: string,
    budge?: string,
    message?: string
}

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Please enter your full name",
    }),
    email: z.string().min(10, {
        message: "Please enter your email",
    }),
    phone: z.string().optional(),
    budge: z.string().optional(),
    message: z.string().optional()
})

export default function Contact() {
    const { section, submitContact } = config();
    const section_item = section()[5];

    // const formatMoney = (money: number) => {
    //     return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        submitContact(values as Contact)
    }

    return (
        <section>
            <div className="border border-white/10 glass-card w-44 text-center rounded-full py-1.5 text-lg mb-8 flex justify-center items-center text-muted-foreground shadow-lg shadow-emerald-500/5 hover:border-emerald-500/30 transition-colors duration-300">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px] tracking-widest">{section_item.name}</small>
            </div>
            <div className="text-4xl md:text-5xl mt-5 mb-10">
                <p className="my-4 font-bold tracking-tight">Contact <span className="text-gradient">Me</span></p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-6">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Full Name (*)" {...field} className="bg-white/5 border border-white/10 rounded-xl px-5 py-6 focus-visible:ring-1 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-300 placeholder:text-muted-foreground text-lg shadow-sm" />
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
                                            <Input type="email" placeholder="Email (*)" {...field} className="bg-white/5 border border-white/10 rounded-xl px-5 py-6 focus-visible:ring-1 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-300 placeholder:text-muted-foreground text-lg shadow-sm" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Phone (optional)" {...field} className="bg-white/5 border border-white/10 rounded-xl px-5 py-6 focus-visible:ring-1 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-300 placeholder:text-muted-foreground text-lg shadow-sm" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                                <FormItem className="mt-6">
                                    <FormControl>
                                        <Textarea placeholder="Write your message ..." {...field} className="bg-white/5 border border-white/10 rounded-xl px-5 py-5 focus-visible:ring-1 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all duration-300 placeholder:text-muted-foreground text-lg shadow-sm min-h-[140px] resize-none" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                    <Button type="submit" className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-10 py-6 text-lg border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300">Submit Message</Button>
                </form>
            </Form>
        </section>
    )
}