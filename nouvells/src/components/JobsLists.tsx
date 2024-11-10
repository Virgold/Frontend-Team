import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getJobs } from '@/actions/jobs.actions';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import useDisplayCount from '@/contexts/screenResize';
import { capitalize } from '@/lib/utils';


interface Location {
    type: string;
    timezone: string;
}

interface Job {
    id: string;
    title: string;
    company: string;
    image: string;
    category: string;
    sub_category: string;
    budget: number;
    currency: string;
    description: string;
    requirements: string[];
    skills: string[];
    employment_type: string;
    location: Location;
    status: string;
    posted_date: string;
    application_deadline: string;
    applications_count: number;
}

const generatePastelColor = () => {
    const r = Math.floor(Math.random() * 128 + 127);
    const g = Math.floor(Math.random() * 128 + 127);
    const b = Math.floor(Math.random() * 128 + 127);
    return `rgb(${r}, ${g}, ${b})`;
};

const JobPlaceholderImage = ({ company }: { company: string }) => (
    <svg width="100%" viewBox="0 0 300 150" preserveAspectRatio="none" className="w-full">
        <path
            d="M 20 0
               H 280
               Q 300 0 300 20
               V 150
               H 0
               V 20
               Q 0 0 20 0
               Z"
            style={{ fill: generatePastelColor() }}
        />
        <text
            x="50%"
            y="50%"
            fontSize="36"
            fontWeight="bold"
            fill="#333"
            textAnchor="middle"
            alignmentBaseline="middle"
        >
            {company.toUpperCase()}
        </text>
    </svg>
);


const JobCard = ({ job }: { job: Job }) => {
    return (
        <Card className="w-full max-w-sm flex-grow basis-[300px] outline-none border-none bg-secondary/100 rounded-3xl hover:shadow-lg transition-shadow">
            {job.image ? (
                <img
                    className="rounded-t-3xl w-full h-48 object-cover"
                    src={job?.image}
                    alt={`${job.company} job posting`}
                />
            ) : (<JobPlaceholderImage company={job.company} />)}

            <CardHeader>
                <CardTitle className="text-xl line-clamp-2">
                    {job.title} at {job.company}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                    {job.description}
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center mt-auto">
                <p className='font-medium'>Budget: $<span>{job.budget.toLocaleString()}</span></p>
                <Button
                    variant="ghost"
                    className="bg-transparent outline outline-1 hover:bg-primary/10"
                >
                    Learn More
                </Button>
            </CardFooter>
        </Card>
    );
};


const JobCardSkeleton = () => {
    return (
        <Card className="w-full max-w-sm flex-grow basis-[300px] outline-none border-none bg-secondary/100 rounded-3xl">
            <Skeleton className="w-full h-48 rounded-t-3xl" />
            <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
            </CardHeader>
            <CardFooter className="flex justify-between items-center mt-auto">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-9 w-28" />
            </CardFooter>
        </Card>
    );
};


const JobsList = ({ searchQuery = 'all jobs' }: { searchQuery?: string }) => {
    const [jobs, setJobs] = useState<Job[] | null>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [displayCount, setDisplayCount] = useDisplayCount();

    const hasMore = jobs ? jobs.length > displayCount : false;

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await getJobs(searchQuery);
                setJobs(result as Job[]);
            } catch (e) {
                setError('Failed to fetch jobs. Please try again later.');
                setJobs(null);
                console.log(e)
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [searchQuery]);

    const handleLoadMore = () => {
        const increment = window.innerWidth >= 1024 ? 6 : 2;
        setDisplayCount(prevCount => prevCount + increment);
    };

    return (
        <section className="container">
            <h1 className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-pretty">
                <span className="text-gray-600 font-normal text-xl">
                    Showing results for:
                </span>
                <span className="text-3xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {capitalize(searchQuery) || 'All Jobs'}
                </span>
            </h1>

            <div className="sub-container">
                {error && (
                    <div className="text-red-500 text-center py-4 bg-red-50 rounded-lg">
                        {error}
                    </div>
                )}

                <div className="flex flex-wrap justify-center gap-6">
                    {loading ? (
                        Array.from({ length: displayCount }).map((_, index) => (
                            <JobCardSkeleton key={index} />
                        ))
                    ) : jobs?.length ? (
                        jobs.slice(0, displayCount).map(job => (
                            <JobCard key={job.id} job={job} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 py-8">
                            No jobs found for {searchQuery}.
                        </p>
                    )}
                </div>

                {hasMore && (
                    <div className="flex justify-center mt-8">
                        <Button
                            onClick={handleLoadMore}
                            className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90"
                            variant="outline"
                        >
                            Load More <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobsList;
