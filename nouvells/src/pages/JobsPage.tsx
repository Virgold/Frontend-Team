import CategoriesSwiper from "@/components/CategoriesSwiper"
import Hero from "@/components/Hero"
import JobsLists from "@/components/JobsLists";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const JobsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query')?.toLowerCase();

    useEffect(() => {
        if (searchQuery) {
            searchParams.set('query', searchQuery);
            setSearchParams(searchParams);
        } else {
            console.log('no query');
        }
    }, [searchQuery, setSearchParams, searchParams]);

    return (
        <>
            <Hero page='jobs' />
            <CategoriesSwiper searchQuery={searchQuery} />

            <JobsLists searchQuery={searchQuery} />
        </>
    )
}

export default JobsPage
