import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HeaderMenuComponent,
    },
    {
        path: 'users',
        component: UsersListComponent,
    },
    {
        path: 'todos',
        component: TodosListComponent,
    }
];
