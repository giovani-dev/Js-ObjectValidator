import { GenericFieldType } from "../schema/genericField";
import Field from "./field";
export default class StringField extends Field<string, GenericFieldType> {
    protected template: GenericFieldType;
    constructor(template: GenericFieldType);
    addValidators(template: GenericFieldType): void;
}
