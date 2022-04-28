"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationError extends Error {
    constructor(msg) {
        super(msg);
        this.msg = msg;
        this.message = msg;
    }
}
exports.default = ValidationError;
