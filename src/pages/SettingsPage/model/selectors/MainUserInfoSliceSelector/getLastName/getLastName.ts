import {StateSchema} from "@/app/providers/StoreProvider";

export const getLastName = (state: StateSchema) => state.settingsPage?.mainInfo?.lastName || '';
