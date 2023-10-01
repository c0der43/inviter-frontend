import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventCurator = (state: StateSchema) => state.createEventForm?.curators.eventCurator || '';
