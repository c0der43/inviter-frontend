import {FC, memo} from "react";
import {EventList, EventView} from "@/entities/Event";
import {useSelector} from "react-redux";
import {mainPageSelectors} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";
import {
    getMainIsLoadingSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getMainIsLoadingSelector/getMainIsLoadingSelector.ts";

interface EventsListProps{
    classNames?: string;
    view: EventView;
}
export const EventsList: FC<EventsListProps> = memo((props) => {

    const {
        view,
        classNames
    } = props;

    const events = useSelector(mainPageSelectors.selectAll);
    const isLoading = useSelector(getMainIsLoadingSelector);

    return <>
       <EventList
           view={view}
           className={classNames}
           eventList={events}
           isLoading={isLoading}/>
    </>

});
