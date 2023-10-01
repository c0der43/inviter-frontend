import {StateSchema} from "@/app/providers/StoreProvider";

export const getPageSelector = (state: StateSchema) => state.mainPage?.page || 1;
