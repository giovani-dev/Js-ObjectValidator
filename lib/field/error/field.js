"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FieldError extends Error {
    constructor(msg) {
        super(msg.message);
        this.msg = msg;
        this.fieldName = msg.fieldName;
        this.message = msg.message;
        this.value = msg.value;
    }
}
exports.default = FieldError;
