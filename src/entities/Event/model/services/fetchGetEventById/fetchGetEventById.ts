import {createAsyncThunk} from "@reduxjs/toolkit";
import {IEvent} from "@/entities/Event";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchGetEventById = createAsyncThunk<IEvent, string, ThunkConfig<string>>(
    'fetchGetEvenById',
    async (id, thunkAPI) => {
        const {
            extra,
            rejectWithValue
        } = thunkAPI;

        try{
            const {data} = await extra.api.get<IEvent>(`/event/id/${id}`);
            return data;
        }catch (e){
            console.log(e);
            return rejectWithValue('error');
        }
    }
)
