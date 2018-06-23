import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'todos-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
    @Output() addTodo = new EventEmitter<any>();

    todoForm = this.formBuilder.group({
        description: ['', [Validators.required]]
    });

    constructor(
        private formBuilder: FormBuilder
    ) {}

    submitForm() {
        if (this.todoForm.valid) {
            const todo = { ...this.todoForm.value, isCompleted: false };
            this.addTodo.emit(todo);
            this.todoForm.reset();
        }
    }

    ngOnInit() {
    }
}
