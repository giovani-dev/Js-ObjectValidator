export default class ValidationError extends Error {
    private readonly msg;
    constructor(msg: string);
}
