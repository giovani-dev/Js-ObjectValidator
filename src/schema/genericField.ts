

export type GenericFieldType = {
    validator?: (value: string) => boolean;
    maxLength?: number;
    minLength?: number;
    isRequired: boolean;
}
