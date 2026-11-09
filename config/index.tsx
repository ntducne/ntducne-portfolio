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

interface PortfolioData {
    profile: {
        name: string;
        email: string;
        address?: string;
        avatar_url?: string;
        about_text?: string;
        introduce?: {
            text_type?: string;
            major_line_1?: string;
            major_line_2?: string;
            text?: string;
            start_work_year?: number;
            projects_completed?: number;
            num_of_clients?: number;
        };
        social_links?: {
            name: string;
            link: string;
            icon_name: string;
            is_active?: boolean;
            order?: number;
        }[];
    } | null;
    resumes: { time_period: string; title: string; description?: string; order?: number }[];
    skills: { name: string; icon_url: string; animation?: string; order?: number }[];
    projects: {
        name: string;
        description?: string;
        image_url?: string;
        technology?: string[];
        website_link?: string;
        github_link?: string;
        order?: number;
    }[];
}

const fetchPortfolio = (url: string) => axios.get<PortfolioData>(url).then(res => res.data);

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

export const usePortfolioConfig = () => {
    const { toast } = useToast();
    const { data } = useSWR("/api/portfolio/all", fetchPortfolio);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const startWork = 2023;
    const yearOfExperience = currentYear - startWork;

    const section = () => {
        return [
            {
                name: "Introduce",
                icon: <Home className="w-4 h-4" />,
                scroll: 'introduce'
            },
            {
                name: "About",
                icon: <User className="w-4 h-4" />,
                scroll: 'about'
            },
            {
                name: "Resume",
                icon: <BriefcaseBusiness className="w-4 h-4" />,
                scroll: 'resume'
            },
            {
                name: "Skills",
                icon: <Dumbbell className="w-4 h-4" />,
                scroll: 'skill'
            },
            {
                name: "Projects",
                icon: <FolderKanban className="w-4 h-4" />,
                scroll: 'project'
            },
            {
                name: "Contact",
                icon: <Contact className="w-4 h-4" />,
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
            const social = Array.isArray(data.profile.social_links)
                ? data.profile.social_links
                    .filter((s) => s.is_active !== false)
                    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                    .map((s) => ({
                        name: s.name,
                        link: s.link,
                        open: true,
                        icon: getSocialIcon(s.icon_name || s.name),
                    }))
                : defaultSocial;

            return {
                name: data.profile.name || "Nguyen Duc",
                major: data.profile.introduce?.major_line_2 || "Software Engineer",
                img: data.profile.avatar_url || "/iconn.ico",
                email: data.profile.email || "nguyenduc10603@gmail.com",
                address: data.profile.address || "Hanoi, Vietnam",
                social,
            };
        }
        return {
            name: "Nguyen Duc",
            major: "Software Engineer",
            img: "/iconn.ico",
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
                project_completed: intro.projects_completed ?? 20,
                num_of_clients: intro.num_of_clients ?? 2
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
            return data.resumes.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).map((item) => ({
                time: item.time_period,
                title: item.title,
                description: item.description
            }));
        }
        return [];
    };

    const skills = () => {
        if (data?.skills && data.skills.length > 0) {
            return data.skills.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).map((item) => ({
                name: item.name,
                icon: item.icon_url,
                animation: item.animation || "fade-up"
            }));
        }
        return [];
    };

    const projects = () => {
        if (data?.projects && data.projects.length > 0) {
            return data.projects.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).map((item) => ({
                name: item.name,
                description: item.description,
                img: item.image_url || "/iconn.ico",
                technology: item.technology || [],
                website: item.website_link || "",
                git: item.github_link || "",
            }));
        }
        return [];
    };

    const submitContact = async ({ fullName, email, phone, message }: ContactData) => {
        try {
            await axios.post("/api/contact", { full_name: fullName, email, phone, message });
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
