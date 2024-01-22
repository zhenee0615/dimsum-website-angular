import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { weeklyFlashSaleImages, socialMediaImages } from '../constant';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent {
  constructor(private route: ActivatedRoute) {};

  quantityNumber = 1;
  id = Number(this.route.snapshot.paramMap.get('id'));
  stockAvailable = weeklyFlashSaleImages[this.id - 1].inStock != 0 ? "IN STOCK" : "OUT OF STOCK";
  weeklyFlashSaleImages = weeklyFlashSaleImages;
  socialMediaImages = socialMediaImages;

  incQuantity(): Number {
    if (this.quantityNumber == weeklyFlashSaleImages[this.id - 1].inStock) {
      return this.quantityNumber;
    }
    return this.quantityNumber++;
  }

  decQuantity(): void {
    this.quantityNumber--;
  }
}
