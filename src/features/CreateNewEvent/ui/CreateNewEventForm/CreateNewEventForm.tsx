import {FC, memo, useCallback, useState} from "react";
import classNames from "classnames";
import styles from './CreateNewEventForm.module.scss';
import {Text} from "@/shared/ui/Text";
import {Input} from "@/shared/ui/Input";
import {TextArea} from "@/shared/ui/TextArea";
import {AppDatePicker} from "@/shared/ui/AppDatePicker";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {createEventFieldsActions} from "@/features/CreateNewEvent/model/slices/createEventSlice/createEventSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {useSelector} from "react-redux";
import {getEventName} from "@/features/CreateNewEvent/model/selectors/createEventSelectors/getEventName/getEventName.ts";
import {getEventDesc} from "@/features/CreateNewEvent/model/selectors/createEventSelectors/getEventDesc/getEventDesc.ts";
import {Dayjs} from "dayjs";
import {Button} from "@/shared/ui/Button";
import {CuratorForm} from "../../ui/CuratorForm/CuratorForm.tsx";
import {ChoiceOfLocation} from "../ChoiceOfLocation/ChoiceOfLocation.tsx";
import {createEventReducer} from "@/features/CreateNewEvent/model/slices";
import {EnterTagsForm} from "@/features/CreateNewEvent/ui/EnterTagsForm/EnterTagsForm.tsx";
import {EventFileUploader} from "@/features/CreateNewEvent/ui/EventFileUploader/EventFileUploader.tsx";
import {fetchSaveEvent} from "@/features/CreateNewEvent/model/services/fetchSaveEvent/fetchSaveEvent.ts";


const initialReducer: ReducerList = {
    createEventForm: createEventReducer
};
export interface CreateNewEventFormProps {
    className?: string;
}

const CreateNewEventForm: FC<CreateNewEventFormProps> = memo(() => {

    const dispatch = useAppDispatch();

    const [file, setFile] = useState<File>();

    const eventName = useSelector(getEventName);
    const eventDesc = useSelector(getEventDesc);

    const onChangeEventName = useCallback((value: string) => {
        dispatch(createEventFieldsActions.setEventName(value));
    }, [dispatch]);

    const onChangeEventDate = useCallback((_: Dayjs | null, dateString: string) => {
        dispatch(createEventFieldsActions.setEventDate(dateString));
    }, [dispatch]);

    const onChangeEventTime = useCallback((_: Dayjs | null, dateString: string) => {
        dispatch(createEventFieldsActions.setEventTime(dateString));
    }, [dispatch]);

    const onChangeEventDurationTime = useCallback((_: Dayjs | null, dateString: string) => {
        dispatch(createEventFieldsActions.setEventDurationTime(dateString));
    }, [dispatch]);

    const onChangeEventDesc = useCallback((value: string) => {
        dispatch(createEventFieldsActions.setEventDescription(value));
    }, [dispatch]);

    const onClickSave = useCallback(() => {
        dispatch(fetchSaveEvent(file))
    }, [dispatch, file]);

    return <AsyncReducersModule reducers={initialReducer}>
            <div className={classNames(styles.EventForm)}>
                <Text title={'Создание события'} bold={true}/>

                <div className={styles.main_content}>
                    <Text text={'Создание нового ивента для сбора нужных людей!'}/>

                    <EventFileUploader onChoiceFile={setFile}/>

                    <Input
                        placeholder={'Frontend vs Backend'}
                        size={'m'}
                        onChange={onChangeEventName}
                        label={'Название'}
                        value={eventName}/>

                    <div className={styles.date_container}>
                        <AppDatePicker
                            label={'Дата'}
                            onChange={onChangeEventDate}/>
                        <AppDatePicker
                            label={'Время'}
                            picker={'time'}
                            onChange={onChangeEventTime}/>
                        <AppDatePicker
                            label={'Продолжительность'}
                            picker={'time'}
                            onChange={onChangeEventDurationTime}/>
                    </div>

                    <TextArea
                        placeholder={'Будем обсуждать выбор между backend и frontend разработкой!'}
                        label={'Описание'}
                        taStyle={'outline'}
                        onChange={onChangeEventDesc}
                        value={eventDesc}/>

                    <ChoiceOfLocation/>

                    <CuratorForm/>

                    <EnterTagsForm/>
                </div>

                <div className={styles.btn_container}>
                    <Button design={'outline'} onClick={onClickSave}>Создать</Button>
                </div>
            </div>
        </AsyncReducersModule>

});

export default CreateNewEventForm;
