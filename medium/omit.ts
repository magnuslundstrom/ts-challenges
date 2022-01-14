export {};

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type HelperExclude<T, K> = T extends K ? never : T;

type MyOmit<T, K> = { [Key in HelperExclude<keyof T, K>]: T[Key] };

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
    completed: false,
};
