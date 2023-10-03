import {MainUserInfoSchema} from "@/pages/SettingsPage/model/types/MainUserInfoSchema.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchInitUser, User} from "@/entities/User";

const initialState: MainUserInfoSchema = {
    isLoading: false,
    lastName: '',
    firstName: ''
}

export const mainUserInfoSlice = createSlice({
    name: 'mainUserInfoSlice',
    initialState,
    reducers: {
        setFirstName: (state, {payload}: PayloadAction<string>) => {
            state.firstName = payload;
        },
        setLastName: (state, {payload}: PayloadAction<string>) => {
            state.lastName = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchInitUser.fulfilled, (state, {payload}: PayloadAction<User>) => {
            state.lastName = payload.name;
        })
    }
});

export const {
    actions: mainUserInfoActions,
    reducer: mainUserInfoReducer
} = mainUserInfoSlice;
