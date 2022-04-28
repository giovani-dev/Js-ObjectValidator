"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const field_1 = require("./error/field");
const validation_1 = require("../validator/error/validation");
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
            if (err instanceof validation_1.default) {
                throw new field_1.default({
                    fieldName: 'body',
                    value: value,
                    message: 'Validation error at:'
                });
            }
        }
        Object.keys(this.template).forEach((key) => {
            try {
                this.template[key].isValid(value[key]);
            }
            catch (err) {
                if (err instanceof validation_1.default) {
                    throw new field_1.default({
                        fieldName: key,
                        value: value[key],
                        message: `${err.message} at '${key}'`
                    });
                }
                if (err instanceof field_1.default) {
                    err.message = `${err.message} from '${key}'`;
                    throw err;
                }
            }
        });
    }
}
exports.default = JsonField;
