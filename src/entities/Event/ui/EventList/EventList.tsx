import {FC} from "react";
import styles from './EventList.module.scss';
import {EventItem} from "../EventItem/EventItem.tsx";
import {IEvent} from "@/entities/Event";

interface EventListProps {
    eventList?: Array<IEvent>;
}
export const EventList: FC<EventListProps> = (props) => {

    const {
        eventList
    } = props;

    return <>
        <div className={styles.EventList}>
            {
                eventList?.map((event) => <EventItem event={event} key={event.id}/>)
            }
        </div>
    </>

}
