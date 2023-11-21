import { IForm } from "../../components/form/interfaces"

export const loginForm = (setToken: (token: string) => void): IForm => ({
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
    ],
    onSubmit: ({email, password}: {email: string, password: string}) => {
        setToken(`${email}${password}`)
    },
    submitText: 'Log in',
})