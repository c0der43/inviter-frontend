import {FC, memo, useCallback} from "react";
import {Card} from "@/shared/ui/Card";
import styles from './ChangeUserGeneralInformation.module.scss';
import {Input} from "@/shared/ui/Input";
import {Button} from "@/shared/ui/Button";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {getLastName} from "@/pages/SettingsPage/model/selectors/MainUserInfoSliceSelector/getLastName/getLastName.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {mainUserInfoActions} from "@/pages/SettingsPage/model/slices/MainUserInfoSlice/MainUserUnfoSlice.ts";

interface ChangeUserGeneralInformation {
    className?: string;
    firstName?: string;
}

export const ChangeUserGeneralInformationForm: FC<ChangeUserGeneralInformation> =  memo((props) => {

    const {
        firstName,
        className
    } = props;

    const dispatch = useAppDispatch();

    const onChangeLastName = useCallback((value: string) => {
        dispatch(mainUserInfoActions.setLastName(value));
    } ,[dispatch]);

    return <>
        <Card dotted className={classNames(styles.Container, className)} title={'Главная информация'}>
            <div className={styles.input_container}>
                <Input label={'Имя'} size={'l'} value={firstName} onChange={onChangeLastName}/>
                <Input label={'Фамилия'} size={'l'}/>
            </div>
            <Button className={styles.btn}>Обновить</Button>
        </Card>
    </>

});
