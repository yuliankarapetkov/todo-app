import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from './store';

import { Todo } from './shared/models';

@Component({
    selector: 'todos-root',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    constructor(
        private store: Store<fromStore.TodoManagerState>
    ) {}

    onAddTodo(todo: Todo) {
        this.store.dispatch(new fromStore.CreateTodo(todo));
    }

    ngOnInit() {
    }
}
