"use client";
import Image from "next/image";
import { CopyrightCircleOutlined, MailFilled } from "@ant-design/icons";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import Link from "next/link";

export default function UserInfo(props: any) {
    const date = new Date();
    const year = date.getFullYear()
    const { info } = config();
    const item = info();

    function createMailtoLink(to :string, subject :string = "", body :string = "", cc :string = "", bcc :string = "") {
        const params = [];
        if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
        if (body) params.push(`body=${encodeURIComponent(body)}`);
        if (cc) params.push(`cc=${encodeURIComponent(cc)}`);
        if (bcc) params.push(`bcc=${encodeURIComponent(bcc)}`);
        const queryString = params.length ? `?${params.join("&")}` : "";
        return `mailto:${to}${queryString}`;
    }

    const handleHireMe = () => {
        window.location.href = createMailtoLink(
            item.email,
            "Job Opportunity",
            "Hello, I would like to discuss a potential collaboration with you."
        );
    };

    return (
        <div className="py-10 rounded-[30px] px-8 w-full max-w-[400px] glass-card relative group mx-auto border border-white/10" ref={props.userInfo}>
            <div className="absolute inset-0 overflow-hidden rounded-[30px] -z-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>
            </div>
            
            <div className="flex flex-col items-start w-full mx-auto p-0 mt-2 mb-8 gap-2 text-left">
                <div className="font-bold text-4xl xl:text-5xl text-gradient tracking-tight">
                    {item.name}
                </div>
                <h4 className="text-base text-muted-foreground font-medium">
                    {item.major}
                </h4>
            </div>
            <div className="overflow-visible py-2 mb-8 w-full">
                <Image
                    src={item.img}
                    width={500}
                    height={500}
                    className="w-full rounded-3xl object-cover border border-white/10 shadow-2xl group-hover:scale-[1.03] transition-transform duration-500 aspect-square"
                    alt="Picture of the author"
                    priority
                    unoptimized
                />
            </div>
            <div className="pb-0 pt-2 text-left mb-8">
                <p className="text-sm mb-1 text-muted-foreground uppercase tracking-widest font-semibold">
                    Live in
                </p>
                <h4 className="text-xl font-semibold">{item.address}</h4>
            </div>
            <div className="mt-7 mb-8 flex items-center justify-center text-[12px] text-muted-foreground">
                <CopyrightCircleOutlined className="w-5 mr-1" />
                <div>{year} Duc. All Rights Reserved</div>
            </div>
            <div className="flex justify-center items-center mb-6 gap-2">
                {
                    item.social.map((value: any, index: number) => (
                        <Link target="_blank" href={value.link} key={index} className="bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 m-1 p-3 rounded-xl hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white dark:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/25">
                            {value.icon}
                        </Link>
                    ))
                }
            </div>
            <div className="text-center mb-6">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto px-8 rounded-full" onClick={handleHireMe}>
                    <MailFilled className="mr-2"/> Hire Me !
                </Button>
            </div>
        </div>
    );
}
