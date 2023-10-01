import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "@/entities/User";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchGetCuratorsByNick = createAsyncThunk<User[], string, ThunkConfig<string>>(
    'createEvent/fetchGetCurators',
    async (nick, thunkAPI) => {

        const {
            rejectWithValue,
            extra
        } = thunkAPI;

        try {
            const {data} = await extra.api.get(`/user/byNick/${nick}`);
            return data;
        }catch (e){
            return rejectWithValue('error');
        }
    }
);
