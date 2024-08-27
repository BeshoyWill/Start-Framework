import { Component } from '@angular/core';
import { Product } from '../product';
import { RecommendedProductsComponent } from '../recommended-products/recommended-products.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedProductsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple Watch',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/apple.jpeg',
    },
    {
      id: 1,
      name: 'Iphone',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/iphone.jpeg',
    },
    {
      id: 1,
      name: 'Macbook',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/mac.jpeg',
    },
    {
      id: 1,
      name: 'Apple Watch',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/apple.jpeg',
    },
    {
      id: 1,
      name: 'Iphone',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/iphone.jpeg',
    },
    {
      id: 1,
      name: 'Macbook',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/mac.jpeg',
    },
    {
      id: 1,
      name: 'Apple Watch',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/apple.jpeg',
    },
    {
      id: 1,
      name: 'Iphone',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/iphone.jpeg',
    },
    {
      id: 1,
      name: 'Macbook',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/mac.jpeg',
    },
    {
      id: 1,
      name: 'Apple Watch',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/apple.jpeg',
    },
    {
      id: 1,
      name: 'Iphone',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/iphone.jpeg',
    },
    {
      id: 1,
      name: 'Macbook',
      price: 600,
      description: 'Smart Watch',
      imgPath: 'assets/mac.jpeg',
    },
  ];
}
