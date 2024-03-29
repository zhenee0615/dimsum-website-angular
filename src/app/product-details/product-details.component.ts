import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { weeklyFlashSaleImages, socialMediaImages } from '../constant';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDescriptionComponent } from '../product-description/product-description.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule, ProductDescriptionComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent {
    quantityNumber = 1;
    addLimit = false;
    id = Number(this.route.snapshot.paramMap.get('id'));
    imagePath = weeklyFlashSaleImages[this.id - 1].path;
    stockAvailable = weeklyFlashSaleImages[this.id - 1].inStock != 0 ? "IN STOCK" : "OUT OF STOCK";
    weeklyFlashSaleImages = weeklyFlashSaleImages;
    socialMediaImages = socialMediaImages;

    constructor(private route: ActivatedRoute) { };

    incQuantity(): number {
        if (this.quantityNumber === weeklyFlashSaleImages[this.id - 1].inStock) {
            this.addLimit = true;
            return this.quantityNumber;
        }
        return this.quantityNumber++;
    }

    decQuantity(): void {
        this.addLimit = false;
        this.quantityNumber--;
    }

    getDiscountedPrice(): number {
        return weeklyFlashSaleImages[this.id - 1].price - (weeklyFlashSaleImages[this.id - 1].price * weeklyFlashSaleImages[this.id - 1].discount);
    }

    changeImage(imagePath: string): void {
        this.imagePath = imagePath;
    }
}
