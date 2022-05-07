"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const float_1 = require("../../../field/float");
const length_1 = require("../../../validator/length");
const type_1 = require("../../../validator/type");
const required_1 = require("../../../validator/required");
const fieldValidator_1 = require("../../../field/error/fieldValidator");
jest.mock('../../../validator/length');
jest.mock('../../../validator/type');
jest.mock('../../../validator/required');
function floatFieldAddValidators(template) {
    let mock = jest.fn();
    let spy = jest.spyOn(float_1.default.prototype, "addValidators").mockImplementation(mock);
    let instance = new float_1.default(template);
    spy.mockRestore();
    return instance;
}
beforeEach(() => {
    jest.restoreAllMocks();
});
describe("FloatField class unit test.", () => {
    test("Test class constructor call, expected addValidator call with template parameter.", () => {
        let mockAddValidators = jest.fn();
        jest.spyOn(float_1.default.prototype, "addValidators").mockImplementation(mockAddValidators);
        let template = {
            maxLength: 15,
            minLength: 1,
            isRequired: true
        };
        new float_1.default(template);
        expect(mockAddValidators).toHaveBeenCalledTimes(1);
        expect(mockAddValidators).toHaveBeenCalledWith(template);
    });
    test("Test addValidators method. Expected NumberMaxLength, Required and FloatType objects inside a validators list.", () => {
        let template = {
            maxLength: 15,
            isRequired: true
        };
        let instance = floatFieldAddValidators(template);
        instance.addValidators(template);
        expect(required_1.default).toHaveBeenCalledTimes(1);
        expect(required_1.default).toHaveBeenCalledWith(true);
        expect(length_1.NumberMaxLength).toHaveBeenCalledTimes(1);
        expect(length_1.NumberMaxLength).toHaveBeenCalledWith(15);
        expect(type_1.FloatType).toHaveBeenCalledTimes(1);
        expect(type_1.FloatType).toHaveBeenCalledWith();
        expect(length_1.NumberMinLength).not.toHaveBeenCalled();
    });
    test('Test addValidators method. Expected validator not found error.', () => {
        let template = {
            isRequired: true,
            invalido: 'compo invalido'
        };
        let instance = floatFieldAddValidators(template);
        let addValidator = () => {
            instance.addValidators(template);
        };
        expect(addValidator).toThrow();
        expect(addValidator).toThrowError(fieldValidator_1.default);
        expect(addValidator).toThrowError('Validator not found.');
    });
});
