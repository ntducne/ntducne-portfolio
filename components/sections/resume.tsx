import { config } from "@/config";
export default function Resume(props :any) {
    const { section, resume } = config();
    const item = resume();
    const section_item = section()[2];

    const calculateDuration = (timeString: string) => {
        try {
            const [startStr, endStr] = timeString.split(' - ');
            if (!startStr || !endStr) return '';

            const startDate = new Date(startStr);
            const endDate = endStr.toLowerCase() === 'present' ? new Date() : new Date(endStr);
            
            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return '';

            // Add 1 to include both start and end month in the duration
            let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
            
            if (totalMonths <= 0) return '';

            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;

            const yearStr = years > 0 ? `${years} ${years > 1 ? 'years' : 'year'}` : '';
            const monthStr = months > 0 ? `${months} ${months > 1 ? 'months' : 'month'}` : '';

            if (yearStr && monthStr) return ` (${yearStr} - ${monthStr})`;
            if (yearStr) return ` (${yearStr})`;
            if (monthStr) return ` (${monthStr})`;
            return '';
        } catch (e) {
            return '';
        }
    };

    const calculateTotalExperience = () => {
        try {
            const intervals = item
                .filter((val: any) => !val.title.toLowerCase().includes('education') && !val.title.toLowerCase().includes('edutcation'))
                .map((val: any) => {
                    const [startStr, endStr] = val.time.split(' - ');
                    const start = new Date(startStr).getTime();
                    const end = endStr.toLowerCase() === 'present' ? new Date().getTime() : new Date(endStr).getTime();
                    return { start, end };
                })
                .filter((interval: any) => !isNaN(interval.start) && !isNaN(interval.end))
                .sort((a: any, b: any) => a.start - b.start);

            if (intervals.length === 0) return '';

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
                totalMonths += (eDate.getFullYear() - sDate.getFullYear()) * 12 + (eDate.getMonth() - sDate.getMonth()) + 1;
            });

            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;

            const yearStr = years > 0 ? `${years} ${years > 1 ? 'years' : 'year'}` : '';
            const monthStr = months > 0 ? `${months} ${months > 1 ? 'months' : 'month'}` : '';

            if (yearStr && monthStr) return `${yearStr} and ${monthStr}`;
            if (yearStr) return yearStr;
            if (monthStr) return monthStr;
            return '';
        } catch (e) {
            return '';
        }
    };

    return (
        <section ref={props.section_3}>
            <div className="border border-white/10 glass-card w-44 text-center rounded-full py-1.5 text-lg mb-14 flex justify-center items-center text-muted-foreground shadow-lg shadow-emerald-500/5 hover:border-emerald-500/30 transition-colors duration-300">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px] tracking-widest">{section_item.name}</small>
            </div>
            <div className="text-4xl md:text-5xl mt-5 mb-10 flex flex-col items-start">
                <p className="my-4 font-bold tracking-tight">Education & <span className="text-gradient">Experience</span></p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-emerald-500/20 bg-emerald-500/5 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400">Total Experience: {calculateTotalExperience()}</span>
                </div>
            </div>
            <ol className="relative border-s border-white/10 ml-3">

                {
                    item.map((item: any, index: number) => (
                        <li key={index} className="mb-10 ms-8 group" data-aos="fade-up">
                            <div className="absolute w-4 h-4 bg-emerald-500/20 rounded-full mt-1.5 -start-2 border-2 border-emerald-500 group-hover:bg-emerald-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                            <time className="mb-1 text-sm font-semibold tracking-wider uppercase leading-none text-muted-foreground group-hover:text-emerald-400 transition-colors duration-300">
                                {item.time}
                                <span className="text-emerald-500/80 lowercase tracking-normal font-medium">{calculateDuration(item.time)}</span>
                            </time>
                            <h3 className="text-2xl font-bold mt-3 mb-3 group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h3>
                            <p className="text-lg font-normal text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </li>
                    ))
                }
            </ol>
        </section>
    )
}