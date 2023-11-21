import { useContext } from "react";
import { AppContext, IAppContext } from "../../App";
import Layout from "../../auth/components/layout/Layout";
import { loginForm } from "./loginForm";


const Login = () => {
    const {setToken} = useContext(AppContext) as IAppContext;
    return <Layout form={loginForm(setToken)} page={"LOGIN"} />
};

export default Login;