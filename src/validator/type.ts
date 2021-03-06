import ValidationError from "./error/validation";
import Validator from "./interface";


export class IntegerType implements Validator<null, number> {
    expected: null;

    validate(value: number): void {
        if(!(Number.isInteger(value)) && value !== undefined) {
            throw new ValidationError<string>(`Type error`, 'Integer type.');
        }
    }
}

export class FloatType implements Validator<null, number> {
    expected: null;

    validate(value: number): void {
        if(!(!Number.isInteger(value)) && value !== undefined) {
            throw new ValidationError<string>(`Type error`, 'Float type.');
        }
    }
}

export class StringType implements Validator<null, string> {
    expected: null;

    validate(value: string): void {
        if(!((typeof value).toLocaleLowerCase() === "string") && value !== undefined) {
            throw new ValidationError<string>(`Type error`, 'String type.');
        }
    }
}

export class ObjectType implements Validator<null, Object> {
    expected: null;

    validate(value: Object): void {
        if(!(value.constructor === {}.constructor) && value !== undefined) {
            throw new ValidationError<string>(`Type error`, 'Object type.');
        }
    }
}

export class ArrayType implements Validator<null, Array<any>> {
    expected: null;

    validate(value: Array<any>): void {
        if(!(value.constructor === [].constructor) && value !== undefined) {
            throw new ValidationError<string>(`Type error`, 'Array type.');
        }
    }
}