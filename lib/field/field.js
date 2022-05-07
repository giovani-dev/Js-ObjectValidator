"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Field {
    constructor(template) {
        this.template = template;
        this.validators = [];
    }
    isValid(value) {
        for (const validator of this.validators) {
            validator.validate(value);
        }
    }
}
exports.default = Field;
