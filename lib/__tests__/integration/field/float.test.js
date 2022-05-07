"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const float_1 = require("../../../field/float");
const validation_1 = require("../../../validator/error/validation");
beforeEach(() => {
    jest.restoreAllMocks();
});
describe("FloatField class integration test.", () => {
    test('Test isValid method. Contex: call validate method from Validator with null value. Expected: required field error.', () => {
        let instance = new float_1.default({
            isRequired: true
        });
        let isValid = () => { instance.isValid(null); };
        expect(isValid).toThrow();
        expect(isValid).toThrowError(validation_1.default);
        expect(isValid).toThrowError('Is required field.');
    });
    test('Test isValid method. Contex: call validate method from Validator with value bigger than template expecification. Expected: max length error.', () => {
        let instance = new float_1.default({
            maxLength: 5,
            isRequired: true
        });
        let isValid = () => { instance.isValid(10.8); };
        expect(isValid).toThrow();
        expect(isValid).toThrowError(validation_1.default);
        expect(isValid).toThrowError('Max length exceeded');
    });
    test('Test isValid method. Contex: call validate method from Validator with value small than template expecification. Expected: min length error.', () => {
        let instance = new float_1.default({
            minLength: 2,
            isRequired: true
        });
        let isValid = () => { instance.isValid(1.8); };
        expect(isValid).toThrow();
        expect(isValid).toThrowError(validation_1.default);
        expect(isValid).toThrowError('Min length exceeded');
    });
    test('Test isValid method. Contex: call validate method from Validator with any value. Expected: custom validation error.', () => {
        let instance = new float_1.default({
            isRequired: false,
            validator: (data) => false
        });
        let isValid = () => { instance.isValid(1.8); };
        expect(isValid).toThrow();
        expect(isValid).toThrowError(validation_1.default);
        expect(isValid).toThrowError('Custom validation error');
    });
    test('Test isValid method. Contex: call validate method from Validator and exclude custom validation. Expected: valid data.', () => {
        let instance = new float_1.default({
            isRequired: true,
            maxLength: 100,
            minLength: 0.1
        });
        let isValid = instance.isValid(1.8);
        expect(isValid).toBeUndefined();
    });
});
