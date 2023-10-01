import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventDurationTime = (state: StateSchema) => state.createEventForm?.eventDurationTime || '';
