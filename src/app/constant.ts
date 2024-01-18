import { SwiperOptions } from 'swiper';

export const config: SwiperOptions = {
    slidesPerView: 1,
    navigation: false,
    autoplay: { delay: 1500, disableOnInteraction: false },
    pagination: { 
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      type: 'bullets',
    }, 
    loop: true
  };