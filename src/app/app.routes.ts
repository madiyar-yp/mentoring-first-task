import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HeaderMenuComponent,
    },
    {
        path: 'users',
        component: UsersListComponent,
    }
];
