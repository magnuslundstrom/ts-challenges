export {};

type Parameters<T extends (...args: any) => any> = T extends (...args: infer S) => any ? S : [];

type fn = (james: string) => void;

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type FooParams = Parameters<typeof foo>;
type BarParams = Parameters<typeof bar>;
type BazParams = Parameters<typeof baz>;
