export default class ValidationError<T> extends Error {
    private readonly msg;
    private readonly expected;
    constructor(msg: string, expected: T);
}
