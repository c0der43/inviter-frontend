import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventTime = (state: StateSchema) => state.createEventForm?.eventTime || '';
