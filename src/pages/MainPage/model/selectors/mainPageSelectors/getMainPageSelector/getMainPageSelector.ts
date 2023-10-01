import {StateSchema} from "@/app/providers/StoreProvider";

export const getMainPageSelector = (state: StateSchema) => state.mainPage?.page || 1;
