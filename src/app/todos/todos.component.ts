import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from './store';

import { Todo } from './shared/models';

@Component({
    selector: 'todos-root',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    todos$: Observable<Todo[]>;

    constructor(
        private store: Store<fromStore.TodoManagerState>
    ) {}

    onAddTodo(todo: Todo) {
        this.store.dispatch(new fromStore.CreateTodo(todo));
    }

    onRemoveTodo(todo: Todo) {
        this.store.dispatch(new fromStore.RemoveTodo(todo.key));
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.LoadTodos());
        this.todos$ = this.store.select(fromStore.getTodos);
    }
}
