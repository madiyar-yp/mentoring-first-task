import { Component } from "@angular/core";
import { NgIf, NgFor, NgClass } from '@angular/common';
import { RouterLink } from "@angular/router";

const setMenuItemName = (name: string): string => {
    return name;
}
const aboutCompany = setMenuItemName('О компании');
const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

@Component({
    selector: 'app-header',
    imports: [NgIf, NgFor, NgClass, RouterLink],
    standalone: true,
    templateUrl: './header-menu.component.html',
    styleUrl: './header-menu.component.scss',
}) 
export class HeaderMenuComponent {
    isShowCatalog = true;
    isUpperCase = true;
    menuItems = menuItems;

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