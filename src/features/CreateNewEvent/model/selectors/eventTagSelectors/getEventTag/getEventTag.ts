import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventTag = (state: StateSchema) => state.createEventForm?.tags.eventTag || '';
