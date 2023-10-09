import {FC, forwardRef, LegacyRef, memo, useCallback} from "react";
import {Card} from "@/shared/ui/Card";
import styles from './SecurityAccountForm.module.scss';
import classNames from "classnames";
import {Input} from "@/shared/ui/Input";
import {Button} from "@/shared/ui/Button";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {securityDataActions} from "@/pages/SettingsPage/model/slices/SecurityPageSlice/securityPageSlice.ts";
import {motion} from "framer-motion";

interface SecurityAccountFormProps {
    className?: string;
    email?:string;
    password?: string;
    confirmPassword?: string;
}

export const SecurityAccountForm: FC<SecurityAccountFormProps> = memo(forwardRef((props, ref) => {

    const {
        email,
        password,
        confirmPassword,
        className
    } = props;

    const dispatch = useAppDispatch();

    const onChangeEmail = useCallback((value: string) => {
        dispatch(securityDataActions.setEmail(value));
    }, [dispatch]);


    const onChangePassword = useCallback((value: string) => {
        dispatch(securityDataActions.setPassword(value));
    }, [dispatch]);

    const onChangeConfirmPassword = useCallback((value: string) => {
        dispatch(securityDataActions.setConfirmPassword(value));
    }, [dispatch]);

    return <>
        <div ref={ref as LegacyRef<HTMLDivElement>} className={styles.container}>
            <Card title={'Безопасность'} dotted className={classNames(styles.SecurityAccountForm, className)}>
                <div className={styles.inputs_container}>
                    <Input label={'Почта'} size={'l'} onChange={onChangeEmail} value={email}/>
                    <Input label={'Пароль'} size={'l'} onChange={onChangePassword}/>
                    <Input label={'Повторите пароль'} size={'l'} onChange={onChangeConfirmPassword}/>
                </div>

                <div className={styles.btns_container}>
                    <Button className={styles.btn}>Сменить почту</Button>
                    <Button className={styles.btn}>Сменить пароль</Button>
                </div>
            </Card>
        </div>
    </>

}));

export const MotionSecurityAccountForm = motion(SecurityAccountForm);
