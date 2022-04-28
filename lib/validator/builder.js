"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomValidator {
    constructor(func, expected) {
        this.func = func;
        this.expected = expected;
    }
    validate(value) {
        return this.func(value) === this.expected;
    }
}
class ValidateBuilder {
    static build(func, expected) {
        return new CustomValidator(func, expected);
    }
}
exports.default = ValidateBuilder;
