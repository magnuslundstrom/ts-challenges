export {};

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type HelperInclude<T, K> = T extends K ? T : never;
type HelperExclude<T, K> = T extends K ? never : T;

type MyReadonly2<T, K> = {
    readonly [Key in HelperInclude<keyof T, K>]: T[Key];
} & {
    [Key in HelperExclude<keyof T, K>]: T[Key];
};

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: 'Hey',
    description: 'foobar',
    completed: false,
};

// todo.title = 'Hello'; // Error: cannot reassign a readonly property
// todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK
