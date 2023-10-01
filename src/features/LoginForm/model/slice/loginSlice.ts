import {LoginSchema} from "@/features/LoginForm/model/types/loginSchema.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginByEmail} from "@/features/LoginForm/services/loginByEmail/loginByEmail.ts";

const initialState: LoginSchema = {
    email: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, {payload}: PayloadAction<string>) => {
            state.email = payload;
        },
        setPassword: (state, {payload}: PayloadAction<string>) => {
            state.password = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByEmail.rejected, (_, action) => {
                console.log(action.payload);
            })
    }
});

export const {
    actions: loginActions,
    reducer: loginReducer
} = loginSlice;
