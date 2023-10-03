import {StateSchema} from "@/app/providers/StoreProvider";

export const getMainSelector = (state: StateSchema) => state.mainPage;
