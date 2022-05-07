"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FieldError extends Error {
    constructor(msg) {
        super(msg.message);
        this.msg = msg;
        this.field = msg.field;
        this.message = msg.message;
        this.value = msg.value;
        this.expected = msg.expected;
    }
}
exports.default = FieldError;
