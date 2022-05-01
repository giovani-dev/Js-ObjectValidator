import FloatField from "../../../field/float";
import ValidationError from "../../../validator/error/validation";

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("FloatField class integration test.", () => {
  test('Test isValid method. Contex: call validate method from Validator with null value. Expected: required field error.', () => {
    let instance = new FloatField({
      isRequired: true
    })

    let isValid = () => { instance.isValid(null as any) };
    expect(isValid).toThrow()
    expect(isValid).toThrowError(ValidationError);
    expect(isValid).toThrowError('Is required field.');
  });

  test('Test isValid method. Contex: call validate method from Validator with value bigger than template expecification. Expected: max length error.', () => {
    let instance = new FloatField({
      maxLength: 5,
      isRequired: true
    })

    let isValid = () => { instance.isValid(10.8) };
    expect(isValid).toThrow()
    expect(isValid).toThrowError(ValidationError);
    expect(isValid).toThrowError('Max length exceeded');
  });

  test('Test isValid method. Contex: call validate method from Validator with value small than template expecification. Expected: min length error.', () => {
    let instance = new FloatField({
      minLength: 2,
      isRequired: true
    })

    let isValid = () => { instance.isValid(1.8) };
    expect(isValid).toThrow()
    expect(isValid).toThrowError(ValidationError);
    expect(isValid).toThrowError('Min length exceeded');
  });

  test('Test isValid method. Contex: call validate method from Validator with any value. Expected: custom validation error.', () => {
    let instance = new FloatField({
      isRequired: false,
      validator: (data: any) => false
    })

    let isValid = () => { instance.isValid(1.8) };
    expect(isValid).toThrow()
    expect(isValid).toThrowError(ValidationError);
    expect(isValid).toThrowError('Custom validation error');
  });

  test('Test isValid method. Contex: call validate method from Validator and exclude custom validation. Expected: valid data.', () => {
    let instance = new FloatField({
      isRequired: true,
      maxLength: 100,
      minLength: 0.1
    })

    let isValid = instance.isValid(1.8);
    expect(isValid).toBeUndefined()
  });
});