import {createAsyncThunk} from "@reduxjs/toolkit";
import {IEvent} from "@/entities/Event";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchGetMyEvents = createAsyncThunk<IEvent[], void, ThunkConfig<string>>(
    'myEvents/fetchGetMyEvents',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue
        } = thunkAPI;

        try {
            const {data} = await extra.api.get<IEvent[]>('/event/my');
            return data;
        }catch (e){
            return rejectWithValue('error');
        }
    }
);
