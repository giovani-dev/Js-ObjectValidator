import Validator from "./interface";
declare class CustomValidator implements Validator<boolean, any> {
    func: (value: any) => boolean;
    expected: boolean;
    constructor(func: (value: any) => boolean, expected: boolean);
    validate(value: any): boolean;
}
export default class ValidateBuilder {
    static build(func: (value: any) => boolean, expected: boolean): CustomValidator;
}
export {};
