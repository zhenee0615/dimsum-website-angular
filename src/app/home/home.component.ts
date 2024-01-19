import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bannerSwiper } from '../constant';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Autoplay, Navigation, Pagination} from 'swiper';
import { WeeklyFlashSalesComponent } from '../weekly-flash-sales/weekly-flash-sales.component';

SwiperCore.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SwiperModule, WeeklyFlashSalesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  bannerImages = [
    { id: 1, path: "assets/Images/cnyOfferBanner.jpg" },
    { id: 2, path: "assets/Images/dimsumBanner.jpg" },
    { id: 3, path: "assets/Images/freeshipping.png" }
  ];

  bannerSwiper: SwiperOptions = bannerSwiper;
}
