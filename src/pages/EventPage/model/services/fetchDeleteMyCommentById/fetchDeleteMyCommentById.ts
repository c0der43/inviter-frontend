import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchDeleteMyCommentById = createAsyncThunk<number, {commentId: number, eventId: string}, ThunkConfig<string>>(
    'comment/fetchDeleteMyComment',
    async (props, thunkAPI) => {

        const {
            rejectWithValue,
            extra,
        } = thunkAPI;

        try {
            await extra.api.delete(`/comment/delete/${props.commentId}`);
            return props.commentId;
        }catch (e){
            return rejectWithValue('error');
        }
    }
)
