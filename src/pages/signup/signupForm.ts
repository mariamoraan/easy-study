import { IForm } from "../../components/form/interfaces";

export const signupForm: IForm = {
    items: [
        {
            id: 'email',
            labelText: 'Email',
            inputType: 'text',
        },
        {
            id: 'password',
            labelText: 'Password',
            inputType: 'password',
        },
        {
            id: 'password_repeat',
            labelText: 'Repeat you password',
            inputType: 'password',
        },
    ],
    onSubmit: ({email, password, password_repeat}: {email: string, password: string, password_repeat: string}) => {
        console.log(password === password_repeat);
    },
    submitText: 'Sign up',
}