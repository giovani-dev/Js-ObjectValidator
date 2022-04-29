import ValidationError from "./error/validation";
import Validator from "./interface";


export default class Required implements Validator<boolean, boolean> {
    constructor(public expected: boolean) {}

    validate(value: boolean): void {
        if(value !== null || value !== undefined && this.expected) {
            throw new ValidationError(`Is required field.`);
        }
    }

}
