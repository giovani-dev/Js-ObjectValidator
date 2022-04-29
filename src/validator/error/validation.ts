

export default class ValidationError<T> extends Error {
    constructor(private readonly msg: string, private readonly expected: T) {
        super(msg);
    }
}
