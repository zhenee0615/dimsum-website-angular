import { SwiperOptions } from 'swiper';

export const bannerImages = [
    { id: 1, path: "assets/Images/cnyOfferBanner.jpg" },
    { id: 2, path: "assets/Images/dimsumBanner.jpg" },
    { id: 3, path: "assets/Images/freeshipping.png" }
];

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

export const weeklyFlashSaleImages = [
    { 
        id: 1, 
        path: "assets/Images/FriedWanton.png", 
        name: "HF22 Fried Wanton/Wantan Goreng", 
        price: 17.00, discount: 0.5, 
        'quantityPerPacket': 12, 
        additionalImagePath: [
            "assets/Images/FriedWanton1.jpg",
            "assets/Images/FriedWanton2.jpg",
            "assets/Images/FriedWanton3.jpg"
        ],
        sold: 1895,
        inStock: 10
    },
    { 
        id: 2, 
        path: "assets/Images/FriedDumpling.png", 
        name: "HF19 Fried Dumpling/Dumpling Goreng", 
        price: 14.40, 
        discount: 0.45 
    },
    { 
        id: 3, 
        path: "assets/Images/YamPear.png", 
        name: "Yam Pear/Taro Buah Pir", 
        price: 18.00, 
        discount: 0.35 },
    { 
        id: 4, 
        path: "assets/Images/ChivesChickenRoll.png", 
        name: "Chives Chicken Roll/Gulung Ayam Kuchai", 
        price: 15.00, 
        discount: 0.5 },
    { 
        id: 5, 
        path: "assets/Images/cat_bao.png", 
        name: "HS2 BBQ Chicken Bao/Pau BBQ Ayam", 
        price: 13.20, 
        discount: 0.3 },
    { 
        id: 6, 
        path: "assets/Images/cat_frieddimsum.png", 
        name: "Beadcurd Chicken Slice Salted Egg Roll/ Tauhu Gulung Ayam dgn Telur Masin", 
        price: 20.00, 
        discount: 0.25 
    }
];

export const weeklySalesSwiper: SwiperOptions = {
    slidesPerView: 4,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    loop: true
};

export const socialMediaImages = [
    { name: "sharing fb logo", path: "assets/Images/share_facebook.png" },
    { name: "sharing messenger logo", path: "assets/Images/share_messenger.png" },
    { name: "sharing twitter logo", path: "assets/Images/share_twitter.png" },
    { naem: "sharing pinterest logo", path: "assets/Images/share_pinterest.png" }
];