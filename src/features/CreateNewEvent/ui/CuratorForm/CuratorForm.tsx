import {FC, memo, useCallback} from "react";
import styles from './CuratorForm.module.scss';
import {Input} from "@/shared/ui/Input";
import {AddingUsersView} from "@/shared/ui/AddingUsersView";
import classNames from "classnames";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {useSelector} from "react-redux";
import {getEventCurator} from "@/features/CreateNewEvent/model/selectors/eventCuratorsSelectors/getEventCurator/getEventCurator.ts";
import {
    createEventCuratorActions, curatorsSelector
} from "@/features/CreateNewEvent/model/slices/curatorsEventSlice/curatorsEventSlice.ts";
import {
    fetchGetCuratorByEmail
} from "@/features/CreateNewEvent/model/services/fetchGetCuratorByEmail/fetchGetCuratorByEmail.ts";

interface CuratorFormProps {
    className?: string;
}
export const CuratorForm: FC<CuratorFormProps> = memo((props) => {

    const {
        className
    } = props;

    const dispatch = useAppDispatch();

    const eventCurator = useSelector(getEventCurator);
    const eventCurators = useSelector(curatorsSelector.selectAll);

    const onChangeEventCurator = useCallback((value: string) => {
        dispatch(createEventCuratorActions.setEventCurator(value));
    }, [dispatch]);

    const onAddCurator = useCallback(() => {
        dispatch(fetchGetCuratorByEmail(eventCurator));
    }, [dispatch, eventCurator]);

    const onDeleteCurator = useCallback((index: number) => {
        dispatch(createEventCuratorActions.deleteCurator(index));
    }, [dispatch]);


    return <>
        <div className={classNames(styles.CuratorForm, className)}>
           <Input
               btnName={'Добавить'}
               placeholder={'arnold@mail.ru'}
               onChange={onChangeEventCurator}
               maxLength={100}
               label={'Кураторы'}
               value={eventCurator}
               onClick={onAddCurator}/>

            <AddingUsersView
                users={eventCurators}
                onDelete={onDeleteCurator}/>
        </div>
    </>

});
