import ValidateBuilder from "../validator/builder";
import Required from "../validator/required";
import { ListFieldType } from "../schema/listField";
import { StringOrArrayMaxLength, StringOrArrayMinLength } from "../validator/length";
import { ArrayType } from "../validator/type";
import Field from "./field";
import ValidationError from "../validator/error/validation";


export default class ListField extends Field<Array<any>, ListFieldType> {
    constructor(protected template: ListFieldType) {
        super(template)
        this.addValidators(template)
    }

    isValid(value: Array<any>): void {
        new ArrayType().validate(value);
        this.validators.forEach((validator) => validator.validate(value));
        value.forEach((inside_value) => {
            try {
                this.template.contentType.isValid(inside_value);
            } catch(err) {
                throw new err;
            }
        });
    }
    
    addValidators(template: ListFieldType): void {
        let templateKeys: Array<string> = Object.keys(template);
        templateKeys = templateKeys.filter((item: string) => item !== "contentType")
        templateKeys.forEach((key: string) => {
            switch(key){
                case 'maxLength':
                    this.validators.push(
                        new StringOrArrayMaxLength(template.maxLength)
                    );
                    break;
                case 'minLength':
                    this.validators.push(
                        new StringOrArrayMinLength(template.minLength)
                    );
                    break;
                case 'isRequired':
                    this.validators.push(
                        new Required(template.isRequired)
                    );
                    break;
                case 'validator':
                    this.validators.push(
                        ValidateBuilder.build(template.validator, true)
                    );
                    break;
                default:
                    throw Error("Validator not found.");
            }
        });
    }
}
