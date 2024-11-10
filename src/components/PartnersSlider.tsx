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

const PARTNERS = [
    { src: ApplePay, alt: 'Apple Pay' },
    { src: Payoneer, alt: 'Payoneer' },
    { src: Amazon, alt: 'Amazon' },
    { src: GooglePay, alt: 'Google Pay' },
    { src: Visa, alt: 'Visa' },
    { src: Stripe, alt: 'Stripe' },
    { src: Mastercard, alt: 'Mastercard' }
]

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
            {PARTNERS.map((partner, index) => (
                <SwiperSlide key={index}>
                    <img src={partner.src} alt={partner.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PartnersSlider;
