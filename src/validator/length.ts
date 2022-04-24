import ValidationError from "./error/validation";
import Validator from "./interface";



export class NumberMinLength implements Validator<number, number> {
    constructor(public expected: number) {}

    validate(value: number): void {
        if(!(value >= this.expected) && value !== undefined){
            throw new ValidationError(`Min length exceeded`);
        }
    }
}

export class NumberMaxLength implements Validator<number, number> {
    constructor(public expected: number) {}

    validate(value: number): void {
        if(!(value <= this.expected) && value !== undefined){
            throw new ValidationError(`Max length exceeded`);
        }
    }
}

export class StringOrArrayMinLength implements Validator<number, string | Array<any>> {
    constructor(public expected: number) {}

    validate(value: string | Array<any>): void {
        if(!(value?.length >= this.expected) && value !== undefined){
            throw new ValidationError(`Min length exceeded`);
        }
    }
}

export class StringOrArrayMaxLength implements Validator<number, string | Array<any>> {
    constructor(public expected: number) {}

    validate(value: string | Array<any>): void {
        if(!(value?.length <= this.expected) && value !== undefined){
            throw new ValidationError(`Max length exceeded`);
        }
    }
}
