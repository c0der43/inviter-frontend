import {User, UserSchema} from "../types/user.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initUser} from "@/entities/User";

const initialState: UserSchema = {
    init: false,
}

export const userSlice = createSlice({
   name: 'userSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
       builder.addCase(initUser.fulfilled, (state, {payload}: PayloadAction<User>) => {
           state.authData = payload;
           state.init = true;
       })
   }
});

export const {
    actions: userActions,
    reducer: userReducer
} = userSlice;
