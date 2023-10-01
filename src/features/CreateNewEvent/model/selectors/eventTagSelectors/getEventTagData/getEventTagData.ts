import {StateSchema} from "@/app/providers/StoreProvider";

export const GetEventTagData = (state: StateSchema) => state.createEventForm?.tags;
