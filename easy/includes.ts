export {};

type Includes<T extends any[], K> = K extends T[number] ? true : false;

type isFalse = Includes<['Dio', 'Esidisi', 'Wamuu', 'Santana'], 'Geo'>; // expected to be `false`
type isTrue = Includes<['Dio', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // expected to be `true`
