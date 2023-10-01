import {FC, memo, useCallback} from "react";
import {PlacesAutocomplete} from "@/shared/ui/PlacesAutocomplete";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {createEventFieldsActions} from "@/features/CreateNewEvent/model/slices/createEventSlice/createEventSlice.ts";
import {useSelector} from "react-redux";
import {
    getEventLocationName
} from "@/features/CreateNewEvent/model/selectors/createEventSelectors/getEventLocationName/getEventLocationName.ts";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";
import styles from './ChoiceOfLocation.module.scss';
import {Coordinates} from "@/shared/types/coordinates.ts";
import {
    getEventChoiceLocation
} from "@/features/CreateNewEvent/model/selectors/createEventSelectors/getEvenChoiceLocation/getEventChoiceLocation.ts";

export const ChoiceOfLocation: FC = memo(() => {

    const eventLocationName = useSelector(getEventLocationName);
    const eventChoiceLocation = useSelector(getEventChoiceLocation);

    const dispatch = useAppDispatch();

    const onChangeValue = useCallback((location: string) => {
        dispatch(createEventFieldsActions.setEventLocationName(location))
    }, [dispatch]);

    const onChoiceLocationHandler = useCallback((location: Coordinates) => {
        dispatch(createEventFieldsActions.setEventChoiceLocation(location));
    },[dispatch]);

    return <>
        <div className={styles.ChoiceOfLocation}>
            <AppGoogleMap choiceLocation={eventChoiceLocation}/>
            <PlacesAutocomplete
                inputValue={eventLocationName}
                onChangeValue={onChangeValue}
                onSelectedLocation={onChoiceLocationHandler}/>
        </div>
    </>

});
