import { Action } from '@ngrx/store';

import { Todo } from '../../shared/models';

// load todos
export const LOAD_TODOS = '[Todos] Load Todos';
export const LOAD_TODOS_FAIL = '[Todos] Load Todos Fail';
export const LOAD_TODOS_SUCCESS = '[Todos] Load Todos Success';

export class LoadTodos implements Action {
    readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
    readonly type = LOAD_TODOS_FAIL;
    constructor(public payload: any) {}
}

export class LoadTodosSuccess implements Action {
    readonly type = LOAD_TODOS_SUCCESS;
    constructor(public payload: Todo[]) {}
}

// create todo
export const CREATE_TODO = '[Todos] Create Todo';

export class CreateTodo implements Action {
    readonly type = CREATE_TODO;
    constructor(public payload: Todo) {}
}

// update todo
export const UPDATE_TODO = '[Todos] Update Todo';

export class UpdateTodo implements Action {
    readonly type = UPDATE_TODO;
    constructor(public payload: Todo) {}
}

// remove Todo
export const REMOVE_TODO = '[Todos] Remove Todo';

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;
    constructor(public payload: string) {}
}

// action types
export type TodosAction =
    | LoadTodos
    | LoadTodosFail
    | LoadTodosSuccess
    | CreateTodo
    | UpdateTodo
    | RemoveTodo;
