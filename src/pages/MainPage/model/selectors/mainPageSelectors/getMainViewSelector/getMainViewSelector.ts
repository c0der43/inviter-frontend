import {StateSchema} from "@/app/providers/StoreProvider";

export const getMainViewSelector = (state: StateSchema) => state.mainPage?.view || 'STRIPS';
