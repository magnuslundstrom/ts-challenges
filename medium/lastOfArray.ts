export {};

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type Last<T extends any[]> = T extends [...any, infer Tail] ? Tail : never;

type Last2<T extends any[]> = [undefined, ...T][T['length']];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1

type tail3 = Last2<arr1>; // expected to be 'c'
type tail4 = Last2<arr2>; // expected to be 1
