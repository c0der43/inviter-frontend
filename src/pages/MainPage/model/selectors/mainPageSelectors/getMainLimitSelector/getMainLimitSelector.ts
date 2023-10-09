import {StateSchema} from "@/app/providers/StoreProvider";

export const getMainLimitSelector = (state: StateSchema) => state.mainPage?.limit || 3;
