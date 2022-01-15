export {};

type Replace<T extends string, Y extends string, U extends string> = T extends `${infer S}${Y}${infer A}`
    ? `${S}${U}${A}`
    : T;

type replaced = Replace<'types are fun!', 'types', 'awesome'>; // expected to be 'types are awesome!'
