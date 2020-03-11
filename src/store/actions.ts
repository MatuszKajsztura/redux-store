// actions constants:
export const ADD_TODO = '[TODO] add todo';
export const REMOVE_TODO = '[TODO] removee todo';

//action creators

export class addTodo {
    readonly type = ADD_TODO;
    constructor(
        private payload: any
    ) {}
}

export class removeTodo {
    readonly type = REMOVE_TODO;
    constructor(
        private payload: any
    ) { }
}

console.log(new addTodo('nowe zadanie'), 999)