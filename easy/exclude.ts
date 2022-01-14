export {};

type MyExclude<T, K> = T extends K ? never : T;

type A = MyExclude<'a' | 'b', 'a'>;
