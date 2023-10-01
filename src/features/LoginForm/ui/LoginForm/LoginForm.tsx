import {FC, memo, useCallback} from "react";
import styles from './LoginForm.module.scss';
import classNames from "classnames";
import {AppImage} from "@/shared/ui/Image";
import {Text} from "@/shared/ui/Text";
import {Input} from "@/shared/ui/Input";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {loginActions, loginReducer} from "@/features/LoginForm/model/slice/loginSlice.ts";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {useSelector} from "react-redux";
import {getEmail, getPassword} from "@/features/LoginForm";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {Button} from "@/shared/ui/Button";
import {loginByEmail} from "@/features/LoginForm/services/loginByEmail/loginByEmail.ts";

interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer
};

const LoginForm: FC<LoginFormProps> = memo((props) => {

    const {
        className
    } = props;

    const dispatch = useAppDispatch();

    const email = useSelector(getEmail);
    const password = useSelector(getPassword);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onClickLogin = useCallback(async () => {
       await dispatch(loginByEmail({email, password}));
    }, [dispatch, email, password]);

    return <>
        <AsyncReducersModule reducers={initialReducers}>
            <div className={classNames(styles.Container, className)}>
                <div className={styles.logo_and_text}>
                    {/*переделать на icon*/}
                    <AppImage
                        src={'https://i.pinimg.com/564x/2b/a4/45/2ba44572c835b2f87500286639a2b9d9.jpg'} className={styles.logo}
                    />
                    <Text
                        text={'INVITER'}
                        bold={true}
                        size={'l'}/>
                </div>

                <Text
                    text={'Приятно видеть вас снова!'}
                    className={styles.hello_text}
                    bold={true}
                    size={'l'}/>

                <div className={styles.auth_data}>
                    <Input
                        size={'l'}
                        placeholder={'email'}
                        value={email}
                        onChange={onChangeEmail}
                        label={'email'}
                    />
                    <Input
                        size={'l'}
                        type={'password'}
                        placeholder={'password'}
                        value={password}
                        onChange={onChangePassword}
                        label={'password'}
                    />
                </div>

                <Button
                    onClick={onClickLogin}
                    size={'m'}
                    design={'outline'}
                    className={styles.btn_login}>Войти</Button>
            </div>
        </AsyncReducersModule>
    </>

});

export default LoginForm;
