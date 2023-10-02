import {FC, memo, useEffect} from "react";
import {Page} from "@/widgets/Page";
import styles from './EventPage.module.scss';
import classNames from "classnames";
import {EventInfoSection} from "@/pages/EventPage/ui/EventInfoSection/EventInfoSection.tsx";
import {EventOtherInfoSection} from "@/pages/EventPage/ui/EventOtherInfoSection/EventOtherInfoSection.tsx";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {eventPageReducer} from "@/pages/EventPage/model/slices/eventPageSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {fetchGetEventById} from "@/entities/Event";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {
    getEventCurrentEventSelector
} from "@/pages/EventPage/model/selectors/getEventCurrentEventSelector/getEventCurrentEventSelector.ts";

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

    const {id} = useParams();

    const dispatch = useAppDispatch();

    const currentEvent = useSelector(getEventCurrentEventSelector);

    useEffect(() => {
        if(id){
            dispatch(fetchGetEventById(id));
        }
    }, [dispatch, id]);

    return <>
        <AsyncReducersModule reducers={eventReducers}>
            <Page>
                <div className={classNames(styles.EventPage, className)}>
                    <EventInfoSection currentEvent={currentEvent}/>
                    <EventOtherInfoSection className={styles.other_section} currentEvent={currentEvent}/>
                </div>
            </Page>
        </AsyncReducersModule>
    </>

});

export default EventPage;
