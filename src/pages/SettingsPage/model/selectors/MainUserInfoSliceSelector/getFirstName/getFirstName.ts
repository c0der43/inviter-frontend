import {StateSchema} from "@/app/providers/StoreProvider";

export const getFirstName = (state: StateSchema) => state.settingsPage?.mainInfo?.firstName ?? '';
