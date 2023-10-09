import {StateSchema} from "@/app/providers/StoreProvider";

export const getMainIsLoadingSelector = (state: StateSchema) => state.mainPage?.isLoading;
