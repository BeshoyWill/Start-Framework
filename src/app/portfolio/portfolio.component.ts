import { Component } from '@angular/core';
import { AllImg } from '../all-img';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  userClick: boolean = false;
  userImg: string = '';
  images: AllImg[] = [
    { imgPath: 'assets/portfolio1.png' },
    { imgPath: 'assets/portfolio2.png' },
    { imgPath: 'assets/portfolio3.png' },
    { imgPath: 'assets/portfolio1.png' },
    { imgPath: 'assets/portfolio2.png' },
    { imgPath: 'assets/portfolio3.png' },
  ];

  getSrc(image: string): void {
    console.log(image);
    this.userClick = true;
    this.userImg = image;
  }

  hideDiv(e: MouseEvent): void {
    console.log(e);
    if (e.target instanceof HTMLImageElement != true) {
      this.userClick = false;
    }
  }
}
