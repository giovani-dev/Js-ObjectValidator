import Field from "./field";
export default class JsonField<T> extends Field<Object, T> {
    protected template: T;
    constructor(template: T);
    addValidators(template: T): void;
    isValid(value: Object): void;
}
