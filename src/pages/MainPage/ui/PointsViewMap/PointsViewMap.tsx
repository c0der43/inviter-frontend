import {FC, memo} from "react";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";
import {mainPageSelectors} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";
import {useSelector} from "react-redux";

export const PointsViewMap: FC = memo(() => {

    const events = useSelector(mainPageSelectors.selectAll);

    return <>
        <AppGoogleMap eventsData={events}/>
    </>

});
