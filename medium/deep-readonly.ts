export {};

type X = {
    x: {
        a: 1;
        b: 'hi';
        c: {
            james: 'x';
        };
    };
    y: 'hey';
};

type Expected = {
    readonly x: {
        readonly a: 1;
        readonly b: 'hi';
        readonly c: {
            readonly james: 'x';
        };
    };
    readonly y: 'hey';
};

type DeepReadonly<T> = keyof T extends never
    ? T
    : {
          readonly [Key in keyof T]: DeepReadonly<T[Key]>;
      };

type Todo = DeepReadonly<X>; // should be same as `Expected`

// from https://github.com/type-challenges/type-challenges/issues/187
