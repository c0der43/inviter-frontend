import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {fetchGetEventById} from "@/entities/Event";

export const fetchJoinEventById = createAsyncThunk<void, string, ThunkConfig<string>>(
    'eventPage/fetchJoinEvent',
    async (eventId, thunkAPI) => {

        const {
            extra,
            rejectWithValue,
            dispatch
        } = thunkAPI;

        try {
            await extra.api.post(`/event/join/${eventId}`);
            dispatch(fetchGetEventById(eventId));
        }catch (e){
            return rejectWithValue('error');
        }
    }
);
