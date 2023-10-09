import {FC, memo} from "react";
import styles from './EventList.module.scss';
import {EventItem} from "../EventItem/EventItem.tsx";
import {IEvent} from "@/entities/Event";
import {EventItemSkeleton} from "@/entities/Event/ui/EventItemSkeleton/EventItemSkeleton.tsx";

interface EventListProps {
    eventList?: Array<IEvent>;
    isLoading?: boolean;
}

const getSkeletons = () => new Array(3)
        .fill(0)
        .map((_, index) => <EventItemSkeleton key={index}/>)

export const EventList: FC<EventListProps> = memo((props) => {

    const {
        isLoading,
        eventList
    } = props;

    return <>
        <div className={styles.EventList}>
            {
                eventList?.map((event) => <EventItem event={event} key={event.id}/>)
            }
            {isLoading && getSkeletons()}
        </div>
    </>
});
