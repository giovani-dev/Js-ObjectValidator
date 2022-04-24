import { GenericFieldType } from "../schema/genericField";
import ValidateBuilder from "../validator/builder";
import { StringOrArrayMaxLength, StringOrArrayMinLength } from "../validator/length";
import Required from "../validator/required";
import { StringType } from "../validator/type";
import { Field } from "./field";


export default class FieldString extends Field<string, GenericFieldType> {

    constructor(protected template: GenericFieldType) {
        super(template)
        this.addValidators(template)
    }

    addValidators(template: GenericFieldType): void {
        this.validators.push(new StringType());
        let templateKeys: Array<string> = Object.keys(template);
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
