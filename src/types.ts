export type Todo = {
    id: number;
    taskName: string;
    completed: boolean;
}

export interface ITodoList{
    todos: Todo[];
    handleTodoStatus: (id: number) => void
    deleteTodo: (id: number) => void
}

export interface ITodoForm{
    addTodo:(taskName:string)=>void
}

export interface ITodoItem {
    handleTodoStatus: (id: number) => void;
    deleteTodo: (id: number) => void

    id: number;
    taskName: string;
    completed: boolean;
}