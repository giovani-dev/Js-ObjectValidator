"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("./error/validation");
class CustomValidator {
    constructor(func, expected) {
        this.func = func;
        this.expected = expected;
    }
    validate(value) {
        if (!(this.func(value) === this.expected)) {
            throw new validation_1.default('Custom validation error', this.expected);
        }
    }
}
class ValidateBuilder {
    static build(func, expected) {
        return new CustomValidator(func, expected);
    }
}
exports.default = ValidateBuilder;
