export {};

type Chainable<State = Record<string, unknown>> = {
    option: <T extends string, V>(key: T, val: V) => Chainable<State & { [k in T]: typeof val }>;
    //     get: () => { [key in keyof State]: State[key] };
    get: () => State;
};

declare const config: Chainable;

const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get();

// expect the type of result to be:
interface Result {
    foo: number;
    name: string;
    bar: {
        value: string;
    };
}
