import { Component, inject } from "@angular/core";
import { NgFor } from "@angular/common";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";

interface User {
    id: number;
    name: string;
    email: string;
    company: {
        name: string
    };
    website: string
}

@Component({
    selector: 'app-users-list',
    imports: [NgFor, UserCardComponent],
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    // providers: [UsersApiService],
})
export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService);
    users: User[] = [];

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.users = response;
                console.log(this.users)
            }
        )
    }

    deleteUser(id: number) {
        this.users = this.users.filter((item: any) => id !== item.id)
    }
}