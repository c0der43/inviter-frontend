import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "@/entities/User";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchGetCuratorByEmail =
    createAsyncThunk<User, string, ThunkConfig<string>>(
        'createEvent/fetchGetCuratorByEmail',
        async(email, thunkAPI) => {

            const {
                extra,
                rejectWithValue
            } = thunkAPI;

            try{
                const {data} = await extra.api.get<User>(`/user/byEmail/${email}`);
                return data;
            }catch (e){
                console.log(e);
                return rejectWithValue('error');
            }
        }
    )
