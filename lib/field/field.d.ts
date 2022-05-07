import Validator from "../validator/interface";
export default abstract class Field<ConcreteType, TemplateType> {
    protected template: TemplateType;
    protected validators: Array<Validator<unknown, unknown>>;
    constructor(template: TemplateType);
    isValid(value: ConcreteType): void;
    abstract addValidators(template: TemplateType): void;
}
