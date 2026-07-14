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
            <div className="border border-gray-500 w-44 text-center rounded-full py-1 text-lg mb-8 dark:text-white flex justify-center items-center">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px]">{section_item.name}</small>
            </div>
            <div className="text-5xl mt-5 mb-10 dark:text-white">
                <p className="my-4">Contact <span className="text-green-500 ">Me</span></p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 lg:mb-3">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel className="dark:text-white">Username</FormLabel> */}
                                        <FormControl>
                                            <Input placeholder="Full Name (*)" {...field} className="dark:bg-transparent dark:text-white dark:border-gray-600 animation duration-150" />
                                        </FormControl>
                                        <FormDescription>
                                            {/* This is your public display name. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel className="dark:text-white">Username</FormLabel> */}
                                        <FormControl>
                                            <Input type="email" placeholder="Email (*)" {...field} className="dark:bg-transparent dark:text-white dark:border-gray-600 animation duration-150" />
                                        </FormControl>
                                        <FormDescription>
                                            {/* This is your public display name. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel className="dark:text-white">Username</FormLabel> */}
                                        <FormControl>
                                            <Input placeholder="Phone (optional)" {...field} className="dark:bg-transparent dark:text-white dark:border-gray-600 animation duration-150" />
                                        </FormControl>
                                        <FormDescription>
                                            {/* This is your public display name. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel className="dark:text-white">Username</FormLabel> */}
                                    <FormControl>
                                        <Textarea placeholder="Write your message ..." {...field} className="dark:bg-transparent dark:text-white dark:border-gray-600 animation duration-150" />
                                    </FormControl>
                                    <FormDescription>
                                        {/* This is your public display name. */}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                    <Button type="submit" className="mt-3 dark:bg-transparent border border-gray-200 dark:border-gray-500">Submit</Button>
                </form>
            </Form>
        </section>
    )
}