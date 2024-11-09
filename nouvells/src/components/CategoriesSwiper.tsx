import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom';
import { JOB_CATEGORIES as CATEGORIES } from '@/constants';

import 'swiper/css';
import 'swiper/css/pagination';

const CategoriesSwiper = ({ activeCategory, setActiveCategory }: { activeCategory: string; setActiveCategory: Dispatch<SetStateAction<string>> }) => {
    const swiperRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        // searchParams
    }, [])

    useEffect(() => {
        if (activeCategory) {
            searchParams.set('category', activeCategory.toLowerCase());
            setSearchParams(searchParams);
        }
    }, [activeCategory, searchParams, setSearchParams]);

    const handleJobsCategory = (e: { target: { innerText: SetStateAction<string>; }; }) => {
        setActiveCategory(e.target.innerText);
    }

    return (
        <div className="container bg-re-500">
            <nav className="sub-container bg-white py-4 lg:bg-transparent">
                <Swiper
                    ref={swiperRef}
                    slidesPerView="auto"
                    spaceBetween={24}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3
                    }}
                    modules={[Pagination]}
                    className="flex items-center justify-center"
                    breakpoints={{
                        '300': {
                            slidesPerView: 2,
                        },
                        '640': {
                            slidesPerView: 3,
                        },
                        '768': {
                            slidesPerView: 4,
                        },
                        '1024': {
                            slidesPerView: 5,
                        },
                        '1280': {
                            slidesPerView: 6,
                        },

                        '1536': {
                            slidesPerView: 7,
                        },
                    }}
                >
                    {CATEGORIES.map((category, index) => (
                        <SwiperSlide key={index} className={cn(`text-center rounded-full bg-blue-800 overflow-auto`, {
                            'bg-blue-700 text-white': index === 0,
                            'text-gray-700 bg-slate-300 hover:text-blue-700 transition-colors': index !== 0
                        })}>
                            {/* <a
                                href="#"
                                className={`inline-block whitespace-nowrap px-6 py-3`}
                            >
                                {category}
                            </a> */}
                            {/* <Link className={`inline-block whitespace-nowrap px-6 py-3`} to={page + '/' + category}>{category}</Link> */}
                            <button onClick={handleJobsCategory}>{category}</button>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination mt-4 hidden lg:flex justify-center"></div>
            </nav>
        </div >
    );
};

export default CategoriesSwiper;
