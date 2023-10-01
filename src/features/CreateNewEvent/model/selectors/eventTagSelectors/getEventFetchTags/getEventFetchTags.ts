import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventFetchTags = (state: StateSchema) => state.createEventForm?.tags.tags || [];
