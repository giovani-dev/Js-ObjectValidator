"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../validator/builder");
const length_1 = require("../validator/length");
const required_1 = require("../validator/required");
const type_1 = require("../validator/type");
const field_1 = require("./field");
class FloatField extends field_1.default {
    constructor(template) {
        super(template);
        this.template = template;
        this.addValidators(template);
    }
    addValidators(template) {
        this.validators.push(new type_1.FloatType());
        let templateKeys = Object.keys(template);
        templateKeys.forEach((key) => {
            switch (key) {
                case 'maxLength':
                    this.validators.push(new length_1.NumberMaxLength(template.maxLength));
                    break;
                case 'minLength':
                    this.validators.push(new length_1.NumberMinLength(template.minLength));
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
exports.default = FloatField;
