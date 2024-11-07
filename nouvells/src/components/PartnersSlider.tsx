import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import ApplePay from '@/assets/homepage/partners/ApplePay.svg';
import Amazon from '@/assets/homepage/partners/Amazon.svg';
import GooglePay from '@/assets/homepage/partners/GooglePay.svg';
import Mastercard from '@/assets/homepage/partners/Mastercard.svg';
import Payoneer from '@/assets/homepage/partners/Payoneer.svg';
import Stripe from '@/assets/homepage/partners/Stripe.svg';
import Visa from '@/assets/homepage/partners/Visa.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const PartnersSlider = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={7}
            loop={true}
            // pagination={{
            //     clickable: true,
            //     dynamicBullets: true,
            //     dynamicMainBullets: 3,
            // }}

            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                320: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 6,
                },
            }}
            modules={[Pagination, Autoplay]}
        >
            <SwiperSlide className="partners-slider__slide swiper-no-margin-left">
                <img src={ApplePay} alt="Apple Pay" />
            </SwiperSlide>
            <SwiperSlide className="partners-slider__slide">
                <img src={Payoneer} alt="Payoneer" />
            </SwiperSlide>
            <SwiperSlide className="partners-slider__slide">
                <img src={Amazon} alt="Amazon" />
            </SwiperSlide>
            <SwiperSlide className="partners-slider__slide">
                <img src={GooglePay} alt="Google Pay" />
            </SwiperSlide>
            <SwiperSlide className="partners-slider__slide">
                <img src={Visa} alt="Visa" />
            </SwiperSlide>
            <SwiperSlide className="partners-slider__slide swiper-no-margin-righ">
                <img src={Stripe} alt="Stripe" />
            </SwiperSlide>
            <SwiperSlide className="partners-slider__slide">
                <img src={Mastercard} alt="Mastercard" />
            </SwiperSlide>
        </Swiper>
    );
};

export default PartnersSlider;
