import { Component, OnInit } from '@angular/core';
import { TodosService } from './shared/services';

@Component({
    selector: 'todos-root',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    constructor(
        private todosService: TodosService
    ) {}

    onAddTodo(todo: any) {
        console.log(todo);
        this.todosService.addTodo(todo);
    }

    ngOnInit() {
    }
}
