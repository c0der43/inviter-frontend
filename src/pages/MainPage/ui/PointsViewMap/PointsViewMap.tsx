import {FC, memo} from "react";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";
import {mainPageSelectors} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";
import {useSelector} from "react-redux";

interface PointsViewMapProps{
    className?: string;
}
export const PointsViewMap: FC<PointsViewMapProps> = memo((props) => {

    const {
        className
    } = props;

    const events = useSelector(mainPageSelectors.selectAll);

    return <>
        <AppGoogleMap
            borderRadius={0}
            zoom={2}
            eventsData={events}
            className={className}/>
    </>

});
