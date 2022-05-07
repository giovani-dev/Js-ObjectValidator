import { GenericFieldType } from "../schema/genericField";
import ValidateBuilder from "../validator/builder";
import { NumberMaxLength, NumberMinLength } from "../validator/length";
import Required from "../validator/required";
import { FloatType } from "../validator/type";
import FieldValidatorError from "./error/fieldValidator";
import Field from "./field";


export default class FloatField extends Field<number, GenericFieldType> {
    constructor(protected template: GenericFieldType) {
        super(template)
        this.addValidators(template)
    }

    addValidators(template: GenericFieldType): void {
        this.validators.push(new FloatType());
        let templateKeys: Array<string> = Object.keys(template);
        templateKeys.forEach((key: string) => {
            switch(key){
                case 'maxLength':
                    this.validators.push(
                        new NumberMaxLength(template.maxLength)
                    );
                    break;
                case 'minLength':
                    this.validators.push(
                        new NumberMinLength(template.minLength)
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
                    throw new FieldValidatorError("Validator not found.");
            }
        });
    }
}