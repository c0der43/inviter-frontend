import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventDate = (state: StateSchema) => state.createEventForm?.fields.eventDate || '';
