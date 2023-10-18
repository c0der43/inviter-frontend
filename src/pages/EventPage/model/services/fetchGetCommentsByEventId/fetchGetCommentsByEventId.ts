import {createAsyncThunk} from "@reduxjs/toolkit";
import {Comment} from "@/entities/Comment/model/types/Comment.ts";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchGetCommentsByEventId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'eventPage/fetchGetCommentByEventId',
    async (eventId, thunkAPI) => {

        const {
            extra,
            rejectWithValue
        } = thunkAPI;

        try{
            const {data} = await extra.api.get<Comment[]>(`/comment/eventId/${eventId}`);
            return data;
        }catch (e){
            return rejectWithValue('error');
        }
    }
)
