import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { config } from '../constant';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Autoplay, Navigation, Pagination} from 'swiper';

SwiperCore.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  images = [
    { id: 1, path: "assets/Images/cnyOfferBanner.jpg" },
    { id: 2, path: "assets/Images/dimsumBanner.jpg" },
    { id: 3, path: "assets/Images/freeshipping.png" }
  ]

  config: SwiperOptions = config;
}
