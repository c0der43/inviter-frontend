import {SecurityPageSchema} from "@/pages/SettingsPage/model/types/SecurityPageSchema.ts";
import {MainUserInfoSchema} from "@/pages/SettingsPage/model/types/MainUserInfoSchema.ts";

export interface SettingsPageSchema {
    security: SecurityPageSchema;
    mainInfo: MainUserInfoSchema;
}
