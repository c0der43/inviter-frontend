import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventLocationName = (state: StateSchema) => state.createEventForm?.fields?.eventLocationName || '';
