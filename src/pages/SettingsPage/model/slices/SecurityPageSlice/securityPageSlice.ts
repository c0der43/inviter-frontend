import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SecurityPageSchema} from "@/pages/SettingsPage/model/types/SecurityPageSchema.ts";
import {fetchInitUser, User} from "@/entities/User";

const initialState: SecurityPageSchema = {
    isLoading: false,
    email: '',
    password: '',
    confirmPassword: ''
}
export const securityPageSlice = createSlice({
    name: 'securityPageSlice',
    initialState,
    reducers: {
        setEmail: (state, {payload}: PayloadAction<string>) => {
            state.email = payload;
        },
        setPassword: (state, {payload}: PayloadAction<string>) => {
            state.password = payload;
        },
        setConfirmPassword: (state, {payload}: PayloadAction<string>) => {
            state.confirmPassword = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchInitUser.fulfilled, (state, {payload}: PayloadAction<User>) => {
            state.email = payload.email;
        })
    }
});

export const {
    actions: securityDataActions,
    reducer: securityDataReducer
} = securityPageSlice;
