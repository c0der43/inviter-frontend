import {StateSchema} from "@/app/providers/StoreProvider";

export const getEmail = (state: StateSchema) => state.loginForm?.email ?? '';
