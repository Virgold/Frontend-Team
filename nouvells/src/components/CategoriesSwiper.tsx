import { Dispatch, SetStateAction, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom';
import { JOB_CATEGORIES as CATEGORIES } from '@/constants';

import 'swiper/css';
import 'swiper/css/pagination';

import { Button } from './ui/button';

const CategoriesSwiper = ({ searchQuery }: { searchQuery?: string, setSearchQuery?: Dispatch<SetStateAction<string>> }) => {
    const swiperRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategoryClick = (categoryValue: string) => {
        searchParams.set('query', categoryValue.toLowerCase());
        setSearchParams(searchParams)
    };

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
                    {CATEGORIES.map((category) => (
                        <SwiperSlide
                            key={category}
                            className="!w-auto"
                        >
                            <Button
                                variant="ghost"
                                onClick={() => handleCategoryClick(category)}
                                className={cn(
                                    'rounded-full px-6 py-3 h-auto font-medium transition-all duration-200 whitespace-nowrap',
                                    {
                                        'bg-primary text-white hover:bg-primary/90': category.toLowerCase() === searchQuery,
                                        'bg-secondary text-gray-700 hover:bg-secondary/80 hover:text-primary': category.toLowerCase() !== searchQuery
                                    }
                                )}
                            >
                                {category}
                            </Button>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination mt-4 hidden lg:flex justify-center"></div>
            </nav>
        </div >
    );
};

export default CategoriesSwiper;
