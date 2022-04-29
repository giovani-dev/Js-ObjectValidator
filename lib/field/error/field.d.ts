declare type FieldErrorType = {
    field: string;
    value: any;
    message: string;
    expected: string;
};
export default class FieldError extends Error {
    readonly msg: FieldErrorType;
    field: string;
    value: any;
    message: string;
    expected: string;
    constructor(msg: FieldErrorType);
}
export {};
