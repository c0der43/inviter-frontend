import {createAsyncThunk} from "@reduxjs/toolkit";
import {LoginDto} from "../../dto/Login.dto.ts";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {LOCAL_STORAGE_TOKEN} from "@/shared/const/localstorage.ts";

interface IToken {
    token: string
}
export const loginByEmail = createAsyncThunk<
    IToken,
    LoginDto,
    ThunkConfig<string>>
('login/loginByUsername', async (authData, thunkApi) => {
    const {
        extra,
        rejectWithValue
    } = thunkApi;

    try {
        const {data} = await extra.api.post<IToken>('auth/login', authData);

        if(data.token && data.token != ''){
            localStorage.setItem(LOCAL_STORAGE_TOKEN, data.token);
        }

        return data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
