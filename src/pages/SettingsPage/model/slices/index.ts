import {combineReducers} from "@reduxjs/toolkit";
import {SettingsPageSchema} from "@/pages/SettingsPage/model/types/SettingsPageSchema.ts";
import {mainUserInfoReducer} from "@/pages/SettingsPage/model/slices/MainUserInfoSlice/MainUserUnfoSlice.ts";
import {securityDataReducer} from "@/pages/SettingsPage/model/slices/SecurityPageSlice/securityPageSlice.ts";

export const SettingsPageReducer = combineReducers<SettingsPageSchema>({
    mainInfo: mainUserInfoReducer,
    security: securityDataReducer
})
