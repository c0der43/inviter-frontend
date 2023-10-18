import {IEvent} from "@/entities/Event";

export interface EventPageDataSchema {
    isLoading: boolean;
    event?: IEvent;
}
