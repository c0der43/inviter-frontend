import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventCurrentEventSelector = (state: StateSchema) => state.eventPage?.event?.event;
