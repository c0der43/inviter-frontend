import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {CreateCommentDto} from "@/features/CommentForm/dto/createCommentDto.ts";
import {
    fetchGetCommentsByEventId
} from "@/pages/EventPage/model/services/fetchGetCommentsByEventId/fetchGetCommentsByEventId.ts";

export const fetchAddComment = createAsyncThunk<void, {eventId: number, text: string}, ThunkConfig<string>>(
    'commentForm/addComment',
    async (props, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            dispatch
        } = thunkAPI;

        const dto: CreateCommentDto = {
            text: props.text,
            eventId: props.eventId
        };

        try{
            await extra.api.post(`/comment/create`, dto);
            dispatch(fetchGetCommentsByEventId(props.eventId + ''));
        }catch (e){
            return rejectWithValue('error');
        }
    }
)
