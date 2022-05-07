"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const field_1 = require("./error/field");
const type_1 = require("../validator/type");
const field_2 = require("./field");
class JsonField extends field_2.default {
    constructor(template) {
        super(template);
        this.template = template;
        this.validators = [
            new type_1.ObjectType()
        ];
    }
    addValidators(template) {
        throw new Error("Method not implemented.");
    }
    isValid(value) {
        this.validators.push(new type_1.ObjectType());
        try {
            super.isValid(value);
        }
        catch (err) {
            throw new field_1.default({
                field: 'body',
                value: value,
                message: err.message,
                expected: err.expected
            });
        }
        Object.keys(this.template).forEach((key) => {
            try {
                this.template[key].isValid(value[key]);
            }
            catch (err) {
                throw new field_1.default({
                    field: key,
                    value: value[key],
                    message: err.message,
                    expected: err.expected
                });
            }
        });
    }
}
exports.default = JsonField;
