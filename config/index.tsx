"use client";
import { useToast } from "@/components/ui/use-toast";
import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled, TwitterOutlined, YoutubeFilled } from "@ant-design/icons";
import axios from "axios";
import { BriefcaseBusiness, Contact, Dumbbell, FolderKanban, Globe, Home, User } from "lucide-react";
import useSWR from "swr";

interface ContactData {
    fullName: string;
    email: string;
    phone?: string;
    message?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const getSocialIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
        case "facebook":
        case "facebookfilled":
            return <FacebookFilled />;
        case "instagram":
        case "instagramfilled":
            return <InstagramFilled />;
        case "github":
        case "githubfilled":
            return <GithubFilled />;
        case "linkedin":
        case "linkedinfilled":
            return <LinkedinFilled />;
        case "twitter":
        case "twitteroutlined":
            return <TwitterOutlined />;
        case "youtube":
        case "youtubefilled":
            return <YoutubeFilled />;
        default:
            return <Globe className="w-4 h-4" />;
    }
};

export const config = () => {
    const { toast } = useToast();
    const { data } = useSWR(`${API_BASE_URL}/portfolio/all`, fetcher);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const startWork = 2023;
    const yearOfExperience = currentYear - startWork;

    const section = () => {
        return [
            {
                name: "Introduce",
                icon: <Home />,
                scroll: 'introduce'
            },
            {
                name: "About",
                icon: <User />,
                scroll: 'about'
            },
            {
                name: "Resume",
                icon: <BriefcaseBusiness />,
                scroll: 'resume'
            },
            {
                name: "Skills",
                icon: <Dumbbell />,
                scroll: 'skill'
            },
            {
                name: "Projects",
                icon: <FolderKanban />,
                scroll: 'project'
            },
            {
                name: "Contact",
                icon: <Contact />,
                scroll: 'contact'
            }
        ];
    };

    const info = () => {
        const defaultSocial = [
            { name: "Facebook", link: "https://www.facebook.com/ntduc106", open: true, icon: <FacebookFilled /> },
            { name: "Instagram", link: "https://www.instagram.com/ntduc106", open: true, icon: <InstagramFilled /> },
            { name: "Github", link: "https://github.com/ntducne", open: true, icon: <GithubFilled /> },
        ];

        if (data?.profile) {
            const social = Array.isArray(data.profile.social_links) && data.profile.social_links.length > 0
                ? data.profile.social_links
                    .filter((s: any) => s.is_active !== false)
                    .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
                    .map((s: any) => ({
                        name: s.name,
                        link: s.link,
                        open: true,
                        icon: getSocialIcon(s.icon_name || s.name),
                    }))
                : defaultSocial;

            return {
                name: data.profile.name || "Nguyen Duc",
                major: data.profile.introduce?.major_line_2 || "Software Engineer",
                img: data.profile.avatar_url || "/img.jpg",
                email: data.profile.email || "nguyenduc10603@gmail.com",
                address: data.profile.address || "Hanoi, Vietnam",
                social,
            };
        }
        return {
            name: "Nguyen Duc",
            major: "Software Engineer",
            img: "/img.jpg",
            email: "nguyenduc10603@gmail.com",
            address: "Hanoi, Vietnam",
            social: defaultSocial,
        };
    };

    const introduce = () => {
        if (data?.profile?.introduce) {
            const intro = data.profile.introduce;
            return {
                textType: intro.text_type || data.profile.name || "Nguyen Duc",
                major: {
                    line_1: intro.major_line_1 || "Web Designer and Backend",
                    line_2: intro.major_line_2 || "Developer"
                },
                text: intro.text || "I design and code beautifully simple things and i love what i do. Just simple like that!",
                year_of_experience: currentYear - (intro.start_work_year || startWork),
                project_completed: intro.projects_completed || 20,
                num_of_clients: intro.num_of_clients || 2
            };
        }
        return {
            textType: "Nguyen Duc",
            major: {
                line_1: "Web Designer and Backend",
                line_2: "Developer"
            },
            text: "I design and code beautifully simple things and i love what i do. Just simple like that!",
            year_of_experience: yearOfExperience,
            project_completed: 20,
            num_of_clients: 2
        };
    };

    const about = () => {
        if (data?.profile?.about_text) return data.profile.about_text;
        return "";
    };

    const resume = () => {
        if (data?.resumes && data.resumes.length > 0) {
            return data.resumes.sort((a: any, b: any) => a.order - b.order).map((item: any) => ({
                time: item.time_period,
                title: item.title,
                description: item.description
            }));
        }
        return [];
    };

    const skills = () => {
        if (data?.skills && data.skills.length > 0) {
            return data.skills.sort((a: any, b: any) => a.order - b.order).map((item: any) => ({
                name: item.name,
                icon: item.icon_url,
                animation: item.animation || "fade-up"
            }));
        }
        return [];
    };

    const projects = () => {
        if (data?.projects && data.projects.length > 0) {
            return data.projects.sort((a: any, b: any) => a.order - b.order).map((item: any) => ({
                name: item.name,
                description: item.description,
                img: item.image_url || "/img.jpg",
                technology: item.technology || [],
                website: item.website_link || "",
                git: item.github_link || "",
            }));
        }
        return [];
    };

    const submitContact = async (data: ContactData) => {
        const baseApi = `${API_BASE_URL}/contact`;
        try {
            await axios.post(baseApi, data);
            toast({
                title: "Success !",
                description: "Message sent successfully !",
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error !",
                description: "Can't send message !",
            });
        }
    };

    return {
        section, info, introduce, about, resume, skills, projects, submitContact
    };
};