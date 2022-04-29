import ValidationError from "./error/validation";
import Validator from "./interface";


export class NumberMinLength implements Validator<number, number> {
    constructor(public expected: number) {}

    validate(value: number): void {
        if(!(value >= this.expected) && value !== undefined){
            throw new ValidationError<number>(`Min length exceeded`, this.expected);
        }
    }
}

export class NumberMaxLength implements Validator<number, number> {
    constructor(public expected: number) {}

    validate(value: number): void {
        if(!(value <= this.expected) && value !== undefined){
            throw new ValidationError<number>(`Max length exceeded`, this.expected);
        }
    }
}

export class StringOrArrayMinLength implements Validator<number, string | Array<any>> {
    constructor(public expected: number) {}

    validate(value: string | Array<any>): void {
        if(!(value?.length >= this.expected) && value !== undefined){
            throw new ValidationError<number>(`Min length exceeded`, this.expected);
        }
    }
}

export class StringOrArrayMaxLength implements Validator<number, string | Array<any>> {
    constructor(public expected: number) {}

    validate(value: string | Array<any>): void {
        if(!(value?.length <= this.expected) && value !== undefined){
            throw new ValidationError<number>(`Max length exceeded`, this.expected);
        }
    }
}
