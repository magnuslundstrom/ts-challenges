export {};

type capitalized = Capitalize<'hello world'>; // expected to be 'Hello world'

type MyCapitalize<T extends string> = T extends `${infer S}${infer A}` ? `${Uppercase<S>}${A}` : T;

type cap = MyCapitalize<'hello world'>;
