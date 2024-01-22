import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { weeklyFlashSaleImages } from '../constant';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-product-description',
	standalone: true,
	imports: [MatTabsModule, CommonModule],
	templateUrl: './product-description.component.html',
	styleUrl: './product-description.component.scss',
})

export class ProductDescriptionComponent {
	id = Number(this.route.snapshot.paramMap.get('id'));
	weeklyFlashSaleImages = weeklyFlashSaleImages;
	
	constructor(private route: ActivatedRoute) { };
}
