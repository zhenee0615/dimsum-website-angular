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
        inStock: 10,
        description: [
            {title: '', desc: 'Tender wrappers stuffed with premium chicken meat, simply deep fried to crispy golden brown perfection. Crispy and crunchy bring every bite irresistibly delicious.'},
            {title: 'Ingredients', desc: 'Chicken Meat, Veg.Meat, Potato Starch, Wheat Flour, Turnip Sweet, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost 20 mins, boil the water to 100⁰C steam not exceeding 5 mins.'}
        ],
        recipes: [
            {name: 'Traditional Siew Mai', path: 'assets/Images/traditionalSiewMai.png'},
            {name: 'Traditional Siew Mai', path: 'assets/Images/traditionalSiewMai.png'},
            {name: 'Traditional Siew Mai', path: 'assets/Images/traditionalSiewMai.png'},
            {name: 'Traditional Siew Mai', path: 'assets/Images/traditionalSiewMai.png'},
            {name: 'Traditional Siew Mai', path: 'assets/Images/traditionalSiewMai.png'},
            {name: 'Traditional Siew Mai', path: 'assets/Images/traditionalSiewMai.png'},
            {name: 'Traditional Siew Mai', path: 'assets/Images/traditionalSiewMai.png'},
        ], 
        nutritionalValue: [
            {name: 'Carbs', value: '3g'},
            {name: 'Protein', value: '1g'},
            {name: 'Dietary Fiber', value: '0g'},
            {name: 'Sodium', value: '97mg'},
            {name: 'Sugar', value: '2g'},
            {name: 'Potassium', value: '32mg'},
            {name: 'Fat', value: '4g'},
            {name: 'Cholesterol', value: '4mg'},
        ], 
        caloriesPerServings: 55
    },
    { 
        id: 2, 
        path: "assets/Images/FriedDumpling.png", 
        name: "HF19 Fried Dumpling/Dumpling Goreng", 
        price: 14.40, 
        discount: 0.45 ,
        'quantityPerPacket': 12, 
        additionalImagePath: [
            "assets/Images/FriedWanton1.jpg",
            "assets/Images/FriedWanton2.jpg",
            "assets/Images/FriedWanton3.jpg"
        ],
        sold: 1895,
        inStock: 10,
        description: [
            {title: '', desc: 'Tender wrappers stuffed with premium chicken meat, simply deep fried to crispy golden brown perfection. Crispy and crunchy bring every bite irresistibly delicious.'},
            {title: 'Ingredients', desc: 'Chicken Meat, Veg.Meat, Potato Starch, Wheat Flour, Turnip Sweet, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost 20 mins, boil the water to 100⁰C steam not exceeding 5 mins.'}
        ]
    },
    { 
        id: 3, 
        path: "assets/Images/YamPear.png", 
        name: "Yam Pear/Taro Buah Pir", 
        price: 18.00, 
        discount: 0.35,
        'quantityPerPacket': 12, 
        additionalImagePath: [
            "assets/Images/FriedWanton1.jpg",
            "assets/Images/FriedWanton2.jpg",
            "assets/Images/FriedWanton3.jpg"
        ],
        sold: 1895,
        inStock: 10,
        description: [
            {title: '', desc: 'Tender wrappers stuffed with premium chicken meat, simply deep fried to crispy golden brown perfection. Crispy and crunchy bring every bite irresistibly delicious.'},
            {title: 'Ingredients', desc: 'Chicken Meat, Veg.Meat, Potato Starch, Wheat Flour, Turnip Sweet, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost 20 mins, boil the water to 100⁰C steam not exceeding 5 mins.'}
        ]
    },
    { 
        id: 4, 
        path: "assets/Images/ChivesChickenRoll.png", 
        name: "Chives Chicken Roll/Gulung Ayam Kuchai", 
        price: 15.00, 
        discount: 0.5,
        'quantityPerPacket': 12, 
        additionalImagePath: [
            "assets/Images/FriedWanton1.jpg",
            "assets/Images/FriedWanton2.jpg",
            "assets/Images/FriedWanton3.jpg"
        ],
        sold: 1895,
        inStock: 10,
        description: [
            {title: '', desc: 'Tender wrappers stuffed with premium chicken meat, simply deep fried to crispy golden brown perfection. Crispy and crunchy bring every bite irresistibly delicious.'},
            {title: 'Ingredients', desc: 'Chicken Meat, Veg.Meat, Potato Starch, Wheat Flour, Turnip Sweet, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost 20 mins, boil the water to 100⁰C steam not exceeding 5 mins.'}
        ]
    },
    { 
        id: 5, 
        path: "assets/Images/cat_bao.png", 
        name: "HS2 BBQ Chicken Bao/Pau BBQ Ayam", 
        price: 13.20, 
        discount: 0.3,
        'quantityPerPacket': 12, 
        additionalImagePath: [
            "assets/Images/FriedWanton1.jpg",
            "assets/Images/FriedWanton2.jpg",
            "assets/Images/FriedWanton3.jpg"
        ],
        sold: 1895,
        inStock: 10,
        description: [
            {title: '', desc: 'Tender wrappers stuffed with premium chicken meat, simply deep fried to crispy golden brown perfection. Crispy and crunchy bring every bite irresistibly delicious.'},
            {title: 'Ingredients', desc: 'Chicken Meat, Veg.Meat, Potato Starch, Wheat Flour, Turnip Sweet, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost 20 mins, boil the water to 100⁰C steam not exceeding 5 mins.'}
        ]
    },
    { 
        id: 6, 
        path: "assets/Images/cat_frieddimsum.png", 
        name: "Beadcurd Chicken Slice Salted Egg Roll/ Tauhu Gulung Ayam dgn Telur Masin", 
        price: 20.00, 
        discount: 0.25,
        'quantityPerPacket': 12, 
        additionalImagePath: [
            "assets/Images/FriedWanton1.jpg",
            "assets/Images/FriedWanton2.jpg",
            "assets/Images/FriedWanton3.jpg"
        ],
        sold: 1895,
        inStock: 10,
        description: [
            {title: '', desc: 'Tender wrappers stuffed with premium chicken meat, simply deep fried to crispy golden brown perfection. Crispy and crunchy bring every bite irresistibly delicious.'},
            {title: 'Ingredients', desc: 'Chicken Meat, Veg.Meat, Potato Starch, Wheat Flour, Turnip Sweet, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost 20 mins, boil the water to 100⁰C steam not exceeding 5 mins.'}
        ]
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
    { name: "sharing pinterest logo", path: "assets/Images/share_pinterest.png" }
];