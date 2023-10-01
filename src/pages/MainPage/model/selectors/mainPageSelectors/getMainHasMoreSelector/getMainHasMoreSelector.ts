import {StateSchema} from "@/app/providers/StoreProvider";

export const getMainHasMoreSelector = (state: StateSchema) => state.mainPage?.hasMore;
