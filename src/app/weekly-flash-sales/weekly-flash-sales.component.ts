import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { weeklySalesSwiper, weeklyFlashSaleImages } from '../constant';
import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-weekly-flash-sales',
  standalone: true,
  imports: [SwiperModule, CommonModule, RouterModule],
  templateUrl: './weekly-flash-sales.component.html',
  styleUrl: './weekly-flash-sales.component.scss'
})

export class WeeklyFlashSalesComponent {
  weeklyFlashSaleImages = weeklyFlashSaleImages;
  weeklySalesSwiper: SwiperOptions = weeklySalesSwiper;
}
