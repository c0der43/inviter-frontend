import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventChoiceLocation = (state: StateSchema) => state.createEventForm?.fields?.eventChoiceLocation;
