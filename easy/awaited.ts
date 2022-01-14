export {};

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type PromiseReturn<T> = T extends Promise<infer R> ? R : never;

type XReturn = PromiseReturn<X>;
