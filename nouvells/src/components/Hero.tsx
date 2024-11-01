import Box from "@/assets/box"
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import JobSeekerIcon from "@/assets/jobSeekerIcon";
import HiringManager from "@/assets/hiringManager";

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
    { href: '/jobs/graphic-design', label: 'Graphic Design' },
    { href: '/jobs/video-editing', label: 'Video Editing' },
    { href: '/jobs/photography', label: 'Photography' },
    { href: '/jobs/seo-specialist', label: 'SEO Specialist' },
];


const Hero = () => {
    return (
        <div className="w-full relative top-[-1rem]">
            <Box />
            <div className="w-full absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center rounded">
                <div className="w-4/5 min-h-[70%] py-5 mx-auto fle flex-col">
                    <div className="text-center mb-4">
                        <span className="px-8 py-3 rounded-3xl bg-red-300 text-sm">
                            Mobile app launching soon
                        </span>
                    </div>
                    <h1 className="text-5xl leading-[75.4px] text-center font-normal lg:font-medium">
                        Discover Your Perfect Job Match and Connect with Top Employers Today!
                    </h1>
                    <p className="mt-8 text-center text-2xl mb-16 font-medium text-gray-700">
                        Explore Opportunities, Build Connections, and Advance Your Career
                    </p>

                    <SearchBar />

                    <div className="flex-grow mt-4">
                        <ul className="flex flex-wrap gap-7 items-center justify-center p">
                            {searchList.map(({ href, label, active = false }) => (
                                <li key={href}>
                                    <NavLink
                                        className={cn(
                                            'text-sm rounded-3xl px-4 py-2 transition-colors duration-300',
                                            {
                                                'bg-green-400': active,
                                                'bg-gray-200 hover:bg-gray-300': !active,
                                            }
                                        )}
                                        to={href}
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <JobSeekerIcon className="w-28 absolute top-2/4 left-12" />
                <HiringManager className="w-40 absolute top-[15%] right-0" />
            </div>
        </div>
    );

}

export default Hero
