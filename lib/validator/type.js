"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayType = exports.ObjectType = exports.StringType = exports.FloatType = exports.IntegerType = void 0;
const validation_1 = require("./error/validation");
class IntegerType {
    validate(value) {
        if (!(Number.isInteger(value)) && value !== undefined) {
            throw new validation_1.default(`Type error`);
        }
    }
}
exports.IntegerType = IntegerType;
class FloatType {
    validate(value) {
        if (!(!Number.isInteger(value)) && value !== undefined) {
            throw new validation_1.default(`Type error`);
        }
    }
}
exports.FloatType = FloatType;
class StringType {
    validate(value) {
        if (!((typeof value).toLocaleLowerCase() === "string") && value !== undefined) {
            throw new validation_1.default(`Type error`);
        }
    }
}
exports.StringType = StringType;
class ObjectType {
    validate(value) {
        if (!(value.constructor === {}.constructor) && value !== undefined) {
            throw new validation_1.default(`Type error`);
        }
    }
}
exports.ObjectType = ObjectType;
class ArrayType {
    validate(value) {
        if (!(value.constructor === [].constructor) && value !== undefined) {
            throw new validation_1.default(`Type error`);
        }
    }
}
exports.ArrayType = ArrayType;
