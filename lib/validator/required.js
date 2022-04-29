"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("./error/validation");
class Required {
    constructor(expected) {
        this.expected = expected;
    }
    validate(value) {
        if (value !== null || value !== undefined && this.expected) {
            throw new validation_1.default(`Is required field.`, this.expected);
        }
    }
}
exports.default = Required;
