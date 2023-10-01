import {StateSchema} from "@/app/providers/StoreProvider";

export const getLimitSelector = (state: StateSchema) => state.mainPage?.limit || 3;
