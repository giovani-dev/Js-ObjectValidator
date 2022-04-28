declare type FieldErrorType = {
    fieldName: string;
    value: any;
    message: string;
};
export default class FieldError extends Error {
    private readonly msg;
    fieldName: string;
    value: any;
    message: string;
    constructor(msg: FieldErrorType);
}
export {};
