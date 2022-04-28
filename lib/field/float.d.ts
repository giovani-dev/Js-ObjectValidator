import { GenericFieldType } from "../schema/genericField";
import Field from "./field";
export default class FloatField extends Field<number, GenericFieldType> {
    protected template: GenericFieldType;
    constructor(template: GenericFieldType);
    addValidators(template: GenericFieldType): void;
}
