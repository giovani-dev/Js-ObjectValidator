"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../validator/builder");
const required_1 = require("../validator/required");
const length_1 = require("../validator/length");
const type_1 = require("../validator/type");
const field_1 = require("./field");
const validation_1 = require("../validator/error/validation");
class ListField extends field_1.default {
    constructor(template) {
        super(template);
        this.template = template;
        this.addValidators(template);
    }
    isValid(value) {
        new type_1.ArrayType().validate(value);
        this.validators.forEach((validator) => validator.validate(value));
        value.forEach((inside_value) => {
            try {
                this.template.contentType.isValid(inside_value);
            }
            catch (err) {
                throw new validation_1.default(`${err.message} using '${inside_value}'`);
            }
        });
    }
    addValidators(template) {
        let templateKeys = Object.keys(template);
        templateKeys = templateKeys.filter((item) => item !== "contentType");
        templateKeys.forEach((key) => {
            switch (key) {
                case 'maxLength':
                    this.validators.push(new length_1.StringOrArrayMaxLength(template.maxLength));
                    break;
                case 'minLength':
                    this.validators.push(new length_1.StringOrArrayMinLength(template.minLength));
                    break;
                case 'isRequired':
                    this.validators.push(new required_1.default(template.isRequired));
                    break;
                case 'validator':
                    this.validators.push(builder_1.default.build(template.validator, true));
                    break;
                default:
                    throw Error("Validator not found.");
            }
        });
    }
}
exports.default = ListField;
