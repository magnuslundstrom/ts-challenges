export {};

type Trim<T extends string> = T extends ` ${infer S}` ? Trim<S> : T extends `${infer S} ` ? Trim<S> : T;

type trimed = Trim<'  Hello World  '>; // expected to be 'Hello World'
