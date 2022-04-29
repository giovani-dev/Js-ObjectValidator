import Validator from "./interface";
export default class Required implements Validator<boolean, boolean> {
    expected: boolean;
    constructor(expected: boolean);
    validate(value: any): void;
}
