import { ListFieldType } from "../schema/listField";
import Field from "./field";
export default class ListField extends Field<Array<any>, ListFieldType> {
    protected template: ListFieldType;
    constructor(template: ListFieldType);
    isValid(value: Array<any>): void;
    addValidators(template: ListFieldType): void;
}
