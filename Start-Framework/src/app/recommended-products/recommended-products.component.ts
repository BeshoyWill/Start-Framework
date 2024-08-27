import { Component } from '@angular/core';
import { RecommendedProducts } from '../recommended-products';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css',
})
export class RecommendedProductsComponent {
  recommendedProdcuts: RecommendedProducts[] = [
    {
      id: 1,
      name: 'Apple Airtags',
      price: 20,
      description: 'Smart Tags',
      imgPath: 'assets/airtags.jpeg',
    },
    {
      id: 1,
      name: 'Apple Airpods',
      price: 180,
      description: 'Wireless Headphones',
      imgPath: 'assets/airpods.jpeg',
    },
    {
      id: 1,
      name: 'Apple Vision Pro',
      price: 600,
      description: 'Smart Glasses',
      imgPath: 'assets/visionpro.jpeg',
    },
  ];
}
