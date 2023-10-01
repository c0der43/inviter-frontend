import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventDesc = (state: StateSchema) => state.createEventForm?.fields?.eventDescription || '';
