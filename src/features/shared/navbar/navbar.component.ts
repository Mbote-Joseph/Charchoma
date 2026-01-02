import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;
  activeDropdown: string | null = null;

  toggleDropdown(menu: string) {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  closeMobileMenu() {
    this.menuOpen = false;
    this.activeDropdown = null;
  }
}


// https://charchoma.com/wp-content/uploads/2024/12/Char-Choma_Logo_White_Transparent_Cropped_dark-300x193.png
