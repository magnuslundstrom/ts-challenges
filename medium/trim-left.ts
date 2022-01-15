export {};

type TrimLeft<T extends string> = T extends `  ${infer S}` ? S : T;
type TrimLeft2<T extends string> = T extends `${' '}${infer S}` ? TrimLeft2<S> : T;
type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
type trimed2 = TrimLeft2<'  Hello World  '>; // expected to be 'Hello World  '
