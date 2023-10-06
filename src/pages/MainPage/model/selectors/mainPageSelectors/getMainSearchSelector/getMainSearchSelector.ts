import {StateSchema} from "@/app/providers/StoreProvider";

export const getMainSearchSelector = (state: StateSchema) => state?.mainPage?.search || '';
