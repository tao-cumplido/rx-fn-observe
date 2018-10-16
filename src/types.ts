// tslint:disable:ban-types

export type FunctionKeys<T extends object> = { [P in keyof T]: T[P] extends Function ? P : never }[keyof T];

// prettier-ignore
export type ArgumentList<T> =
    T extends () => any ? void :
    T extends (a: infer A) => any ? [A] :
    T extends (a: infer A, b: infer B) => any ? [A, B] :
    T extends (a: infer A, b: infer B, c: infer C) => any ? [A, B, C] :
    T extends (a: infer A, b: infer B, c: infer C, d: infer D) => any ? [A, B, C, D] :
    T extends (a: infer A, b: infer B, c: infer C, d: infer D, e: infer E) => any ? [A, B, C, D, E] :
    T extends (a: infer A, b: infer B, c: infer C, d: infer D, e: infer E, f: infer F) => any ? [A, B, C, D, E, F] :
    T extends Function ? any[] :
    never;

// prettier-ignore
export type ReturnType<T> =
    T extends (...args: any[]) => infer R ? R :
    T extends Function ? any :
    never;
