export {};

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};

interface Todo1 {
    title: string;
    description: string;
}

const todo: MyReadonly<Todo1> = {
    title: 'Hey',
    description: 'foobar',
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
