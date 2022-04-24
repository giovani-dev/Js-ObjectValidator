import Validator from "./interface";


class CustomValidator implements Validator<boolean, any> {
    constructor(
        public func: (value: any) => boolean,
        public expected: boolean
    ) {}

    validate(value: any): boolean {
        return this.func(value) === this.expected
    }
}

export default class ValidateBuilder {
    static build(func: (value: any) => boolean, expected: boolean): CustomValidator {
        return new CustomValidator(func, expected);
    }
}