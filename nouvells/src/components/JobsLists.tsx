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
import { JOB_CATEGORIES as CATEGORIES } from '@/constants';
import useDisplayCount from '@/contexts/screenResize';


interface Location {
    type: string;
    timezone: string;
}

interface Job {
    id: string;
    title: string;
    company: string;
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

const JobCard = ({ job }: { job: Job }) => {
    return (
        <Card className="w-full max-w-sm flex-grow basis-[300px] outline-none border-none bg-secondary/100 rounded-3xl hover:shadow-lg transition-shadow">
            <img
                className="rounded-t-3xl w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt={`${job.company} job posting`}
            />
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


const JobsList = ({ categoryIndex = 0 }: { categoryIndex?: number }) => {
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
                const result = await getJobs(categoryIndex);
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
    }, [categoryIndex]);

    const handleLoadMore = () => {
        const increment = window.innerWidth >= 1024 ? 6 : 2;
        setDisplayCount(prevCount => prevCount + increment);
    };

    return (
        <section className="container">
            <h1 className="sub-container font-medium text-pretty text-3xl mb-8">
                {CATEGORIES[categoryIndex] || 'All Jobs'}
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
                            No jobs found for this category.
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
