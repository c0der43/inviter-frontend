import {FC, memo} from "react";
import {EventList} from "@/entities/Event";
import {useSelector} from "react-redux";
import {mainPageSelectors} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";

export const EventsList: FC = memo(() => {

    const events = useSelector(mainPageSelectors.selectAll);

    return <>
       <EventList eventList={events}/>
    </>

});
