import {FC, memo, useCallback, useEffect, useRef} from "react";
import {GoogleMap, Marker, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import classNames from "classnames";
import styles from './AppGoogleMap.module.scss';
import {Coordinates} from "@/shared/types/coordinates.ts";
import {IEvent} from "@/entities/Event";


const defOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false
}

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '8px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

interface AppGoogleMapProps {
    className?: string;
    choiceLocation?: Coordinates;
    eventsData?: IEvent[];
}
export const AppGoogleMap: FC<AppGoogleMapProps> = memo((props) => {

    const {
        eventsData,
        choiceLocation,
        className
    } = props;

    const mapRef = useRef<google.maps.Map>();

    useEffect(() => {
        if(mapRef.current && choiceLocation){
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(new google.maps.LatLng(choiceLocation.lat, choiceLocation.lng));
            mapRef.current?.fitBounds(bounds);
        }
    }, [choiceLocation]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCUxV7Ub2kp327zmvaOAqgp2OYaDcmhZi4",
        libraries: ['places'],
    });

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
    }, []);

    const onUnmount = useCallback(() => {
        mapRef.current = undefined;
    }, []);

    return <div className={classNames(className, styles.AppGoogleMap)}>
        {
            isLoaded ? <GoogleMap
                mapContainerStyle={containerStyle}
                center={choiceLocation != undefined ? choiceLocation:  center}
                zoom={5}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defOptions}>
                {
                   isLoaded && choiceLocation && <MarkerF position={choiceLocation}/>
                }
                {
                    eventsData?.map((item) =>
                        <Marker position={{lat: +item.locationLat, lng: +item.locationLng}}/>)
                }
            </GoogleMap> : <h1>Loading...</h1>
        }
    </div>
});
