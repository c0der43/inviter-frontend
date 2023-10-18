import {StateSchema} from "@/app/providers/StoreProvider";

export const getUserAvatarSelector = (state: StateSchema) => state.me?.authData?.avatar;
