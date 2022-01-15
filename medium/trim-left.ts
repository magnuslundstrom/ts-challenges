export {};

type TrimLeft<T extends string> = T extends `${T[number] extends ' ' ? infer S : never}` ? 'hi ' : 'x';
type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
