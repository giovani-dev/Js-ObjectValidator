import FloatField from "../../../field/float";
import { NumberMaxLength, NumberMinLength } from "../../../validator/length";
import { FloatType } from "../../../validator/type";
import Required from "../../../validator/required";
import FieldValidatorError from "../../../field/error/fieldValidator";

jest.mock('../../../validator/length');
jest.mock('../../../validator/type');
jest.mock('../../../validator/required');

function floatFieldAddValidators(template) {
  let mock = jest.fn();
  let spy = jest.spyOn(FloatField.prototype, "addValidators").mockImplementation(mock);
  let instance = new FloatField(template);
  spy.mockRestore();
  return instance;
}

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("FloatField class unit test.", () => {
  test("Test class constructor call, expected addValidator call with template parameter.", () => {
    let mockAddValidators = jest.fn();
    jest.spyOn(FloatField.prototype, "addValidators").mockImplementation(mockAddValidators);
    let template = {
      maxLength: 15,
      minLength: 1,
      isRequired: true
    };
    
    new FloatField(template);
    
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
    
    expect(Required).toHaveBeenCalledTimes(1);
    expect(Required).toHaveBeenCalledWith(true);
    expect(NumberMaxLength).toHaveBeenCalledTimes(1);
    expect(NumberMaxLength).toHaveBeenCalledWith(15);
    expect(FloatType).toHaveBeenCalledTimes(1);
    expect(FloatType).toHaveBeenCalledWith();
    expect(NumberMinLength).not.toHaveBeenCalled();
  });

  test('Test addValidators method. Expected validator not found error.', () => {
    let template = {
      isRequired: true,
      invalido: 'compo invalido'
    };
    let instance = floatFieldAddValidators(template);
    
    let addValidator = () => {
      instance.addValidators(template)
    }

    expect(addValidator).toThrow()
    expect(addValidator).toThrowError(FieldValidatorError);
    expect(addValidator).toThrowError('Validator not found.');
  });
});