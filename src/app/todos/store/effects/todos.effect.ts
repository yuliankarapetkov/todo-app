import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as todoAction from '../actions/todos.action';
import * as fromServices from '../../shared/services';

import { Todo } from '../../shared/models';

@Injectable()
export class TodosEffect {
    constructor(
        private actions$: Actions,
        private todosService: fromServices.TodosService
    ) {}

    @Effect()
    loadTodos$ = this.actions$
        .ofType(todoAction.LOAD_TODOS)
        .pipe(switchMap(() => {
            return this.todosService
                .getTodos()
                .pipe(
                    map(friends => new todoAction.LoadTodosSuccess(friends)),
                    catchError(error => of(new todoAction.LoadTodosFail(error)))
                );
        }));

    @Effect()
    createTodo$ = this.actions$
        .ofType(todoAction.CREATE_TODO)
        .pipe(
            map((action: todoAction.CreateTodo) => action.payload),
            switchMap((todo: Todo) => {
                return this.todosService
                    .addTodo(todo)
                    .pipe(
                        map(() => new todoAction.CreateTodoSuccess())
                        // catch error
                    );
            })
        );

    @Effect()
    updateTodo$ = this.actions$
        .ofType(todoAction.UPDATE_TODO)
        .pipe(
            map((action: todoAction.UpdateTodo) => action.payload),
            switchMap((todo: Todo) => {
                const { key, ...todoToUpdate } = todo;
                return this.todosService
                    .updateTodo(key, todoToUpdate)
                    .pipe(
                        map(() => new todoAction.UpdateTodoSuccess())
                        // catch error
                    );
            })
        );

    @Effect()
    removeTodo$ = this.actions$
        .ofType(todoAction.REMOVE_TODO)
        .pipe(
            map((action: todoAction.RemoveTodo) => action.payload),
            switchMap((key: string) => {
                return this.todosService
                    .removeTodo(key)
                    .pipe(
                        map(() => new todoAction.RemoveTodoSuccess())
                    );
            })
        );
}