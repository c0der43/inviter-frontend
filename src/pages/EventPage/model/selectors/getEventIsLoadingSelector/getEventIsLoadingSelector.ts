import {StateSchema} from "@/app/providers/StoreProvider";

export const getEventIsLoadingSelector = (state: StateSchema) => state.eventPage?.isLoading;
