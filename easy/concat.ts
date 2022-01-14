export {};

type Concat<T extends any[], K extends any[]> = [...T, ...K];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
