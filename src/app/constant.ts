import { SwiperOptions } from 'swiper';

export const emailValidation = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com';

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
        'quantityPerPacket': 10, 
        additionalImagePath: [
            "assets/Images/FriedDumpling1.jpg",
            "assets/Images/FriedDumpling2.jpeg",
            "assets/Images/FriedDumpling3.jpg"
        ],
        sold: 638,
        inStock: 20,
        description: [
            {title: '', desc: 'Savor our Fried Dumplings, a perfect blend of minced pork and succulent shrimp in a crispy, golden wrapper. Each bite is a symphony of flavors, creating an irresistible snack that promises culinary excellence.'},
            {title: 'Ingredients', desc: 'Pork, Shrimp, Wheat Flour, Soy Sauce, Sesame Oil, Garlic, Ginger, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost for 20 minutes. Pan-fry in a lightly oiled skillet over medium heat until the dumplings are golden brown on each side. Serve with soy sauce and enjoy!'}
        ],
        nutritionalValue: [
            { "name": "Carbs", "value": "20g" },
            { "name": "Protein", "value": "5g" },
            { "name": "Dietary Fiber", "value": "8g" },
            { "name": "Sodium", "value": "150mg" },
            { "name": "Sugar", "value": "1g" },
            { "name": "Potassium", "value": "400mg" },
            { "name": "Fat", "value": "15g" },
            { "name": "Cholesterol", "value": "0mg" }
        ], 
        caloriesPerServings: 91
    },
    { 
        id: 3, 
        path: "assets/Images/YamPear.png", 
        name: "Yam Pear/Taro Buah Pir", 
        price: 18.00, 
        discount: 0.35,
        'quantityPerPacket': 6, 
        additionalImagePath: [
            "assets/Images/YamPear1.jpg",
            "assets/Images/YamPear2.jpg",
            "assets/Images/YamPear3.jpg"
        ],
        sold: 901,
        inStock: 5,
        description: [
            {title: '', desc: 'Yam Pear slices coated in a light and crispy batter, deep-fried to perfection. The result is a delightful snack with a perfect balance of sweetness and crunch.'},
            {title: 'Ingredients', desc: 'Yam Pear, Tempura Batter Mix, Cooking Oil, Salt, Pepper.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost for 20 minutes. Deep-fry the yam pear slices in hot oil (around 180°C) until they turn golden brown. Drain excess oil on paper towels. Serve hot and crispy.'}
        ],
        nutritionalValue: [
            { "name": "Carbs", "value": "30g" },
            { "name": "Protein", "value": "10g" },
            { "name": "Dietary Fiber", "value": "3g" },
            { "name": "Sodium", "value": "80mg" },
            { "name": "Sugar", "value": "15g" },
            { "name": "Potassium", "value": "250mg" },
            { "name": "Fat", "value": "5g" },
            { "name": "Cholesterol", "value": "2mg" }
        ], 
        caloriesPerServings: 37
    },
    { 
        id: 4, 
        path: "assets/Images/ChivesChickenRoll.png", 
        name: "Chives Chicken Roll/Gulung Ayam Kuchai", 
        price: 15.00, 
        discount: 0.5,
        'quantityPerPacket': 8, 
        additionalImagePath: [
            "assets/Images/ChivesChickenRoll1.jpg",
            "assets/Images/ChivesChickenRoll2.jpg",
            "assets/Images/ChivesChickenRoll3.jpg"
        ],
        sold: 1592,
        inStock: 2,
        description: [
            {title: '', desc: 'A savory roll of chives and tender chicken, wrapped in a thin layer of dough and deep-fried until golden brown. Each bite offers a burst of freshness from the chives and succulence from the chicken.'},
            {title: 'Ingredients', desc: 'Chicken, Chives, Wheat Flour, Sesame Oil, Soy Sauce, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost for 20 minutes. Steam the chives chicken rolls for about 10-15 minutes, or until the filling is heated through. Optionally, you can pan-fry the rolls for a crispy texture.'}
        ], 
        nutritionalValue: [
            { "name": "Carbs", "value": "6g" },
            { "name": "Protein", "value": "3g" },
            { "name": "Dietary Fiber", "value": "5g" },
            { "name": "Sodium", "value": "20mg" },
            { "name": "Sugar", "value": "2g" },
            { "name": "Potassium", "value": "180mg" },
            { "name": "Fat", "value": "1g" },
            { "name": "Cholesterol", "value": "0mg" }
        ], 
        caloriesPerServings: 67
    },
    { 
        id: 5, 
        path: "assets/Images/cat_bao.png", 
        name: "HS2 BBQ Chicken Bao/Pau BBQ Ayam", 
        price: 13.20, 
        discount: 0.3,
        'quantityPerPacket': 4, 
        additionalImagePath: [
            "assets/Images/bbqChickenBao1.jpg",
            "assets/Images/bbqChickenBao2.jpg",
            "assets/Images/bbqChickenBao3.jpg"
        ],
        sold: 778,
        inStock: 34,
        description: [
            {title: '', desc: 'Soft steamed bao buns filled with succulent BBQ chicken, creating a harmonious blend of sweet and savory flavors. A delightful treat for those who enjoy the combination of tender meat and fluffy bao.'},
            {title: 'Ingredients', desc: 'BBQ Chicken, Bao Bun, Hoisin Sauce, Green Onions, Sesame Seeds, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost for 20 minutes. Steam the BBQ chicken bao for 5-7 minutes or until heated through. Alternatively, you can microwave them for a quick warm-up. Serve warm with your favorite dipping sauce.'}
        ], nutritionalValue: [
            { "name": "Carbs", "value": "15g" },
            { "name": "Protein", "value": "25g" },
            { "name": "Dietary Fiber", "value": "4g" },
            { "name": "Sodium", "value": "300mg" },
            { "name": "Sugar", "value": "5g" },
            { "name": "Potassium", "value": "350mg" },
            { "name": "Fat", "value": "10g" },
            { "name": "Cholesterol", "value": "30mg" }
        ], 
        caloriesPerServings: 104
    },
    { 
        id: 6, 
        path: "assets/Images/cat_frieddimsum.png", 
        name: "Beadcurd Chicken Slice Salted Egg Roll/ Tauhu Gulung Ayam dgn Telur Masin", 
        price: 20.00, 
        discount: 0.25,
        'quantityPerPacket': 16, 
        additionalImagePath: [
            "assets/Images/beadcurdChicken1.jpg",
            "assets/Images/beadcurdChicken2.jpg",
            "assets/Images/beadcurdChicken3.jpg"
        ],
        sold: 2024,
        inStock: 17,
        description: [
            {title: '', desc: 'Tender wrappers stuffed with premium chicken meat, simply deep fried to crispy golden brown perfection. Crispy and crunchy bring every bite irresistibly delicious.'},
            {title: 'Ingredients', desc: 'Chicken Meat, Veg.Meat, Potato Starch, Wheat Flour, Turnip Sweet, Cooking Oil, Seasoning.'},
            {title: 'How To Keep', desc: 'Keep Frozen -18°C'},
            {title: 'Cooking Direction(Suggestion)', desc: 'Defrost for 20 minutes. Pan-fry the beancurd chicken slices in a lightly oiled skillet over medium heat until they are crispy and golden brown. Serve with your favorite sauce or enjoy them as is.'}
        ],
        nutritionalValue: [
            { "name": "Carbs", "value": "40g" },
            { "name": "Protein", "value": "8g" },
            { "name": "Dietary Fiber", "value": "6g" },
            { "name": "Sodium", "value": "120mg" },
            { "name": "Sugar", "value": "10g" },
            { "name": "Potassium", "value": "200mg" },
            { "name": "Fat", "value": "4g" },
            { "name": "Cholesterol", "value": "0mg" }
        ], 
        caloriesPerServings: 44
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