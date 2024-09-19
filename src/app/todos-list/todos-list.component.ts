import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

@Component({
    selector: 'app-todos-list',
    standalone: true,
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    imports: [NgFor, TodoCardComponent],
})
export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    todos: Todo[] = [];

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todos = response;
                console.log(this.todos);
            }
        )
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter((item: any) => id !== item.id);
    }
}