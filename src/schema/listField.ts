import Field from "../field/field";


export type ListFieldType = {
    validator?: (value: string) => boolean;
    maxLength?: number;
    minLength?: number;
    isRequired: boolean;
    contentType: Field<any, any>
}