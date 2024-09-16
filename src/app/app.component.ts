import { NgIf, NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgClass, HeaderMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowBanner = true;
  isClickedPaginationBtn = false;
  newPages = newPages;

  changeColorPaginationBtn() {
    this.isClickedPaginationBtn = !this.isClickedPaginationBtn;
  }
}