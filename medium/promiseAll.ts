export {};

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise<string>((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// // declare function PromiseAll<T extends any[]>(
// //     value: readonly [[...T]]
// // ): Promise<{
// //     [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K];
// // }>;

// declare function PromiseAll<T>(): 'a';

// // expected to be `Promise<[number, number, string]>`
// const p = Promise.all([promise1, promise2, promise3] as const);

// type PromiseAll<T extends Promise<any>> = T extends Promise<infer S> ? Promise<S> : never;

// type A = PromiseAll<typeof p>;

// failed
