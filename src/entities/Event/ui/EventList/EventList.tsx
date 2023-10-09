import {FC, memo} from "react";
import styles from './EventList.module.scss';
import {EventItem, EventView} from "../EventItem/EventItem.tsx";
import {IEvent} from "@/entities/Event";
import {EventItemSkeleton} from "@/entities/Event/ui/EventItemSkeleton/EventItemSkeleton.tsx";
import classNames from "classnames";

interface EventListProps {
    eventList?: Array<IEvent>;
    isLoading?: boolean;
    className?: string;
    view: EventView;
}

const getSkeletons = () => new Array(3)
        .fill(0)
        .map((_, index) => <EventItemSkeleton key={index}/>)
export const EventList: FC<EventListProps> = memo((props) => {

    const {
        view,
        isLoading,
        eventList,
        className
    } = props;

    return <>
        <div className={classNames(styles.EventList, className, styles[view])}>
            {
                eventList?.map((event) =>
                    <EventItem
                        event={event}
                        key={event.id}
                        view={view}/>)
            }
            {isLoading && getSkeletons()}
        </div>
    </>
});
