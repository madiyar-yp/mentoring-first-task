import { NgIf, NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const setMenuItemName = (name: string): string => {
  return name;
}
const aboutCompany = setMenuItemName('О компании');
const newPages = [5, 4, 3, 2, 1];
const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog = true;
  isShowBanner = true;
  isClickedPaginationBtn = false;
  isUpperCase = true;
  newPages = newPages;
  menuItems = menuItems;

  changeColorPaginationBtn() {
    this.isClickedPaginationBtn = !this.isClickedPaginationBtn;
  }

  changeMenuText() {
    this.menuItems = menuItems.map(item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase());
    this.isUpperCase = !this.isUpperCase;
  }

  readonly headerItem1 = 'Главная';
  readonly aboutCompany = aboutCompany;
  readonly headerItem3 = 'Каталог';

  readonly header2Item1 = 'Каталог';
  readonly header2Item2 = 'Стройматериалы';
  readonly header2Item3 = 'Инструменты';
  readonly header2Item4 = 'Электрика';
  readonly header2Item5 = 'Интерьер и одежда';
}