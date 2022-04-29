

type FieldErrorType = {
    field: string,
    value: any,
    message: string
}

export default class FieldError extends Error {
    field: string;
    value: any;
    message: string;

    constructor(readonly msg: FieldErrorType) {
        super(msg.message);
        this.field = msg.field
        this.message = msg.message
        this.value = msg.value
    }
}

