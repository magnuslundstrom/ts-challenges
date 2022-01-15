export {};

type ReplaceAll<T extends string, Y extends string, U extends string> = T extends `${infer A}${Y}${infer B}`
    ? ReplaceAll<`${A}${U}${B}`, Y, U>
    : T;

type replaced = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'
