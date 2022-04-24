

type FieldErrorType = {
    fieldName: string,
    value: any,
    message: string
}

export default class FieldError extends Error {
    fieldName: string;
    value: any;
    message: string;

    constructor(private readonly msg: FieldErrorType) {
        super(msg.message);
        this.fieldName = msg.fieldName
        this.message = msg.message
        this.value = msg.value
    }
}

