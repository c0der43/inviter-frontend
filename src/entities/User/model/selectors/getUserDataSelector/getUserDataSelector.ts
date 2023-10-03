import {StateSchema} from "@/app/providers/StoreProvider";

export const getUserDataSelector = (state: StateSchema) => state?.me.authData;
