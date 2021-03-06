import FieldError from "./error/field";
import ValidationError from "../validator/error/validation";
import { ObjectType } from "../validator/type";
import Field from "./field";


export default class JsonField<T> extends Field<Object, T> {
    constructor(protected template: T) {
        super(template)
        this.validators = [
            new ObjectType()
        ]
    }
    
    addValidators(template: T): void {
        throw new Error("Method not implemented.");
    }

    override isValid(value: Object): void {
        this.validators.push(new ObjectType());
        try{
            super.isValid(value)
        } catch(err) {
            throw new FieldError({
                field: 'body',
                value: value,
                message: err.message,
                expected: err.expected
            });
        }
        Object.keys(this.template).forEach((key: string) => {
            try {
                this.template[key].isValid(value[key]);
            } catch(err) {
                throw new FieldError({
                    field: key,
                    value: value[key],
                    message: err.message,
                    expected: err.expected
                });
            }
        });
    }
}