import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../../models';

@Component({
    selector: 'todos-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
    @Input() item: Todo;

    constructor() { }

    ngOnInit() {
    }
}
