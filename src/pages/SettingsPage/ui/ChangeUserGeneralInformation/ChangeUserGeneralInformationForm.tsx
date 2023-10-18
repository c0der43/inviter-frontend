import {FC, ForwardedRef, forwardRef, memo, useCallback} from "react";
import {Card} from "@/shared/ui/Card";
import styles from './ChangeUserGeneralInformation.module.scss';
import {Input} from "@/shared/ui/Input";
import {Button} from "@/shared/ui/Button";
import classNames from "classnames";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {mainUserInfoActions} from "@/pages/SettingsPage/model/slices/MainUserInfoSlice/MainUserUnfoSlice.ts";
import {motion} from "framer-motion";

interface ChangeUserGeneralInformation {
    className?: string;
    firstName?: string;
    lastName?: string;
}

export const ChangeUserGeneralInformationForm: FC<ChangeUserGeneralInformation> =  memo(forwardRef((props, ref) => {

    const {
        lastName,
        firstName,
        className
    } = props;

    const dispatch = useAppDispatch();

    const onChangeLastName = useCallback((lastName: string) => {
        dispatch(mainUserInfoActions.setLastName(lastName));
    } ,[dispatch]);

    const onChangeFirstName = useCallback((firstName: string) => {
        dispatch(mainUserInfoActions.setFirstName(firstName));
    }, [dispatch]);

    return <>
        <div ref={ref as ForwardedRef<HTMLDivElement>} style={{zIndex:'2'}}>
            <Card dotted className={classNames(styles.Container, className)} title={'Главная информация'}>
                <div className={styles.input_container}>
                    <Input label={'Имя'} size={'l'} value={firstName} onChange={onChangeLastName}/>
                    <Input label={'Фамилия'} size={'l'} value={lastName} onChange={onChangeFirstName}/>
                </div>
                <Button className={styles.btn}>Обновить</Button>
            </Card>
        </div>
    </>

}));

export const MotionChangeUserGeneralInformationForm = motion(ChangeUserGeneralInformationForm);
