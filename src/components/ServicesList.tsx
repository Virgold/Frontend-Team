import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";
import useDisplayCount from "@/contexts/screenResize";
import { getservices } from "@/actions/services.actions";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getColorFromString, getIconFromString } from "@/lib/utils";

export const ServiceIcon = ({ title, backgroundColor }: { title: string, backgroundColor: string }) => {
    const IconComponent = getIconFromString(title);

    return (
        <div className={`p-5 rounded-full ${backgroundColor}`}>
            <IconComponent className="w-8 h-8 text-white" />
        </div>
    )
};

const ServiceCard = ({ service }: { service: Service }) => {
    const backgroundColor = getColorFromString(service.title);
    return (
        <Card className={`w-full py-7 flex flex-col items-center justify-between max-w-sm flex-grow basis-[300px] outline-none border-none bg-secondary/100 rounded-3xl hover:shadow-lg transition-shadow ${backgroundColor} bg-opacity-5`}>
            <ServiceIcon title={service.title} backgroundColor={backgroundColor} />
            <CardHeader>
                <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg">{service.description}</p>
            </CardContent>
            <CardFooter>
                <Button
                    variant="ghost"
                    className="bg-background outline outline-1 hover:bg-primary/10"
                >
                    Learn More
                </Button>
            </CardFooter>
        </Card>
    )
}

const ServiceCardSkeleton = () => {
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


const ServicesList = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState<Service[] | null>([]);
    const [error, setError] = useState<string | null>(null);
    const [displayCount, setDisplayCount] = useDisplayCount();
    const hasMore = services ? services.length > displayCount : false;

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await getservices(0);
                setServices(result);
            } catch (e) {
                setError('Failed to fetch Services. Please try again later');
                setServices(null);
                console.log(e)
            } finally {
                setLoading(false);
            }
        }

        fetchServices();
    }, [])

    const handleLoadMore = () => {
        const increment = window.innerWidth >= 1024 ? 6 : 2;
        setDisplayCount(prevCount => prevCount + increment);
    };

    return (
        <section className="container">
            <div className="sub-container">
                {error && (
                    <div className="text-red-500 text-center py-4 bg-red-50 rounded-lg">
                        {error}
                    </div>
                )}

                <div className="flex flex-wrap justify-center gap-6">
                    {loading ? (
                        Array.from({ length: displayCount }).map((_, index) => (
                            <ServiceCardSkeleton key={index} />
                        ))
                    ) : services?.length ? (
                        services.slice(0, displayCount).map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 py-8">
                            No services at this time
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
    )
}

export default ServicesList
