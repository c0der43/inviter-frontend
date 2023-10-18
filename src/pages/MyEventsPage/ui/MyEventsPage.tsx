import {FC, memo, useEffect} from "react";
import {Page} from "@/widgets/Page";
import styles from './MyEventsPage.module.scss';
import {Text} from "@/shared/ui/Text";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {MyEventsPageReducer} from "@/pages/MyEventsPage/model/slices/MyEventPageSlice/MyEventPageSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {fetchGetMyEvents} from "@/pages/MyEventsPage/model/services/fetchGetMyEvents/fetchGetMyEvents.ts";

const reducersList: ReducerList = {
    myEventsPage: MyEventsPageReducer
}

const MyEventsPage: FC = memo(() => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGetMyEvents());
    }, [dispatch]);

    return <>
        <AsyncReducersModule reducers={reducersList}>
            <Page>
                <div className={styles.MyEventsPage}>
                    <Text title={'Ты создал gg ивентов!'} size={'l'} bold/>
                </div>
            </Page>
        </AsyncReducersModule>
    </>

});

export default MyEventsPage;
