import {FC, memo} from "react";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";
import {mainPageSelectors} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";
import {useSelector} from "react-redux";

interface PointsViewMapProps{
    className?: string;
    borderRadius?: number;
}
export const PointsViewMap: FC<PointsViewMapProps> = memo((props) => {

    const {
        borderRadius = 0,
        className
    } = props;

    const events = useSelector(mainPageSelectors.selectAll);

    return <>
        <AppGoogleMap
            borderRadius={borderRadius}
            zoom={2}
            eventsData={events}
            className={className}/>
    </>

});
