import {Coordinates} from "@/shared/types/coordinates.ts";

export interface CreateEventFieldsSchema {
    eventName: string;
    eventDate: string;
    eventTime: string;
    eventDurationTime: string;
    eventDescription: string;
    eventLocationName: string;
    eventChoiceLocation: Coordinates;
    isLoading: boolean;
}
