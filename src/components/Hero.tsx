import Box from "@/assets/box";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import JobSeekerIcon from "@/assets/jobSeekerIcon";
import HiringManager from "@/assets/hiringManager";
import { motion } from "motion/react";

import bolt from '@/assets/homepage/bolt.svg';

const searchList = [
    { href: '/jobs?query=ui-ux', label: 'UI/UX Design' },
    { href: '/jobs?query=content-writer', label: 'Content Writer' },
    { href: '/jobs?query=web-development', label: 'Web Development' },
    { href: '/jobs?query=mobile-development', label: 'Mobile Development' },
    { href: '/jobs?query=data-science', label: 'Data Science' },
    { href: '/jobs?query=digital-marketing', label: 'Digital Marketing' },
    { href: '/jobs?query=software-engineering', label: 'Software Engineering' },
    { href: '/jobs?query=project-management', label: 'Project Management' },
    { href: '/jobs?query=graphic-design', label: 'Graphic Design' },
    { href: '/jobs?query=video-editing', label: 'Video Editing' },
    { href: '/jobs?query=photography', label: 'Photography' },
    { href: '/jobs?query=seo-specialist', label: 'SEO Specialist' },
];

const Hero = ({ page = 'home' }: { page?: 'home' | 'services' | 'jobs' | 'about' }) => {

    const messages = {
        home: 'Discover Your Perfect Job Match and Connect with Top Employers Today!',
        jobs: 'Explore Diverse Job Opportunities and Find the Role That Suits You Best...',
        services: 'Browse Our Specialized Services Designed to Enhance Your Career Path',
        about: 'Connecting You with the Top 1% of Experts',
    };


    return (
        <motion.div
            className="overflow-hidden -top-4 relative">
            <div
                className={cn(
                    "absolute inset-0 z-10 w-full overflow-hidden sub-container top-0 left-0 right-0 bottom-0")}
            >
                <Box className={`w-full h-auto`} />
            </div>


            <div className={cn("container z-20 flex items-center justify-center")}>
                <div className="sub-container flex items-center justify-center rounded">
                    <div className="max-w-4xl w-full pb-5 pt-2 mx-auto flex flex-col">
                        <div className="text-center mb-">
                            {page === 'home' && (
                                <motion.span
                                    initial={{ scale: 0.1, opacity: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{
                                        x: [0, -20, 20, -20, 0],
                                        transition: {
                                            duration: 2,
                                            times: [0, 0.25, 0.5, 0.75, 1],
                                            ease: "linear"
                                        }
                                    }}
                                    transition={{ duration: 3.5, type: 'spring', stiffness: 50 }}
                                    className="inline-block w-fit px-4 lg:px-8 lg:mb-1 py-3 rounded-3xl bg-accent text-blue-900 text-sm"
                                >
                                    <img className="inline" src={bolt} alt="bolt" />
                                    <span className="px-3">Mobile app launching soon</span> 🚀
                                </motion.span>
                            )}
                        </div>
                        <h1 className={cn("text-lg md:text-3xl lg:text-5xl lg:leading-[75.4px] text-center font-normal lg:font-medium",
                            { 'text-3x': page !== 'home' }
                        )}>
                            {messages[page] || ''}
                        </h1>
                        <p className="mt-8 text-center text-xs md:text-2xl lg:text-3xl mb-16 font-medium text-gray-700">
                            {page === 'home' && (
                                <span>Explore Opportunities, Build Connections, and Advance Your Career'</span>
                            )}

                            {page === 'about' && (
                                <span>Empowering businesses with elite talent and unparalleled expertise to drive success.</span>
                            )}
                        </p>

                        <SearchBar />

                        {page === 'home' && (
                            <div className="flex-grow">
                                <ul className="w-full flex flex-wrap gap-2 md:gap-4 lg:gap-7 items-center justify-center py-4">
                                    {searchList.map(({ href, label }) => (
                                        <li key={href} className="flex justify-center">
                                            <Link
                                                className='text-xs sm:text-sm md:text-base lg:text-sm rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 bg-slate-200 hover:bg-green-400 hover:scale-110'
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
        </motion.div >
    );
}

export default Hero;
