import {FC, memo, useEffect} from "react";
import {Page} from "@/widgets/Page";
import styles from './EventPage.module.scss';
import classNames from "classnames";
import {EventInfoSection} from "@/pages/EventPage/ui/EventInfoSection/EventInfoSection.tsx";
import {EventOtherInfoSection} from "@/pages/EventPage/ui/EventOtherInfoSection/EventOtherInfoSection.tsx";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {eventPageReducer} from "@/pages/EventPage/model/slices/eventPageSlice.ts";

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

    useEffect(() => {

    }, []);

    return <>
        <AsyncReducersModule reducers={eventReducers}>
            <Page>
                <div className={classNames(styles.EventPage, className)}>
                    <EventInfoSection/>
                    <EventOtherInfoSection className={styles.other_section}/>
                </div>
            </Page>
        </AsyncReducersModule>
    </>

});

export default EventPage;
