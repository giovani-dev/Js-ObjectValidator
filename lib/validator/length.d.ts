import Validator from "./interface";
export declare class NumberMinLength implements Validator<number, number> {
    expected: number;
    constructor(expected: number);
    validate(value: number): void;
}
export declare class NumberMaxLength implements Validator<number, number> {
    expected: number;
    constructor(expected: number);
    validate(value: number): void;
}
export declare class StringOrArrayMinLength implements Validator<number, string | Array<any>> {
    expected: number;
    constructor(expected: number);
    validate(value: string | Array<any>): void;
}
export declare class StringOrArrayMaxLength implements Validator<number, string | Array<any>> {
    expected: number;
    constructor(expected: number);
    validate(value: string | Array<any>): void;
}
