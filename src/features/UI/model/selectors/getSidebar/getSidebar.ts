import {StateSchema} from "@/app/providers/StoreProvider";

export const getSidebar = (state: StateSchema) => state.ui.sidebar;
