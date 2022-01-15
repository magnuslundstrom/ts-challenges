export {};

interface Cat {
    type: 'cat';
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
    type: 'dog';
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
    color: 'brown' | 'white' | 'black';
}

type PetType = {
    type: string;
    [key: string]: any;
};

type Lookup<T extends PetType, K extends T['type']> = K extends T['type'] ? T : never;

type Loopup2<T, K> = T extends { type: string } ? (K extends T['type'] ? T : never) : never;

type Look3<T extends { type: string }, K extends T['type']> = T extends { type: K } ? T : never;

type MyDogType = Lookup<Cat | Dog, 'dog'>; // expected to be `Dog`

type MyCatType = Look3<Cat | Dog, 'cat'>;
