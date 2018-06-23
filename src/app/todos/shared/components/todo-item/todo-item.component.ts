import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../../models';

@Component({
    selector: 'todos-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
    @Input() item: Todo;

    @Output() remove = new EventEmitter<Todo>();

    constructor() { }

    removeClicked() {
        this.remove.emit(this.item);
    }

    ngOnInit() {
    }
}
