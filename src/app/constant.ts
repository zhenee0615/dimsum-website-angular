import { SwiperOptions } from 'swiper';

export const bannerSwiper: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    autoplay: { delay: 1500, disableOnInteraction: false },
    pagination: { 
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        type: 'bullets',
    }, 
    loop: true
};

export const weeklySalesSwiper: SwiperOptions = {
    slidesPerView: 4,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    loop: true
};