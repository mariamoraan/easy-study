interface IFormItem {
    id: string,
    labelText: string,
    inputType: string,
}

export interface IForm {
    items: IFormItem[],
    onSubmit: (args: any) => void,
    submitText?: string,
    className?: string,
}