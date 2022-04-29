"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationError extends Error {
    constructor(msg, expected) {
        super(msg);
        this.msg = msg;
        this.expected = expected;
    }
}
exports.default = ValidationError;
