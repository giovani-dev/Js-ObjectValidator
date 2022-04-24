import Validator from "../validator/interface";


export default abstract class Field<ConcreteType, TemplateType> {
    protected validators: Array<Validator<unknown, unknown>> = [];
    
    
    constructor(protected template: TemplateType) {}

    isValid(value: ConcreteType): void {
        for(const validator of this.validators) {
            validator.validate(value);
        }
    }

    abstract addValidators(template: TemplateType): void;
}
