import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext, IAppContext } from "../../../App";
import { Form } from "../../../components/form/Form";
import { IForm } from "../../../components/form/interfaces";
import { InternalLink } from "../../../components/link/InternalLink";
import { DEFAULT_APP_PAGE, LOGIN, SIGNUP } from "../../../routes/routes";
import "./Layout.css";

type Props = {
    form: IForm,
    page: 'LOGIN' | 'SIGNUP',
}

const Layout = (props: Props) => {
    const {form, page} = props;
    const {items, onSubmit, submitText} = form;
    const {token} = useContext(AppContext) as IAppContext;
    if (token) return <Navigate to={`/${DEFAULT_APP_PAGE}`} />;
    return (
        <div className={`auth-screen ${page === 'SIGNUP' ? 'accent-bg-1' : 'accent-bg-2'}`}>
            <div className="auth-screen-head">
                <InternalLink 
                to={page === 'LOGIN' ?  `/${SIGNUP}` : `/${LOGIN}`}>
                    {page === 'LOGIN' ? 'Sign up' : 'Log in'}
                </InternalLink>
            </div>
            <div className="auth-screen-body">
                <h1>{page === 'LOGIN' ? 'Log in' : 'Sign up'}</h1>
                <Form 
                items={items} 
                onSubmit={onSubmit}    
                submitText={submitText} 
                className="auth-form"       
                />
            </div>
        </div>
    )
}

export default Layout;