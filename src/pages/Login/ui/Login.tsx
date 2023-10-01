import {FC} from "react";
import {AuthPage} from "@/widgets/AuthPage";
import {LoginForm} from "@/features/LoginForm";

const Login: FC = () => {

    return <>
        <AuthPage>
            <LoginForm/>
        </AuthPage>
    </>

}

export default Login;
