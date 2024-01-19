import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { weeklySalesSwiper } from '../constant';
import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
import { SwiperModule } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-weekly-flash-sales',
  standalone: true,
  imports: [SwiperModule, CommonModule],
  templateUrl: './weekly-flash-sales.component.html',
  styleUrl: './weekly-flash-sales.component.scss'
})

export class WeeklyFlashSalesComponent {
  weeklyFlashSaleImages = [
    { id: 1, path: "assets/Images/FriedWanton.png", name: "HF22 Fried Wanton/Wantan Goreng", price: 17.00, discount: 0.5 },
    { id: 2, path: "assets/Images/FriedDumpling.png", name: "HF19 Fried Dumpling/Dumpling Goreng", price: 14.40, discount: 0.45 },
    { id: 3, path: "assets/Images/YamPear.png", name: "Yam Pear/Taro Buah Pir", price: 18.00, discount: 0.35 },
    { id: 4, path: "assets/Images/ChivesChickenRoll.png", name: "Chives Chicken Roll/Gulung Ayam Kuchai", price: 15.00, discount: 0.5 },
    { id: 5, path: "assets/Images/cat_bao.png", name: "HS2 BBQ Chicken Bao/Pau BBQ Ayam", price: 13.20, discount: 0.3 },
    { id: 6, path: "assets/Images/cat_frieddimsum.png", name: "Beadcurd Chicken Slice Salted Egg Roll/ Tauhu Gulung Ayam dgn Telur Masin", price: 20.00, discount: 0.25 }
  ];

  weeklySalesSwiper: SwiperOptions = weeklySalesSwiper;
}
