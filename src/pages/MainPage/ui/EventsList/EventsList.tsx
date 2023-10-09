import {FC, memo} from "react";
import {EventList} from "@/entities/Event";
import {useSelector} from "react-redux";
import {mainPageSelectors} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";
import {
    getMainIsLoadingSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getMainIsLoadingSelector/getMainIsLoadingSelector.ts";

export const EventsList: FC = memo(() => {

    const events = useSelector(mainPageSelectors.selectAll);
    const isLoading = useSelector(getMainIsLoadingSelector);

    return <>
       <EventList eventList={events} isLoading={isLoading}/>
    </>

});
