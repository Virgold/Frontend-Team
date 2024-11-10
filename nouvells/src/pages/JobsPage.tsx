import CategoriesSwiper from "@/components/CategoriesSwiper"
import Hero from "@/components/Hero"
import JobsLists from "@/components/JobsLists";

import { Search } from 'lucide-react';
import { useState } from "react";

const ServicesPage = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    // const [searchValue] = 

    return (
        <>
            <Hero page='jobs' />
            <CategoriesSwiper activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            {/* Second Search */}
            <div className="container">
                <div className="sub-container">
                    <div className="flex items-center gap-4 group border-2 focus-within:border-blue-500 focus-within:shadow-lg focus-within:bg-white rounded-l">
                        <Search />
                        <input
                            type="text"
                            name="search"
                            id="longerSearch"
                            placeholder="Job, Category, Keyword, Company..."
                            className="w-full py-2 focus:outline-none focus:border-primary"
                        />
                    </div>
                </div>
            </div>

            {/*  */}
            <JobsLists categoryIndex={activeCategory} />
        </>
    )
}

export default ServicesPage
