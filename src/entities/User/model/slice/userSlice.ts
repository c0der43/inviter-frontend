import {User, UserSchema} from "../types/user.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchInitUser} from "@/entities/User";

const initialState: UserSchema = {
    init: false,
}

export const userSlice = createSlice({
   name: 'userSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
       builder.addCase(fetchInitUser.fulfilled, (state, {payload}: PayloadAction<User>) => {
           state.authData = payload;
           state.init = true;
       })
   }
});

export const {
    actions: userActions,
    reducer: userReducer
} = userSlice;
