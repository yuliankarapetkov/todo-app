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
        description: ['', [Validators.required]],
        isCompleted: [false, [Validators.required]]
    });

    constructor(
        private formBuilder: FormBuilder
    ) {}

    submitForm() {
        if (this.todoForm.valid) {
            this.addTodo.emit(this.todoForm.value);
            this.todoForm.reset();
        }
    }

    ngOnInit() {
    }
}
