"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringOrArrayMaxLength = exports.StringOrArrayMinLength = exports.NumberMaxLength = exports.NumberMinLength = void 0;
const validation_1 = require("./error/validation");
class NumberMinLength {
    constructor(expected) {
        this.expected = expected;
    }
    validate(value) {
        if (!(value >= this.expected) && value !== undefined) {
            throw new validation_1.default(`Min length exceeded`, this.expected);
        }
    }
}
exports.NumberMinLength = NumberMinLength;
class NumberMaxLength {
    constructor(expected) {
        this.expected = expected;
    }
    validate(value) {
        if (!(value <= this.expected) && value !== undefined) {
            throw new validation_1.default(`Max length exceeded`, this.expected);
        }
    }
}
exports.NumberMaxLength = NumberMaxLength;
class StringOrArrayMinLength {
    constructor(expected) {
        this.expected = expected;
    }
    validate(value) {
        if (!((value === null || value === void 0 ? void 0 : value.length) >= this.expected) && value !== undefined) {
            throw new validation_1.default(`Min length exceeded`, this.expected);
        }
    }
}
exports.StringOrArrayMinLength = StringOrArrayMinLength;
class StringOrArrayMaxLength {
    constructor(expected) {
        this.expected = expected;
    }
    validate(value) {
        if (!((value === null || value === void 0 ? void 0 : value.length) <= this.expected) && value !== undefined) {
            throw new validation_1.default(`Max length exceeded`, this.expected);
        }
    }
}
exports.StringOrArrayMaxLength = StringOrArrayMaxLength;
