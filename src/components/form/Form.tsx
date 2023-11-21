import './Form.css';
import { IForm } from "./interfaces";

export const Form = (props: IForm) => {
    const {items, onSubmit, submitText = 'Submit', className=''} = props;
    const handleSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const itemsDict: {[key: string]: any} = {}
        items.forEach(({id}) => {
            const item = document.getElementById(id) as HTMLInputElement;
            itemsDict[id] = item.value;
        })
        onSubmit(itemsDict)
    }
    return (
        <form onSubmit={handleSubmitForm} className={`form_base ${className}`}>
            {
                items.map(({id, labelText, inputType}) => (
                    <div key={id} className="labelInputGroup">
                        <label htmlFor={id}>{labelText}</label>
                        <input type={inputType} id={id} name={id} />
                    </div>
                ))
            }
            <input type='submit' value={submitText} />
        </form>
    )
}