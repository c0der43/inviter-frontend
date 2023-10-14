import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {CreateCommentDto} from "@/features/CommentForm/dto/createCommentDto.ts";
import {
    getCommentFormTextSelector
} from "@/features/CommentForm/model/selectors/getCommentFormTextSelector/getCommentFormTextSelector.ts";

export const fetchAddComment = createAsyncThunk<void, number, ThunkConfig<string>>(
    'commentForm/addComment',
    async (eventId, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;

        const text = getCommentFormTextSelector(getState());

        const dto: CreateCommentDto = {
            text,
            eventId
        };

        try{
            await extra.api.post(`/comment/create`, dto);
        }catch (e){
            return rejectWithValue('error');
        }
    }
)
