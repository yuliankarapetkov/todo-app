import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodosService } from './shared/services';

@Component({
    selector: 'todos-root',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    todoForm = this.formBuilder.group({
        description: ['', [Validators.required]],
        completed: [false, [Validators.required]]
    });

    constructor(
        private formBuilder: FormBuilder,
        private todosService: TodosService
    ) {}

    submitForm() {
        if (this.todoForm.valid) {
            console.log(this.todoForm.value);
            this.todosService.addTodo(this.todoForm.value);
        }
    }

    ngOnInit() {
    }
}
