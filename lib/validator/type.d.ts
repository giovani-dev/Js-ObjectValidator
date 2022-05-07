import Validator from "./interface";
export declare class IntegerType implements Validator<null, number> {
    expected: null;
    validate(value: number): void;
}
export declare class FloatType implements Validator<null, number> {
    expected: null;
    validate(value: number): void;
}
export declare class StringType implements Validator<null, string> {
    expected: null;
    validate(value: string): void;
}
export declare class ObjectType implements Validator<null, Object> {
    expected: null;
    validate(value: Object): void;
}
export declare class ArrayType implements Validator<null, Array<any>> {
    expected: null;
    validate(value: Array<any>): void;
}
