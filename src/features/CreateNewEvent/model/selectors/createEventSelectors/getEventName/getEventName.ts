import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventName = (state: StateSchema) => state.createEventForm?.fields?.eventName || '';
