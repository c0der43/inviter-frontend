import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchDeleteMyCommentById = createAsyncThunk<void, number, ThunkConfig<string>>(
    'comment/fetchDeleteMyComment',
    async (commentId, thunkAPI) => {

        const {
            rejectWithValue,
            extra
        } = thunkAPI;

        try {
            await extra.api.delete(`/comment/delete/${commentId}`);
        }catch (e){
            return rejectWithValue('error');
        }
    }
)
