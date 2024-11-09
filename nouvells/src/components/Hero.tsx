import Box from "@/assets/box";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import JobSeekerIcon from "@/assets/jobSeekerIcon";
import HiringManager from "@/assets/hiringManager";

import bolt from '@/assets/homepage/bolt.svg';

const searchList = [
    { href: '/jobs/uiux', label: 'UI/UX Design', active: 'true' },
    { href: '/jobs/content-writers', label: 'Content Writer' },
    { href: '/jobs/web-development', label: 'Web Development' },
    { href: '/jobs/mobile-development', label: 'Mobile Development' },
    { href: '/jobs/data-science', label: 'Data Science' },
    { href: '/jobs/digital-marketing', label: 'Digital Marketing' },
    { href: '/jobs/software-engineering', label: 'Software Engineering' },
    { href: '/jobs/project-management', label: 'Project Management' },
    { href: '/jobs/graphic-design', label: 'Graphic Design' },
    { href: '/jobs/video-editing', label: 'Video Editing' },
    { href: '/jobs/photography', label: 'Photography' },
    { href: '/jobs/seo-specialist', label: 'SEO Specialist' },
];

const Hero = ({ page = 'home' }: { page?: 'home' | 'services' }) => {
    const messages = {
        home: 'Discover Your Perfect Job Match and Connect with Top Employers Today!',
        services: 'Browse Available Job Category...',
    };

    return (
        <div className="overflow-hidden -top-4 relative">
            <div
                className={cn(
                    "absolute inset-0 z-10 w-full overflow-hidden sub-container top-0 left-0 right-0 bottom-0")}
            >
                <Box className={`w-full h-auto`} />
            </div>


            <div className={cn("container z-20 flex items-center justify-center")}>
                <div className="sub-container flex items-center justify-center rounded">
                    <div className="max-w-4xl w-full py-5 mx-auto flex flex-col">
                        <div className="text-center mb-4">
                            {page === 'home' && (
                                <span className="w-full px-4 lg:px-8 lg:mb-16 py-3 rounded-3xl bg-accent text-[#002A64] text-sm">
                                    <img className="inline" src={bolt} alt="hhh" /> <span className="px-3">Mobile app launching soon</span> 🚀
                                </span>
                            )}
                        </div>
                        <h1 className={cn("text-lg md:text-3xl lg:text-5xl lg:leading-[75.4px] text-center font-normal lg:font-medium",
                            { 'text-3x': page !== 'home' }
                        )}>
                            {messages[page] || ''}
                        </h1>
                        <p className="mt-8 text-center text-xs md:text-2xl lg:text-3xl mb-16 font-medium text-gray-700">
                            {page === 'home' && (
                                'Explore Opportunities, Build Connections, and Advance Your Career'
                            )}
                        </p>

                        <SearchBar />

                        {page === 'home' && (
                            <div className="flex-grow">
                                <ul className="w-full flex flex-wrap gap-2 md:gap-4 lg:gap-7 items-center justify-center py-4">
                                    {searchList.map(({ href, label, active = false }) => (
                                        <li key={href} className="flex justify-center">
                                            <Link
                                                className={cn(
                                                    'text-xs sm:text-sm md:text-base lg:text-sm rounded-full px-3 py-1 md:px-4 md:py-2 transition-colors duration-300',
                                                    {
                                                        'bg-green-400': active,
                                                        'bg-gray-200 hover:bg-gray-300': !active,
                                                    }
                                                )}
                                                to={href}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                    <JobSeekerIcon className="hidden lg:block w-20 lg:w-28 absolute top-2/4 left-4 lg:left-12" />
                    <HiringManager className="hidden lg:block w-28 lg:w-40 absolute top-[15%] right-0" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
