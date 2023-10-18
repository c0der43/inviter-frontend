import {FC, memo, useCallback, useEffect, useState} from "react";
import {Page} from "@/widgets/Page";
import styles from './EventPage.module.scss';
import classNames from "classnames";
import {EventInfoSection} from "@/pages/EventPage/ui/EventInfoSection/EventInfoSection.tsx";
import {EventOtherInfoSection} from "@/pages/EventPage/ui/EventOtherInfoSection/EventOtherInfoSection.tsx";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {fetchGetEventById} from "@/entities/Event";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {
    getEventCurrentEventSelector
} from "@/pages/EventPage/model/selectors/getEventCurrentEventSelector/getEventCurrentEventSelector.ts";
import {eventPageReducer} from "@/pages/EventPage/model/slices";
import {
    fetchGetCommentsByEventId
} from "@/pages/EventPage/model/services/fetchGetCommentsByEventId/fetchGetCommentsByEventId.ts";


interface EventPageProps {
    className?: string;
}

const eventReducers: ReducerList = {
    eventPage: eventPageReducer
}

const EventPage: FC<EventPageProps> = memo((props) => {

    const {
        className
    } = props;

    const [visible, setVisible] = useState<boolean>(true);

    const onClickCloseWindow = useCallback(() => {
        setVisible(false);
    }, []);

    const onClickChangeVisible = useCallback(() => {
        setVisible(prev => !prev);
    }, []);

    const {id} = useParams();

    const dispatch = useAppDispatch();

    const currentEvent = useSelector(getEventCurrentEventSelector);

    useEffect(() => {
        if(id){
            dispatch(fetchGetEventById(id));
            dispatch(fetchGetCommentsByEventId(id));
        }
    }, [dispatch, id]);

    return <>
        <AsyncReducersModule reducers={eventReducers}>
            <Page>
                <div className={classNames(styles.EventPage, className)}>
                    <EventInfoSection
                        onVisibleInfoSectionHandler={onClickChangeVisible}
                        currentEvent={currentEvent}
                        className={styles.info_section}/>

                    {
                        visible && <EventOtherInfoSection
                            onCloseWindow={onClickCloseWindow}
                            eventId={id}
                            className={styles.other_section}
                            currentEvent={currentEvent}/>
                    }
                </div>
            </Page>
        </AsyncReducersModule>
    </>

});
export default EventPage;
