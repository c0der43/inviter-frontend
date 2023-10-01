import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventFields = (state: StateSchema) => state.createEventForm?.fields;
