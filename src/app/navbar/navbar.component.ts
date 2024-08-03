import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isNavbarOpen = false;
  isScroll: boolean = false;

  @HostListener('window:scroll')
  windowScroll(): void {
    this.isScroll = window.scrollY > 30;
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
