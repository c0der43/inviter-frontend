import {FC, memo} from "react";
import usePlacesAutocomplete, {
    getGeocode, getLatLng

} from "use-places-autocomplete";
import styles from './PlacesAutoComplete.module.scss';
import {Input} from "@/shared/ui/Input";
import classNames from "classnames";
import {Coordinates} from "@/shared/types/coordinates.ts";

interface PlacesAutocompleteProps {
    className?: string;
    inputValue?: string;
    onChangeValue?: (value: string) => void;
    onSelectedLocation?: (coordinates: Coordinates) => void;
}
export const PlacesAutocomplete: FC<PlacesAutocompleteProps> = memo((props) => {

    const {
        onSelectedLocation,
        inputValue,
        className,
        onChangeValue
    } = props;

    const {
        //ready,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete();

    const onInputHandler = (value: string) => {
        onChangeValue?.(value);
        setValue(value);
    };

    const onChoiceLocation = async (value: string) => {
        onChangeValue?.(value);
        clearSuggestions();

        const res = await getGeocode({address: value});
        onSelectedLocation?.(await getLatLng(res[0]));
    }

    return <div className={classNames(styles.PlacesAutoComplete, className)}>
        <Input
            value={inputValue}
            placeholder={'Локация'}
            onChange={onInputHandler}/>

        <div className={styles.items_container}>
            {
                status === 'OK' && data.map(({place_id, description}) =>
                        <div className={styles.item} key={place_id} onClick={() => onChoiceLocation(description)}>
                            {description}
                        </div>)
            }
        </div>
    </div>
});
