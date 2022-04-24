

export default class ValidationError extends Error {
    constructor(private readonly msg: string) {
        super(msg);
        this.message = msg;
    }
}
