import {IEvent} from "@/entities/Event";

export interface EventPageSchema {
    isLoading: boolean;
    event?: IEvent;
}
