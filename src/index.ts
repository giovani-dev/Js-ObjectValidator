import IntegerField from "./field/integer"
import StringField from "./field/string"
import JsonField from "./field/json"
import ListField from "./field/list"
import FieldError from "./field/error/field"
import Field from "./field/field"
import ValidationError from "./validator/error/validation"
import Validator from "./validator/interface"

type InputTemplate = {
    name: StringField,
    email: StringField,
    password: StringField
}

const body = new JsonField<InputTemplate>({
    name: new StringField({
        maxLength: 5,
        minLength: 1,
        isRequired: true
    }),
    email: new StringField({
        maxLength: 5,
        minLength: 1,
        isRequired: true
    }),
    password: new StringField({
        maxLength: 5,
        minLength: 1,
        isRequired: true
    })
});

try {
    body.isValid({
        "name": "name",
        "email": "email - email",
        "password": "p"
    });
} catch(err) {
    console.log(err);
}

export {
    IntegerField,
    StringField,
    JsonField,
    ListField,
    Field,
    FieldError,
    ValidationError,
    Validator
}