import { GenericFieldType } from "../schema/genericField";
import { NumberMaxLength, NumberMinLength } from "../validator/length";
import Required from "../validator/required";
import { Field } from "./field"
import ValidateBuilder from "../validator/builder";
import { IntegerType } from "../validator/type";


export default class FieldInteger extends Field<number, GenericFieldType> {
    
    constructor(protected template: GenericFieldType) {
        super(template)
        this.addValidators(template)
    }

    addValidators(template: GenericFieldType): void {
        this.validators.push( new IntegerType() );
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
                    throw Error("Validator not found.");
            }
        });
    }
}