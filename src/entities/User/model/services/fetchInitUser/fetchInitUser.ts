import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "@/entities/User";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchInitUser =
    createAsyncThunk<User, void, ThunkConfig<string>>(
        'user/init',
        async (_, thunkAPI) => {
            const {
                extra,
                rejectWithValue,
            } = thunkAPI;

            try {
                const {data} = await extra.api.get('/user/me');
                return data;
            }catch (e){
                console.log(e);
                return rejectWithValue('error');
            }
        }
    )
