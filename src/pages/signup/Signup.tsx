import Layout from "../../auth/components/layout/Layout";
import { signupForm } from "./signupForm";

const Signup = () => <Layout form={signupForm} page={"SIGNUP"} />;

export default Signup;