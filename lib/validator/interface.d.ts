export default interface Validator<EXP, VAL> {
    expected: EXP;
    validate(value: VAL): void;
}
